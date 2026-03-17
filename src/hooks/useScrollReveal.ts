"use client";
import { useEffect, useRef, useState } from 'react';

interface Options {
  threshold?: number;
  delay?: number;
}

export function useScrollReveal<T extends HTMLElement>({ threshold = 0.2, delay = 0 }: Options = {}) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => setVisible(true), delay);
          } else {
            setVisible(true);
          }
          obs.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold, delay]);

  return { ref, visible };
}