"use client";
import React from 'react';
import '../../styles/quote-band.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const QUOTE = {
  text: [
    "Markets reflect behavior. Models reveal patterns. I connect the two.",
  ],
  attribution: "Quantitative Finance Professional",
};

export default function QuoteBand() {
  const { ref, visible } = useScrollReveal<HTMLElement>({ threshold: 0.3 });

  return (
    <section ref={ref} className="quote-section">

      {/* ── Top-left corner quote ── */}
      <span className={`quote-corner-tl reveal reveal-fade ${visible ? 'is-visible' : ''}`}>
        ❝
      </span>

      {/* ── Bottom-right corner quote ── */}
      <span className={`quote-corner-br reveal reveal-fade reveal-delay-6 ${visible ? 'is-visible' : ''}`}>
        ❞
      </span>

      {/* ── Center content ── */}
      <div className={`quote-inner reveal reveal-up ${visible ? 'is-visible' : ''}`}>

        <blockquote className="quote-text">
          {QUOTE.text.map((line, i) => (
            <span
              key={i}
              className={`quote-line-text reveal reveal-up reveal-delay-${i + 1} ${visible ? 'is-visible' : ''}`}
            >
              {line}
            </span>
          ))}
        </blockquote>

        <div className={`quote-attribution reveal reveal-up reveal-delay-5 ${visible ? 'is-visible' : ''}`}>
          <div className="quote-divider-line" />
          <span>{QUOTE.attribution}</span>
          <div className="quote-divider-line" />
        </div>

      </div>

    </section>
  );
}