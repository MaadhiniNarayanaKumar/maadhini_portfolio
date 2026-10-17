"use client";

import React from "react";
import "../../../styles/proj1.css";

const github =
  "https://github.com/MaadhiniNarayanaKumar/snake-game-from-oldnokia-using-html-css-js";

export default function NokiaSnakePage() {
  return (
    <div className="pj-root">
      <div className="pj-hero" id="overview">
        <div className="pj-eyebrow">
          <span>HTML</span>
          <span> · CSS</span>
          <span> · JavaScript</span>
          <span> · 2023</span>
        </div>
        <h1 className="pj-hero-title">
          Nokia Snake
          <br />
          <span>The first page I shipped.</span>
        </h1>
        <p className="pj-tagline">
          A browser remake of the old Nokia snake, built in February 2023 from a
          grid of divs, a timer, and the arrow keys. No canvas, no framework.
        </p>
        <p className="pj-impact">
          The copy below is the same rules as that repo, with the layout fixed so
          the board and the score are actually visible on this site.
        </p>
        <div className="pj-hero-chips">
          {["HTML", "CSS", "JavaScript", "10×10 grid", "First project"].map((chip) => (
            <span className="pj-chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
        <a className="pj-hero-link" href={github} target="_blank" rel="noopener noreferrer">
          View repository →
        </a>
      </div>

      <section className="pj-section" id="play">
        <div className="pj-label">Play</div>
        <h2 className="pj-title">Start, then steer.</h2>
        <p className="pj-body">
          Click Start / Restart. Arrow keys change direction. On a phone, use the
          pad under the board. Eat the red apple to grow. The loop gets faster
          after each apple. A wall or your own tail ends the run.
        </p>
        <div className="pj-play-frame">
          <iframe
            src="/games/nokia-snake/index.html"
            title="Playable Nokia Snake"
            className="pj-play-frame-iframe"
          />
        </div>
      </section>

      <section className="pj-section" id="how-it-works">
        <div className="pj-label">How it works</div>
        <h2 className="pj-title">One array, one interval.</h2>
        <div className="pj-problem-grid pj-problem-grid-matrix">
          <div className="pj-problem-card">
            <div className="pj-problem-num">01</div>
            <div className="pj-problem-title">The board is 100 divs</div>
            <div className="pj-problem-desc">
              A 10 by 10 flex grid. The snake is the cells that have the snake
              class. The apple is one other cell.
            </div>
          </div>
          <div className="pj-problem-card">
            <div className="pj-problem-num">02</div>
            <div className="pj-problem-title">The body is an array</div>
            <div className="pj-problem-desc">
              It starts as [2, 1, 0], head first. Each tick drops the tail and
              pushes a new head one step in the current direction.
            </div>
          </div>
          <div className="pj-problem-card">
            <div className="pj-problem-num">03</div>
            <div className="pj-problem-title">Direction is a number</div>
            <div className="pj-problem-desc">
              Right is +1, left is −1, down is +10, up is −10. That is enough to
              walk a row-major grid.
            </div>
          </div>
          <div className="pj-problem-card">
            <div className="pj-problem-num">04</div>
            <div className="pj-problem-title">Apples speed it up</div>
            <div className="pj-problem-desc">
              Eating puts the tail back, adds a point, and restarts the timer at
              0.9× the previous delay, down to 80ms.
            </div>
          </div>
        </div>
      </section>

      <section className="pj-section" id="notes">
        <div className="pj-label">From the 2023 file</div>
        <h2 className="pj-title">What I kept, and what I fixed to embed it.</h2>
        <div className="pj-problem-grid pj-problem-grid-matrix">
          <div className="pj-problem-card">
            <div className="pj-problem-num">Kept</div>
            <div className="pj-problem-title">The original rules</div>
            <div className="pj-problem-desc">
              Wall checks, self-collision, random apple that skips the snake, and
              the same starting speed.
            </div>
          </div>
          <div className="pj-problem-card">
            <div className="pj-problem-num">Fixed</div>
            <div className="pj-problem-title">The board sat off-screen</div>
            <div className="pj-problem-desc">
              The original frame placed the grid at left: 110%, and the score was
              black text on a black page. The start button had no styles.
            </div>
          </div>
          <div className="pj-problem-card">
            <div className="pj-problem-num">Fixed</div>
            <div className="pj-problem-title">Arrow keys erased cell 0</div>
            <div className="pj-problem-desc">
              Every keyup removed the snake class from the first cell, even when
              that cell was part of the body.
            </div>
          </div>
          <div className="pj-problem-card">
            <div className="pj-problem-num">Fixed</div>
            <div className="pj-problem-title">Game over stays on the board</div>
            <div className="pj-problem-desc">
              The repo calls alert. Here the message sits under the grid, and a
              180° turn is ignored so the snake does not eat itself instantly.
            </div>
          </div>
        </div>
      </section>

      <div className="pj-footer">
        <span className="pj-footer-left">Nokia Snake · February 2023</span>
        <span className="pj-footer-badge">First HTML project</span>
      </div>
    </div>
  );
}
