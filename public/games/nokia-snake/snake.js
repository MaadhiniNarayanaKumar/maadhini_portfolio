document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const scoreDisplay = document.querySelector("#score");
  const startBtn = document.querySelector(".start");
  const statusEl = document.querySelector("#status");

  const width = 10;
  for (let i = 0; i < width * width; i++) {
    grid.appendChild(document.createElement("div"));
  }

  const squares = document.querySelectorAll(".grid div");
  let appleIndex = 0;
  let currentSnake = [2, 1, 0];
  let direction = 1;
  let score = 0;
  const speed = 0.9;
  let intervalTime = 0;
  let interval = 0;

  function setDirection(next) {
    if (next === -direction) return;
    direction = next;
  }

  function startGame() {
    currentSnake.forEach((index) => squares[index].classList.remove("snake"));
    squares[appleIndex].classList.remove("apple");
    clearInterval(interval);
    score = 0;
    direction = 1;
    scoreDisplay.textContent = score;
    statusEl.textContent = "Arrow keys, or the pad below.";
    intervalTime = 1000;
    currentSnake = [2, 1, 0];
    currentSnake.forEach((index) => squares[index].classList.add("snake"));
    randomApple();
    interval = setInterval(moveOutcomes, intervalTime);
  }

  function moveOutcomes() {
    if (
      (currentSnake[0] + width >= width * width && direction === width) ||
      (currentSnake[0] % width === width - 1 && direction === 1) ||
      (currentSnake[0] % width === 0 && direction === -1) ||
      (currentSnake[0] - width < 0 && direction === -width) ||
      squares[currentSnake[0] + direction].classList.contains("snake")
    ) {
      statusEl.textContent = "Game over";
      return clearInterval(interval);
    }

    const tail = currentSnake.pop();
    squares[tail].classList.remove("snake");
    currentSnake.unshift(currentSnake[0] + direction);

    if (squares[currentSnake[0]].classList.contains("apple")) {
      squares[currentSnake[0]].classList.remove("apple");
      squares[tail].classList.add("snake");
      currentSnake.push(tail);
      randomApple();
      score++;
      scoreDisplay.textContent = score;
      clearInterval(interval);
      intervalTime = Math.max(80, intervalTime * speed);
      interval = setInterval(moveOutcomes, intervalTime);
    }

    squares[currentSnake[0]].classList.add("snake");
  }

  function randomApple() {
    do {
      appleIndex = Math.floor(Math.random() * squares.length);
    } while (squares[appleIndex].classList.contains("snake"));
    squares[appleIndex].classList.add("apple");
  }

  function control(event) {
    if (event.key === "ArrowRight") setDirection(1);
    else if (event.key === "ArrowUp") setDirection(-width);
    else if (event.key === "ArrowLeft") setDirection(-1);
    else if (event.key === "ArrowDown") setDirection(width);
    else return;
    event.preventDefault();
  }

  document.addEventListener("keydown", control);
  startBtn.addEventListener("click", startGame);

  document.querySelectorAll("[data-dir]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = {
        right: 1,
        left: -1,
        up: -width,
        down: width,
      }[button.dataset.dir];
      setDirection(next);
    });
  });
});
