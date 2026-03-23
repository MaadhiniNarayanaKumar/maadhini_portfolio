"use client";
import React, { useEffect, useState, useRef, useMemo } from 'react';
import ContactCTA from '../../components/home/ContactCTA';
import '../../styles/about.css';
import Link from 'next/link';
import ResumeButton from '../../components/ui/ResumeButton';

/* ════════════════════════════════════════
   HOOK
════════════════════════════════════════ */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ════════════════════════════════════════
   TL;DR + PROOF
════════════════════════════════════════ */
function TLDR() {
  const { ref, visible } = useReveal(0.15);

  return (
    <section ref={ref} className="ab-tldr">
      <div className={`ab-tldr-inner reveal reveal-up ${visible ? 'is-visible' : ''}`}>
        <div className="ab-tldr-eyebrow">
          <div className="ab-tldr-line" />
          <span>TL;DR</span>
          <div className="ab-tldr-line" />
        </div>

        <h2 className="ab-tldr-title">
          Quant + ML builder focused on extracting signal from noisy systems.
        </h2>

        <div className="ab-tldr-grid">
          <div className="ab-tldr-card">
            <div className="ab-tldr-card-title">What I do</div>
            <ul className="ab-tldr-list">
              <li>Systematic trading &amp; alpha research (time series + alternative data)</li>
              <li>NLP/LLM systems for finance (RAG, doc intelligence)</li>
              <li>Production ML engineering (pipelines, evaluation, monitoring)</li>
            </ul>
          </div>

          <div className="ab-tldr-card">
            <div className="ab-tldr-card-title">Now</div>
            <ul className="ab-tldr-list">
              <li>
                <strong>Rutgers Business School</strong> — M.S. Quantitative Finance
              </li>
              <li>Building toward the convergence of math, markets, and ML</li>
            </ul>
          </div>

          <div className="ab-tldr-card ab-tldr-card-cta">
            <div className="ab-tldr-card-title">Quick links</div>
            <div className="ab-tldr-ctas">
              <a href="/resume.pdf" download className="ab-tldr-btn ab-tldr-btn-primary">
                Download resume →
              </a>
              <Link href="/projects" className="ab-tldr-btn ab-tldr-btn-secondary">
                View projects →
              </Link>
              <Link href="/contact" className="ab-tldr-btn ab-tldr-btn-ghost">
                Contact →
              </Link>
            </div>
            <div className="ab-tldr-note">Prefer a deep read? Scroll for the full story.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   OPENING
════════════════════════════════════════ */
function Opening() {
  const [mounted, setMounted] = useState(false);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Scroll-reactive orb
  useEffect(() => {
    const handleScroll = () => {
      if (!orbRef.current) return;
      const y = window.scrollY * 0.15;
      orbRef.current.style.transform = `translate(-50%, -50%) translateY(${y}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="ab-opening">
      <div className="ab-opening-grid" />
      <div ref={orbRef} className="ab-opening-orb" />
      <div className="ab-opening-inner">
        <div
          className={`ab-opening-label ${mounted ? 'ab-visible' : ''}`}
          style={{ animationDelay: '0.1s' }}
        >
          The Story of Where I Come From
        </div>
        <h1
          className={`ab-opening-statement ${mounted ? 'ab-visible' : ''}`}
          style={{ animationDelay: '0.3s' }}
        >
          I didn’t choose mathematics.<br />
          <span className="ab-opening-accent">
            Mathematics chose the questions
          </span>
          <br />
          I couldn’t stop asking.
        </h1>
        <p
          className={`ab-opening-sub ${mounted ? 'ab-visible' : ''}`}
          style={{ animationDelay: '0.55s' }}
        >
          Four origins. One trajectory.
        </p>
        <div
          className={`ab-opening-scroll ${mounted ? 'ab-visible' : ''}`}
          style={{ animationDelay: '0.75s' }}
        >
          <span className="ab-scroll-line" />
          <span className="ab-scroll-text">scroll to read</span>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   TIMELINE CHAPTERS
════════════════════════════════════════ */
const chapters = [
  {
    number: 'I',
    label: 'Origin',
    tag: 'Cultural Origin',
    title: 'The Patience I Inherited',
    pull: '"I am comfortable with problems that do not resolve quickly."',
    bg: 'culture',
    takeaways: [
      'Long time horizons feel natural;',
      ' I iterate instead of abandoning the question.',
      'Precision isn’t aesthetic — it’s a discipline ',
      'I apply to models and systems.',
      'I’m drawn to work where craft compounds over time.',
    ],
    link: { href: '/projects', label: 'See projects →' },
    body: [
`I grew up around an idea that mastery isn’t an event — it’s a practice.
      You sit with difficulty, refine the question, and let time do its work.`,
`That shaped how I do research: long horizons feel natural, and precision
      isn’t optional — it’s the baseline.`,
    ],
  },
  {
    number: 'II',
    label: 'Curiosity',
    tag: 'Intellectual Origin',
    title: 'The Love of Systems',
    pull: '"I chose these fields because they were the most serious versions of the question I had been asking since I was a child."',
    bg: 'intellect',
    takeaways: [
      'I think in systems: feedback loops, incentives, and emergent behavior.',
      'ML is a structure-finding tool for messy, high-dimensional environments.',
      'Finance is the most complex adaptive system I’ve worked on.',
    ],
    link: { href: '/blog', label: 'Read writing →' },
    body: [
`I’ve always been drawn to systems — places where simple rules create
      complex behavior: markets, language, and data at scale.`,
`Machine learning is the tool I use to find structure when the system
      is too messy to model cleanly by hand.`,
    ],
  },
  {
    number: 'III',
    label: 'Language',
    tag: 'Academic Origin',
    title: 'When the Language Clicked',
    pull: '"Rutgers was the first time mathematics felt like a mother tongue rather than a second language."',
    bg: 'academy',
    takeaways: [
      'I like work that survives reality: data quality, drift, and constraints.',
      'I validate ideas with rigor — not just in notebooks, but in systems.',
      'Math became a precise language for intuitions I already had.',
    ],
    link: { href: '/projects', label: 'Browse research builds →' },
    body: [
`My AI + data science foundation pushed me toward building: not just models,
      but systems that hold up when reality arrives.`,
`Rutgers sharpened the language. The math made validation feel crisp —
      a way to separate signal from narrative.`,
    ],
  },
  {
    number: 'IV',
    label: 'Signal',
    tag: 'The Moment',
    title: 'The Signal That Held',
    pull: '"It was never about prediction. It was about finding the faint signal inside the noise."',
    bg: 'moment',
    takeaways: [
      'I care about out-of-sample truth more than impressive backtests.',
      'I build evaluation habits that resist overfitting.',
      'The goal is structure: robust signals, not stories.',
    ],
    link: { href: '/contact', label: 'Let’s talk →' },
    body: [
`I built a signal, tested it, and then watched it forward — cautiously.
      It wasn’t perfect, but it held.`,
`That’s the feeling I chase: extracting a faint structure from noise,
      and proving it survives outside the backtest.`,
    ],
  },
];

function TimelineChapter({
  chapter,
  index,
  isLast,
}: {
  chapter: (typeof chapters)[0];
  index: number;
  isLast: boolean;
}) {
  const { ref, visible } = useReveal(0.1);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (chapter.bg !== 'moment') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const dotPositions = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: 4 + Math.random() * 4,
        delay: Math.random() * 3,
      })),
    []
  );

  const equations = [
    'dS = μSdt + σSdW',
    'E[R] = Rf + β(Rm−Rf)',
    '∂V/∂t + ½σ²S²∂²V/∂S²',
    'L(θ) = −∑ log P(yᵢ|xᵢ,θ)',
    'Var(X) = E[X²] − (E[X])²',
  ];

  return (
    <div
      ref={ref}
      className={`ab-tl-chapter ab-tl-bg-${chapter.bg} ${index % 2 === 0 ? 'ab-tl-side-left' : 'ab-tl-side-right'}`}
      onMouseMove={handleMouseMove}
    >
      {/* Background effects */}
      {chapter.bg === 'culture' && (
        <svg className="ab-chapter-bg-svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id={`geo-${index}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 60 30 L 30 60 L 0 30 Z" fill="none" stroke="var(--accent)" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="800" height="600" fill={`url(#geo-${index})`} />
        </svg>
      )}

      {chapter.bg === 'intellect' && (
        <div className="ab-intellect-dots">
          {dotPositions.map((pos, i) => (
            <div
              key={i}
              className="ab-intellect-dot"
              style={{
                top: pos.top,
                left: pos.left,
                width: `${pos.size}px`,
                height: `${pos.size}px`,
                animationDelay: `${pos.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      {chapter.bg === 'academy' &&
        equations.map((eq, i) => (
          <div
            key={i}
            className="ab-equation"
            style={{
              top: `${12 + i * 16}%`,
              left: i % 2 === 0 ? `${2 + i * 4}%` : undefined,
              right: i % 2 !== 0 ? `${2 + i * 3}%` : undefined,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {eq}
          </div>
        ))}

      {chapter.bg === 'moment' && (
        <div
          className="ab-moment-spotlight"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(99,102,241,0.12) 0%, transparent 65%)`,
          }}
        />
      )}

      {/* Timeline node */}
      <div className="ab-tl-node-wrap">
        <div className={`ab-tl-node ${visible ? 'ab-tl-node-active' : ''}`}>
          <span className="ab-tl-node-number">{chapter.number}</span>
        </div>
        <div className="ab-tl-node-label">{chapter.label}</div>
        {!isLast && <div className="ab-tl-connector" />}
      </div>

      {/* Content */}
      <div className="ab-tl-content">
        <div className={`ab-chapter-tag reveal reveal-up ${visible ? 'is-visible' : ''}`}>
          {chapter.tag}
        </div>
        <h2 className={`ab-chapter-title reveal reveal-up reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
          {chapter.title}
        </h2>
        <div className={`ab-chapter-takeaways reveal reveal-up reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
          <div className="ab-chapter-takeaways-label">In practice</div>
          <ul className="ab-chapter-takeaways-list">
            {chapter.takeaways.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
          {/* <Link href={chapter.link.href} className="ab-chapter-link">
            {chapter.link.label}
          </Link> */}
        </div>
        <div className={`ab-chapter-body reveal reveal-up reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
          {chapter.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <blockquote className={`ab-chapter-pull reveal reveal-fade reveal-delay-3 ${visible ? 'is-visible' : ''}`}>
          {chapter.pull}
        </blockquote>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <section className="ab-timeline-section">
      <div className="ab-tl-spine" />
      {chapters.map((chapter, i) => (
        <TimelineChapter
          key={i}
          chapter={chapter}
          index={i}
          isLast={i === chapters.length - 1}
        />
      ))}
    </section>
  );
}

/* ════════════════════════════════════════
   MID CTA
════════════════════════════════════════ */
function MidCTA() {
  const { ref, visible } = useReveal(0.2);

  return (
    <section ref={ref} className="ab-midcta">
      <div
        className={`ab-midcta-inner reveal reveal-up ${
          visible ? "is-visible" : ""
        }`}
      >
        <div className="ab-midcta-eyebrow">Quick Access</div>

        <h3 className="ab-midcta-title">
          Looking for the essentials?
        </h3>

        <p className="ab-midcta-sub">
          If you’re exploring opportunities in <strong>quant research</strong> or
          <strong> ML engineering</strong>, here are the fastest ways to get to
          the work.
        </p>

        <div className="ab-midcta-actions">
          {/* <a
            href="/resume.pdf"
            download
            className="ab-midcta-btn ab-midcta-btn-primary"
            aria-label="Download Resume"
          >
            Download Resume →
          </a> */}
          <ResumeButton />
          <Link
            href="/projects"
            className="ab-midcta-btn ab-midcta-btn-secondary"
            aria-label="View Selected Projects"
          >
            View Selected Work →
          </Link>

          <Link
            href="/contact"
            className="ab-midcta-btn ab-midcta-btn-ghost"
            aria-label="Go to Contact Page"
          >
            Let’s Connect →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   WHERE IT LED
════════════════════════════════════════ */
function WhereItLed() {
  const { ref, visible } = useReveal(0.2);
  return (
    <section ref={ref} className="ab-whereitled">
      <div className="ab-wil-node-wrap">
        <div className="ab-wil-end-node">
          <span className="ab-wil-end-dot" />
        </div>
        <span className="ab-wil-end-label">Now</span>
      </div>
      <div className={`ab-wil-inner reveal reveal-up ${visible ? 'is-visible' : ''}`}>
        <div className="ab-wil-eyebrow">
          <div className="ab-wil-line" />
          <span>Where It Led</span>
          <div className="ab-wil-line" />
        </div>
        <p className="ab-wil-text">
          These four things — the patience from culture, the love of
          systems, the rigor that mathematics finally gave language to,
          the electricity of that one signal that held — are still the
          engine. Everything I build traces back to one of them. The
          cultural patience shows up in how I approach long-horizon
          research. The systems thinking shows up in how I architect ML
          pipelines. The mathematical rigor shows up in how I validate
          models. The memory of that signal shows up every time I&apos;m
          tempted to overfit. I build research-grade models and production
          systems for markets — signals, pipelines, and tools that survive
          reality.
          <span className="ab-wil-highlight">That’s why I’m here.</span>
        </p>
        <div className="ab-wil-status">
          <span className="ab-wil-dot" />
          <span className="ab-wil-status-text">
            Currently at <strong>Rutgers Business School</strong> ·
            M.S. Quantitative Finance · Building toward convergence
          </span>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   PAGE
════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <div className="ab-page">
      <Opening />
      <TLDR />
      <Timeline />
      <WhereItLed />
      {/* <MidCTA /> */}
      <ContactCTA />
    </div>
  );
}