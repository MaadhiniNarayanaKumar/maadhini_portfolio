"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/hero.css';

const roles = [
  'AI/ML Engineer',
  'Quantitative Researcher',
  'Data Scientist',
  'Financial Modeler',
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = roles[currentRole];

    if (typing && displayed.length === word.length) {
      const pause = setTimeout(() => setTyping(false), 1800);
      return () => clearTimeout(pause);
    }

    if (!typing && displayed.length === 0) {
      setCurrentRole((prev) => (prev + 1) % roles.length);
      setTyping(true);
      return;
    }

    const speed = typing ? 65 : 35;
    const timer = setTimeout(() => {
      setDisplayed(typing
        ? word.slice(0, displayed.length + 1)
        : word.slice(0, displayed.length - 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, typing, currentRole]);

  return (
    <section className="hero-section">

      {/* ── Image — z-index 1, behind text ── */}
      <div className="hero-image-card">
        <Image
          src="/assets/images/profile-new.jpg"
          alt="Maadhini Narayanakumar"
          fill
          sizes="420px"
          className="hero-img"
          priority
          quality={100}
        />
      </div>

      {/* ── Text — z-index 2, in front of image ── */}
      <div className="hero-text-layer">

        <div className="hero-line hero-line-1">
          <span className="hero-hey">Hey, I&apos;m</span>
        </div>

        <div className="hero-line hero-line-2">
          <span className="hero-hey">Maadhini.</span>
        </div>

        {/* <div className="hero-line hero-line-3">
          <span className="hero-lastname">Narayanakumar.</span>
        </div> */}

      </div>

      {/* ── Bottom bar ── */}
      {/* <div className="hero-bottom-bar">
        <div className="hero-role-wrap">
          <span className="hero-role-prefix">I am a </span>
          <span className="hero-role-text">
            {displayed}
            <span className="hero-cursor">|</span>
          </span>
        </div>

        <div className="hero-ctas">
          <Link href="/projects" className="hero-cta-primary">
            View My Work →
          </Link>
          <Link href="/contact" className="hero-cta-secondary">
            Let's Connect
          </Link>
          <a href="/resume.pdf" download className="hero-cta-ghost">
            Download CV ↓
          </a>
        </div> 
      </div>*/}

      {/* ── Scroll indicator ── */}
      <div className="hero-scroll-indicator">
        <span className="hero-scroll-arrow">↓</span>
      </div>

    </section>
  );
}