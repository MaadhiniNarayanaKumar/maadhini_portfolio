'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import projects from '../../data/projects.json';
import '../../styles/projects-grid.css';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'quant', label: 'Quant' },
  { id: 'aiml', label: 'AI and ML' },
  { id: 'web', label: 'Web' },
] as const;

type FilterId = (typeof FILTERS)[number]['id'];
type GroupId = Exclude<FilterId, 'all'>;

// Live sites, then extensions. Not-live and in-process projects stay off this page.
const LISTED_IDS = ['1', '11', '12', '3', '4', '14'];

const GROUPS: Record<string, GroupId[]> = {
  '1': ['quant'],
  '11': ['web'],
  '12': ['web'],
  '3': ['web'],
  '4': ['aiml'],
  '14': ['aiml'],
};

const listed = LISTED_IDS.map((id) => projects.find((p) => p.id === id)!);

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`pg-card pg-card-${project.size}`}
      style={{ background: project.gradient }}
    >
      <div className="pg-badge" style={{ color: project.accent, borderColor: `${project.accent}40` }}>
        {project.category}
      </div>

      <div className="pg-content">
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
          <div className="pg-arrow" style={{ color: project.accent }}>
            →
          </div>
        </div>
      </div>

      <div className="pg-overlay" />
      <div className="pg-year">{project.year}</div>
    </Link>
  );
}

function countFor(id: FilterId) {
  if (id === 'all') return listed.length;
  return listed.filter((p) => GROUPS[p.id]?.includes(id)).length;
}

export default function ProjectsPage() {
  const [active, setActive] = useState<FilterId>('all');

  const visible =
    active === 'all' ? listed : listed.filter((p) => GROUPS[p.id]?.includes(active));

  return (
    <div className="pg-section pg-page">
      <div className="pg-eyebrow">
        <div className="pg-eyebrow-line" />
        <span>Projects</span>
        <div className="pg-eyebrow-line" />
      </div>

      <div className="pg-headline">
        <h1 className="pg-headline-text">My Projects</h1>
        <p className="pg-headline-sub">
          Quant, AI and ML, and web.
        </p>
      </div>

      <div className="pg-filters" role="group" aria-label="Filter projects">
        {FILTERS.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActive(filter.id)}
            className={`pg-filter ${active === filter.id ? 'pg-filter-active' : ''}`}
            aria-pressed={active === filter.id}
          >
            {filter.label}
            <span className="pg-filter-count">{countFor(filter.id)}</span>
          </button>
        ))}
      </div>

      <div className="pg-grid-wrap">
        {visible.length === 0 ? (
          <p className="pg-empty">No projects in this group yet.</p>
        ) : (
          <div className="pg-row pg-page-grid">
            {visible.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
