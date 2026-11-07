"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import projects from '../../data/projects.json';
import '../../styles/projects-grid.css';

const filters = ['All', 'Quant Finance', 'ML & AI', 'Engineering', 'Research'];

/* ── Row layout config ── */
const row1 = ['1', '2', '3'];        // quant + Mia app + calendar extension
const row2 = ['4', '10', '11'];      // Mia task extension + interview assistant + nokia snake
const row3 = ['12', '13'];           // youtube clone + eye detection

function getProject(id: string) {
  return projects.find(p => p.id === id)!;
}

interface CardProps {
  project: typeof projects[0];
  index: number;
  visible: boolean;
}

function ProjectCard({ project, index, visible }: CardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`pg-card pg-card-${project.size} reveal reveal-up ${visible ? 'is-visible' : ''}`}
      style={{
        transitionDelay: `${index * 0.08}s`,
        background: project.gradient,
      }}
    >
      {/* Category badge */}
      <div className="pg-badge" style={{ color: project.accent, borderColor: `${project.accent}40` }}>
        {project.category}
      </div>

      {/* Bottom content */}
      <div className="pg-content">

        {/* Tags */}
        <div className="pg-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="pg-tag" style={{ color: project.accent, borderColor: `${project.accent}30` }}>
              {tag}
            </span>
          ))}
        </div>

        <div className="pg-content-bottom">
          <div className="pg-text">
            <h3 className="pg-title">{project.title}</h3>
            <p className="pg-desc">{project.description}</p>
          </div>

          {/* Arrow */}
          <div className="pg-arrow" style={{ color: project.accent }}>
            →
          </div>
        </div>

      </div>

      {/* Hover overlay */}
      <div className="pg-overlay" />

      {/* Year */}
      <div className="pg-year">{project.year}</div>

    </Link>
  );
}

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref, visible } = useScrollReveal<HTMLElement>({ threshold: 0.05 });

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const r1 = row1.map(getProject).filter(p =>
    activeFilter === 'All' || p.category === activeFilter
  );
  const r2 = row2.map(getProject).filter(p =>
    activeFilter === 'All' || p.category === activeFilter
  );
  const r3 = row3.map(getProject).filter(p =>
    activeFilter === 'All' || p.category === activeFilter
  );

  return (
    <section ref={ref} className="pg-section">

      {/* ── Eyebrow ── */}
      <div className={`pg-eyebrow reveal reveal-up ${visible ? 'is-visible' : ''}`}>
        <div className="pg-eyebrow-line" />
        <span>Projects</span>
        <div className="pg-eyebrow-line" />
      </div>

      {/* ── Headline ── */}
      <div className={`pg-headline reveal reveal-up reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
        <h2 className="pg-headline-text">Selected Work</h2>
        <p className="pg-headline-sub">
          Quantitative research, ML systems, and earlier projects
        </p>
      </div>

      {/* ── Filter pills ── */}
      {/* <div className={`pg-filters reveal reveal-up reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`pg-filter ${activeFilter === f ? 'pg-filter-active' : ''}`}
          >
            {f}
            <span className="pg-filter-count">
              {f === 'All' ? projects.length : projects.filter(p => p.category === f).length}
            </span>
          </button>
        ))}
      </div> */}

      {/* ── Grid ── */}
      <div className="pg-grid-wrap">

        {/* Row 1 — large + medium + medium */}
        {r1.length > 0 && (
          <div className="pg-row pg-row-1">
            {r1.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} visible={visible} />
            ))}
          </div>
        )}

        {/* Row 2 — Mia Task Capture */}
        {r2.length > 0 && (
          <div className="pg-row pg-row-2">
            {r2.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i + 3} visible={visible} />
            ))}
          </div>
        )}

        {r3.length > 0 && (
          <div className="pg-row pg-row-2">
            {r3.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i + 6} visible={visible} />
            ))}
          </div>
        )}

      </div>

      {/* ── Show more button ── */}
      <div className={`pg-showmore reveal reveal-up ${visible ? 'is-visible' : ''}`}>
        <Link href="/projects" className="pg-showmore-btn">
          <span>View All Projects</span>
          {/* <span className="pg-showmore-count">{projects.length} total</span> */}
          <span className="pg-showmore-arrow">→</span>
        </Link>
      </div>

    </section>
  );
}