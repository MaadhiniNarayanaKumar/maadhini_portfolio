import React from 'react';
import Link from 'next/link';
import projects from '../../data/projects.json';
import '../../styles/projects-grid.css';

// Featured builds with detail pages (quant + Mia app + both extensions + interview assistant + early web + eye detection + job match)
const projects1 = projects.filter((p) =>
  ['1', '2', '3', '4', '10', '11', '12', '13', '14'].includes(p.id),
);

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

export default function ProjectsPage() {
  return (
    <div className="pg-section">
      <div className="pg-eyebrow">
        <div className="pg-eyebrow-line" />
        <span>Projects</span>
        <div className="pg-eyebrow-line" />
      </div>

      <div className="pg-headline">
        <h1 className="pg-headline-text">My Projects</h1>
        <p className="pg-headline-sub">
          Quant research, ML systems, financial engineering, and earlier projects.
        </p>
      </div>

      <div className="pg-grid-wrap">
        <div
          className="pg-row pg-row-1"
          style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}
        >
          {projects1.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
