"use client";
import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import '../../styles/story-acts.css';

const acts = [
  {
    number: '01',
    year: '2020 — 2024',
    title: 'The Foundation',
    subtitle: 'B.Tech · AI & Data Science',
    description: 'Built a rigorous foundation in artificial intelligence, machine learning, and statistical thinking. Learned to reason in models and build systems that learn from data.',
    tags: ['AI', 'Data Science', 'ML', 'B.Tech'],
    status: 'complete',
    icon: '◎',
  },
  {
    number: '02',
    year: '2024 — 2025',
    title: 'The Build',
    subtitle: 'AI/ML Engineer · Production Systems',
    description: 'Stepped into production — shipping GenAI pipelines, RAG systems, and scalable ML infrastructure in real financial and enterprise environments.',
    tags: ['GenAI', 'RAG', 'MLOps', 'Production'],
    status: 'complete',
    icon: '◈',
  },
  {
    number: '03',
    year: '2026 — Present',
    title: 'The Convergence',
    subtitle: 'M.S. Quantitative Finance · Rutgers',
    description: 'Now at the intersection — converging mathematics, statistics, and AI into systematic financial research. Building toward becoming a full-spectrum Quantitative Finance specialist.',
    tags: ['Quant Finance', 'Rutgers', 'Systematic Trading', 'Research'],
    status: 'active',
    icon: '◉',
  },
  {
    number: '04',
    year: 'The Horizon',
    title: 'The Destination',
    subtitle: 'Quantitative Finance Specialist',
    description: 'The goal — a full-spectrum quant who bridges rigorous mathematical modeling, production-grade AI systems, and deep financial intuition into one unified practice.',
    tags: ['Alpha Generation', 'Systematic Strategies', 'AI × Finance'],
    status: 'goal',
    icon: '◇',
  },
];

const floatPositions = [
  { top: '4%',   left: '2%'  },
  { top: '8%',  left: '48%' },
  { top: '52%',  left: '18%' },
  { top: '56%', left: '62%' },
];

function ActCard({ act, index }: { act: (typeof acts)[0]; index: number }) {
  const { ref: cardRef, visible: cardVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.05,
    delay: index * 180,
  });

  return (
    <div
      ref={cardRef}
      className={`sf-card sf-card-${act.status} reveal reveal-scale ${cardVisible ? 'is-visible' : ''}`}
      style={{
        top: floatPositions[index].top,
        left: floatPositions[index].left,
      }}
    >
      <div className="sf-card-header">
        <span className="sf-card-number">{act.number}</span>
        <span className={`sf-status-badge sf-badge-${act.status}`}>
          {act.status === 'complete' && '✓ done'}
          {act.status === 'active' && '● active'}
          {act.status === 'goal' && '◇ goal'}
        </span>
      </div>

      <span className="sf-card-year">{act.year}</span>

      <div className="sf-card-title-row">
        <span className="sf-card-icon">{act.icon}</span>
        <h3 className="sf-card-title">{act.title}</h3>
      </div>

      <p className="sf-card-subtitle">{act.subtitle}</p>
      <div className="sf-card-divider" />
      <p className="sf-card-desc">{act.description}</p>

      <div className="sf-card-tags">
        {act.tags.map((t, j) => (
          <span key={j} className="sf-card-tag">
            {t}
          </span>
        ))}
      </div>

      {act.status === 'active' && <div className="sf-active-ring" />}
      {act.status === 'goal' && <div className="sf-goal-shimmer" />}
    </div>
  );
}

export default function StoryFloating() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section ref={ref} className="sf-section">

      {/* ── Eyebrow ── */}
      <div className={`sf-eyebrow reveal reveal-up ${visible ? 'is-visible' : ''}`}>
        <div className="sf-eyebrow-line" />
        <span>The Story</span>
        <div className="sf-eyebrow-line" />
      </div>

      {/* ── Goal headline ── */}
      <div className={`sf-goal-headline reveal reveal-up reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
        <span className="sf-goal-prefix">Journey toward becoming a</span>
        <span className="sf-goal-title">Quantitative Finance Specialist</span>
      </div>

      {/* ── Main canvas ── */}
      <div className="sf-canvas">

        {/* ── Background decorative elements ── */}
        <svg className="sf-bg-svg" viewBox="0 0 1000 700" preserveAspectRatio="none">

          {/* Main curved path connecting all 4 cards */}
          <path
            d="M 120 80 C 250 40, 400 120, 520 100 C 640 80, 700 200, 680 320 C 660 440, 400 420, 320 500 C 240 580, 550 560, 750 580"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
            strokeDasharray="8 5"
            opacity="0.25"
          />

          {/* Secondary organic curve */}
          <path
            d="M 0 200 C 100 150, 200 300, 350 250 C 500 200, 600 350, 750 300 C 900 250, 950 400, 1000 380"
            fill="none"
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.4"
          />

          {/* Decorative circles */}
          <circle cx="120"  cy="80"  r="6" fill="var(--accent)" opacity="0.5" />
          <circle cx="520"  cy="100" r="6" fill="var(--accent)" opacity="0.5" />
          <circle cx="320"  cy="500" r="6" fill="var(--accent)" opacity="0.5" />
          <circle cx="750"  cy="580" r="6" fill="var(--accent)" opacity="0.7" />

          {/* Outer ring on active node */}
          <circle cx="750"  cy="580" r="14" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
          <circle cx="750"  cy="580" r="22" fill="none" stroke="var(--accent)" strokeWidth="0.5" opacity="0.15" />

          {/* Random organic blob shapes */}
          <ellipse cx="850" cy="120" rx="80" ry="50"
            fill="none" stroke="var(--border)"
            strokeWidth="0.8" opacity="0.3"
            transform="rotate(-20 850 120)"
          />
          <ellipse cx="150" cy="600" rx="60" ry="40"
            fill="none" stroke="var(--border)"
            strokeWidth="0.8" opacity="0.3"
            transform="rotate(15 150 600)"
          />
          <ellipse cx="500" cy="350" rx="100" ry="60"
            fill="none" stroke="var(--accent)"
            strokeWidth="0.5" opacity="0.1"
            transform="rotate(-10 500 350)"
          />

          {/* Random scattered dots */}
          <circle cx="200" cy="400" r="2.5" fill="var(--border)" opacity="0.5" />
          <circle cx="650" cy="180" r="2"   fill="var(--border)" opacity="0.4" />
          <circle cx="430" cy="560" r="2"   fill="var(--border)" opacity="0.4" />
          <circle cx="880" cy="350" r="3"   fill="var(--border)" opacity="0.3" />
          <circle cx="70"  cy="320" r="2"   fill="var(--border)" opacity="0.4" />
          <circle cx="930" cy="500" r="2.5" fill="var(--accent)" opacity="0.2" />

          {/* Small cross marks */}
          <line x1="295" y1="155" x2="305" y2="165" stroke="var(--border)" strokeWidth="1" opacity="0.4" />
          <line x1="305" y1="155" x2="295" y2="165" stroke="var(--border)" strokeWidth="1" opacity="0.4" />
          <line x1="700" y1="420" x2="710" y2="430" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
          <line x1="710" y1="420" x2="700" y2="430" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />

          {/* Corner bracket decorations */}
          <path d="M 940 40 L 970 40 L 970 70"  fill="none" stroke="var(--border)" strokeWidth="1" opacity="0.3" />
          <path d="M 30  660 L 30  630 L 60  630" fill="none" stroke="var(--border)" strokeWidth="1" opacity="0.3" />

          {/* Floating data labels */}
          <text x="820" y="200" fontSize="9" fill="var(--accent)" opacity="0.3"
            fontFamily="monospace">α = 0.042</text>
          <text x="60"  y="450" fontSize="9" fill="var(--accent)" opacity="0.3"
            fontFamily="monospace">σ² = 1.87</text>
          <text x="450" y="620" fontSize="9" fill="var(--accent)" opacity="0.3"
            fontFamily="monospace">β → 0.94</text>
          <text x="600" y="60"  fontSize="9" fill="var(--accent)" opacity="0.25"
            fontFamily="monospace">p &lt; 0.001</text>
        </svg>

        {/* ── Progress connector labels ── */}
        <div className="sf-connector sf-connector-1">→</div>
        <div className="sf-connector sf-connector-2">→</div>
        <div className="sf-connector sf-connector-3">→</div>

        {/* ── Cards ── */}
        {acts.map((act, i) => (
          <ActCard key={act.number} act={act} index={i} />
        ))}

      </div>

      {/* ── Bottom note ── */}
      <div className={`sf-bottom-note reveal reveal-up ${visible ? 'is-visible' : ''}`}>
        <span className="sf-bottom-dot" />
        Currently at <strong>Act III — The Convergence</strong> · Rutgers Business School · 2026
      </div>

    </section>
  );
}