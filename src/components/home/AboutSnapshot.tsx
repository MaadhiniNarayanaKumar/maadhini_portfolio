"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import '../../styles/about-snapshot.css';

const stats = [
  { number: 'M.S.',  label: 'Quantitative Finance', sub: 'Rutgers Business School' },
  { number: 'B.Tech', label: 'AI & Data Science',   sub: 'Graduated 2024'          },
  { number: '3+',    label: 'Years in ML/AI',        sub: 'Production Systems'      },
  { number: '20+',   label: 'Projects Delivered',    sub: 'End-to-end pipelines'    },
];

const skills = [
  'Systematic Trading',
  'Statistical Forecasting',
  'Machine Learning',
  'RAG Systems',
  'MLOps',
  'Time Series',
  'Risk Modeling',
  'Python / C++',
  'Market Intelligence',
  'Deep Learning',
];

/* ── Tiny sparkline SVG drawn from fake price data ── */
const sparkPoints = [
  40, 38, 42, 37, 45, 43, 48, 44, 50, 47,
  52, 49, 55, 51, 58, 54, 57, 60, 56, 62,
];

function Sparkline() {
  const w = 320;
  const h = 64;
  const min = Math.min(...sparkPoints);
  const max = Math.max(...sparkPoints);
  const pts = sparkPoints.map((v, i) => {
    const x = (i / (sparkPoints.length - 1)) * w;
    const y = h - ((v - min) / (max - min)) * h;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="sparkline-svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="spark-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Fill area */}
      <polygon
        points={`0,${h} ${pts} ${w},${h}`}
        fill="url(#spark-grad)"
      />
      {/* Line */}
      <polyline
        points={pts}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* End dot */}
      <circle
        cx={(sparkPoints.length - 1) / (sparkPoints.length - 1) * w}
        cy={h - ((sparkPoints[sparkPoints.length - 1] - min) / (max - min)) * h}
        r="4"
        fill="var(--accent)"
      />
    </svg>
  );
}

/* ── Floating data particles ── */
const particles = [
  { label: 'α = 0.042',   top: '12%', left: '62%', delay: '0s'    },
  { label: 'σ = 1.87',    top: '28%', left: '78%', delay: '0.6s'  },
  { label: 'β → 0.94',   top: '55%', left: '68%', delay: '1.2s'  },
  { label: 'R² = 0.91',  top: '70%', left: '82%', delay: '0.3s'  },
  { label: 'Δt = 15ms',  top: '18%', left: '88%', delay: '0.9s'  },
  { label: 'p < 0.001',  top: '42%', left: '55%', delay: '1.5s'  },
];

export default function AboutSnapshot() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={`about-section ${visible ? 'about-visible' : ''}`}>

      {/* ── Background particles ── */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="about-particle"
          style={{ top: p.top, left: p.left, animationDelay: p.delay }}
        >
          {p.label}
        </div>
      ))}

      {/* ── Left column ── */}
      <div className="about-left">

        <div className="about-eyebrow">About Me</div>

        <h2 className="about-headline">
          Quantitative Finance<br />
          <span className="about-headline-accent">Professional</span>
        </h2>

        <p className="about-subheadline">
          Leveraging Machine Learning and Statistical Modeling
          to Extract Alpha from Market Complexity
        </p>

        <div className="about-divider" />

        <div className="about-bio">
          <p>
            Currently pursuing a <strong>Master&apos;s in Quantitative Finance</strong> at
            Rutgers Business School, with a deep foundation in AI and data science
            built over years of production-grade engineering work.
          </p>
          <p>
            I specialize in building <strong>systematic trading signals</strong>,
            statistical forecasting models, and scalable market intelligence systems
            that operate at the intersection of mathematics and real-world finance.
          </p>
          <p>
            My edge lies in combining rigorous <strong className="accent-word">quantitative methods</strong> with
            the engineering discipline to ship — turning complex financial data
            into actionable, computable insights.
          </p>
        </div>

        {/* Sparkline */}
        <div className="about-sparkline-wrap">
          <span className="about-sparkline-label">Simulated Alpha Signal</span>
          <Sparkline />
        </div>

        <div className="about-ctas">
          <Link href="/about" className="about-cta-primary">
            Full Story →
          </Link>
          <Link href="/experience" className="about-cta-secondary">
            View Experience
          </Link>
        </div>

      </div>

      {/* ── Right column ── */}
      <div className="about-right">

        {/* Stats grid */}
        <div className="about-stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="about-stat-card">
              <span className="about-stat-number">{s.number}</span>
              <span className="about-stat-label">{s.label}</span>
              <span className="about-stat-sub">{s.sub}</span>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="about-skills-wrap">
          <div className="about-skills-title">Core Competencies</div>
          <div className="about-skills-cloud">
            {skills.map((s, i) => (
              <span key={i} className="about-skill-tag">{s}</span>
            ))}
          </div>
        </div>

        {/* Currently studying card */}
        <div className="about-status-card">
          <div className="about-status-dot" />
          <div className="about-status-text">
            <span className="about-status-title">Currently at</span>
            <span className="about-status-value">Rutgers Business School</span>
            <span className="about-status-sub">M.S. Quantitative Finance · 2026</span>
          </div>
        </div>

      </div>

    </section>
  );
}