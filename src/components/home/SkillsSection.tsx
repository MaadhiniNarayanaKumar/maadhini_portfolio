"use client";
import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import '../../styles/skills.css';

const categories = [
  {
    id: 'quant',
    label: 'Quant & Finance',
    icon: '◈',
    color: 'var(--accent)',
    skills: [
      { name: 'Systematic Trading',     level: 5 },
      { name: 'Alpha Research',         level: 4 },
      { name: 'Risk Modeling',          level: 4 },
      { name: 'Portfolio Optimization', level: 4 },
      { name: 'Time Series Finance',    level: 5 },
    ],
  },
  {
    id: 'ml',
    label: 'ML & AI',
    icon: '⬡',
    color: 'var(--accent)',
    skills: [
      { name: 'Deep Learning',          level: 5 },
      { name: 'NLP / LLMs',             level: 5 },
      { name: 'RAG Systems',            level: 5 },
      { name: 'GenAI Pipelines',        level: 5 },
      { name: 'Feature Engineering',    level: 4 },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & MLOps',
    icon: '◇',
    color: 'var(--accent)',
    skills: [
      { name: 'AWS',                    level: 4 },
      { name: 'Docker',                 level: 4 },
      { name: 'MLflow',                 level: 4 },
      { name: 'FastAPI',                level: 5 },
      { name: 'CI/CD Pipelines',        level: 4 },
    ],
  },
];

const tickerSkills = [
  'Python', 'PyTorch', 'TensorFlow', 'Pandas', 'NumPy',
  'SQL', 'R', 'AWS', 'Docker', 'FastAPI',
  'Systematic Trading', 'Alpha Research', 'Risk Modeling',
  'Deep Learning', 'NLP', 'RAG', 'GenAI', 'MLflow',
  'Statistical Modeling', 'Time Series', 'Bayesian Inference',
  'Monte Carlo', 'Stochastic Processes', 'Backtesting',
];

const mathSymbols = [
  { symbol: '∑',  top: '8%',  left: '6%',  size: '3.5rem', delay: '0s'   },
  { symbol: '∂',  top: '18%', left: '88%', size: '2.8rem', delay: '1.2s' },
  { symbol: '∫',  top: '72%', left: '4%',  size: '3.2rem', delay: '0.6s' },
  { symbol: 'α',  top: '60%', left: '92%', size: '2.6rem', delay: '1.8s' },
  { symbol: 'β',  top: '38%', left: '96%', size: '2.2rem', delay: '0.3s' },
  { symbol: 'σ',  top: '82%', left: '78%', size: '2.4rem', delay: '2.1s' },
  { symbol: 'μ',  top: '14%', left: '52%', size: '2rem',   delay: '0.9s' },
  { symbol: '∇',  top: '88%', left: '38%', size: '2.6rem', delay: '1.5s' },
  { symbol: 'λ',  top: '46%', left: '2%',  size: '2rem',   delay: '2.4s' },
  { symbol: 'Δ',  top: '28%', left: '74%', size: '2.2rem', delay: '0.4s' },
];

function Dots({ level }: { level: number }) {
  return (
    <div className="skill-dots">
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className={`skill-dot ${i <= level ? 'skill-dot-filled' : ''}`} />
      ))}
    </div>
  );
}

function CategoryCard({ cat, index }: { cat: (typeof categories)[0]; index: number }) {
  const { ref: cardRef, visible: cardVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    delay: index * 120,
  });

  return (
    <div
      ref={cardRef}
      className={`sk-card reveal reveal-up mx-4 ${cardVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="sk-card-top">
        <div className="sk-card-icon-wrap">
          <span className="sk-card-icon">{cat.icon}</span>
        </div>
        <div className="sk-card-header-text">
          <span className="sk-card-label">{cat.label}</span>
          <span className="sk-card-count">{cat.skills.length} skills</span>
        </div>
      </div>

      <div className="sk-card-divider" />

      <div className="sk-card-skills">
        {cat.skills.map((skill, j) => (
          <div key={j} className="sk-card-skill-row">
            <span className="sk-card-skill-name">{skill.name}</span>
            <Dots level={skill.level} />
          </div>
        ))}
      </div>

      <div className="sk-card-footer">
        <span className="sk-card-footer-label">Strongest</span>
        <span className="sk-card-footer-value">
          {[...cat.skills].sort((a, b) => b.level - a.level)[0].name}
        </span>
      </div>

      <div className="sk-card-glow" />
    </div>
  );
}

export default function SkillsSection() {
  const { ref, visible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="sk-section">

      {/* ── Glowing orbs ── */}
      <div className="sk-orb sk-orb-1" />
      <div className="sk-orb sk-orb-2" />
      <div className="sk-orb sk-orb-3" />

      {/* ── Floating math symbols ── */}
      {mathSymbols.map((m, i) => (
        <div
          key={i}
          className="sk-math-symbol"
          style={{
            top:              m.top,
            left:             m.left,
            fontSize:         m.size,
            animationDelay:   m.delay,
          }}
        >
          {m.symbol}
        </div>
      ))}

      {/* ── Eyebrow ── */}
      <div className={`sk-eyebrow reveal reveal-up ${visible ? 'is-visible' : ''}`}>
        <div className="sk-eyebrow-line" />
        <span>Skills & Expertise</span>
        <div className="sk-eyebrow-line" />
      </div>

      {/* ── Headline ── */}
      <div className={`sk-headline reveal reveal-up reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
        <h2 className="sk-headline-text">Core Expertise</h2>
        <p className="sk-headline-sub">
          Spanning quantitative finance, machine learning, and production engineering
        </p>
      </div>

      {/* ── Ticker ── */}
      <div className={`sk-ticker-wrap reveal reveal-fade reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
        <div className="sk-ticker-row">
          <div className="sk-ticker-track sk-ticker-left">
            {[...tickerSkills, ...tickerSkills].map((s, i) => (
              <div key={i} className="sk-ticker-item">
                <span className="sk-ticker-dot" />
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="sk-ticker-row">
          <div className="sk-ticker-track sk-ticker-right">
            {[...tickerSkills.slice().reverse(), ...tickerSkills.slice().reverse()].map((s, i) => (
              <div key={i} className="sk-ticker-item">
                <span className="sk-ticker-dot" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3 square cards ── */}
      <div className="sk-cards-grid">
        {categories.map((cat, i) => (
          <CategoryCard key={cat.id} cat={cat} index={i} />
        ))}
      </div>

    </section>
  );
}