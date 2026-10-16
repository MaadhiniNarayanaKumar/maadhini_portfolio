"use client";
import "../../../styles/proj1.css";
import { useState, useEffect, type ReactNode } from "react";
import proj1data from "../../../data/projectsdata/proj1data.json";

type TechRow = {
  layer: string;
  tech: string;
  role: string;
};

function Accordion({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="pj-accordion">
      <button
        type="button"
        className="pj-accordion-trigger"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className={`pj-accordion-chevron${open ? " open" : ""}`}>▼</span>
      </button>
      {open && <div className="pj-accordion-panel">{children}</div>}
    </div>
  );
}

function TechTable({ rows }: { rows: TechRow[] }) {
  return (
    <div className="pj-table-wrap">
      <table className="pj-table">
        <thead>
          <tr>
            <th>Layer</th>
            <th>Technology</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.layer}>
              <td className="cl">{row.layer}</td>
              <td className="ct">{row.tech}</td>
              <td>{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ProjectPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [openFlow, setOpenFlow] = useState(false);
  const [openStack, setOpenStack] = useState(false);

  const {
    hero,
    links,
    sections,
    problems,
    archLayers,
    pipelineStages,
    flowStepsDetail,
    highlights,
    techStackPrimary,
    techStackSecondary,
    futureWork,
    roadmap,
    sidebar,
  } = proj1data;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4, rootMargin: "-80px 0px -20% 0px" }
    );

    const sectionsToObserve = document.querySelectorAll("section[id]");
    sectionsToObserve.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const githubHref = links.github;
  const showGithubLink = githubHref && githubHref !== "#";

  return (
    <div className="pj-root">
      {/* HERO */}
      <div className="pj-hero" id="overview">
        <div className="pj-eyebrow">
          {hero.eyebrow.map((item, i) => (
            <span key={i}>
              {item}
              {i < hero.eyebrow.length - 1 && (
                <span style={{ opacity: 0.4 }}>·</span>
              )}
            </span>
          ))}
        </div>
        <h1 className="pj-hero-title">
          {hero.title}
          <br />
          <span>&amp; {hero.subtitle}</span>
        </h1>
        <p className="pj-tagline">{hero.tagline}</p>
        <p className="pj-impact">{hero.impact}</p>
        <div className="pj-hero-chips">
          {hero.chips.map((t) => (
            <span className="pj-chip" key={t}>
              {t}
            </span>
          ))}
        </div>
        {showGithubLink ? (
          <a
            href={githubHref}
            className="pj-hero-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {links.githubLabel} →
          </a>
        ) : (
          <span className="pj-hero-link pj-hero-link-disabled" title="Add repo URL in proj1data.json">
            {links.githubLabel} (coming soon)
          </span>
        )}
      </div>

      <div className="pj-main-with-sidebar">
        <div className="pj-main-content">
          {/* PROBLEM */}
          <section className="pj-section" id="problem">
            <div className="pj-label">{sections.problem.label}</div>
            <h2 className="pj-title">{sections.problem.title}</h2>
            <p className="pj-body">{sections.problem.intro}</p>
            <div className="pj-problem-grid pj-problem-grid-matrix">
              {problems.map((p) => (
                <div className="pj-problem-card" key={p.n}>
                  <div className="pj-problem-num">{p.n}</div>
                  <div className="pj-problem-title">{p.t}</div>
                  <div className="pj-problem-desc">{p.d}</div>
                </div>
              ))}
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="pj-section" id="how-it-works">
            <div className="pj-label">{sections.howItWorks.label}</div>
            <h2 className="pj-title">{sections.howItWorks.title}</h2>
            <div className="pj-stack-diagram" aria-label="Architecture layers">
              {archLayers.map((l, i) => (
                <div className="pj-stack-layer" key={l.tag}>
                  <div className="pj-stack-layer-meta">
                    <span className="pj-stack-layer-tag">{l.tag}</span>
                    <span className="pj-stack-layer-title">{l.title}</span>
                  </div>
                  <p className="pj-stack-layer-desc">{l.desc}</p>
                  {i < archLayers.length - 1 && (
                    <span className="pj-stack-connector" aria-hidden="true">
                      ↓
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="pj-flow-wrap">
              <div className="pj-flow-label">
                {sections.howItWorks.flowLabel}
              </div>
              <ol className="pj-pipeline-stepper">
                {pipelineStages.map((stage, i) => (
                  <li key={stage} className="pj-pipeline-step">
                    <span className="pj-pipeline-step-marker">{i + 1}</span>
                    <span className="pj-pipeline-step-label">{stage}</span>
                  </li>
                ))}
              </ol>
              <p className="pj-pipeline-note">
                {sections.howItWorks.pipelineNote}
              </p>
            </div>
            {/* } <Accordion
              title="Full flow & APIs"
              open={openFlow}
              onToggle={() => setOpenFlow((v) => !v)}
            >
              <ul className="pj-detail-list">
                {flowStepsDetail.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </Accordion>*/}
          </section>

          {/* HIGHLIGHTS */}
          <section className="pj-section" id="highlights">
            <div className="pj-label">{sections.highlights.label}</div>
            <h2 className="pj-title">{sections.highlights.title}</h2>
            <div className="pj-highlights-layout">
              {highlights
                .filter((h) => h.highlight)
                .map((h) => (
                  <div className="pj-highlight-banner" key={h.name}>
                    <span className="pj-highlight-banner-icon">{h.icon}</span>
                    <div className="pj-highlight-banner-body">
                      <div className="pj-badge">Key Differentiator</div>
                      <div className="pj-highlight-banner-title">{h.name}</div>
                      <div className="pj-highlight-banner-desc">{h.desc}</div>
                    </div>
                  </div>
                ))}
              <div className="pj-highlights-grid">
                {highlights
                  .filter((h) => !h.highlight)
                  .map((h) => (
                    <div className="pj-feature-card" key={h.name}>
                      <span className="pj-feature-icon">{h.icon}</span>
                      <div className="pj-feature-name">{h.name}</div>
                      <div className="pj-feature-desc">{h.desc}</div>
                    </div>
                  ))}
              </div>
            </div>
            <Accordion
              title="Full stack"
              open={openStack}
              onToggle={() => setOpenStack((v) => !v)}
            >
              <TechTable
                rows={[...techStackPrimary, ...techStackSecondary]}
              />
            </Accordion>
          </section>

          {/* STATUS */}
          <section className="pj-section" id="status">
            <div className="pj-label">{sections.status.label}</div>
            <h2 className="pj-title">{sections.status.title}</h2>
            <div className="pj-roadmap">
              {roadmap.map((item) => (
                <div
                  className={`pj-roadmap-item ${item.done ? "done" : "pend"}`}
                  key={item.phase}
                >
                  <div
                    className={`pj-dot ${item.done ? "done-dot" : "pend-dot"}`}
                  >
                    {item.done ? "✓" : "○"}
                  </div>
                  <div>
                    <div className="pj-roadmap-phase">{item.phase}</div>
                    <div className="pj-roadmap-text">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="pj-body pj-future-work">{futureWork}</p>
          </section>
        </div>

        {/* RIGHT STICKY SIDEBAR */}
        <div className="pj-sidebar">
          <div className="pj-sidebar-inner">
            <div className="pj-sidebar-title">Contents</div>
            <nav className="pj-sidebar-nav">
              {sidebar.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`pj-sidebar-link ${activeSection === item.id ? "active" : ""}`}
                >
                  <span className="pj-sidebar-num">{item.number}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="pj-footer">
        <span className="pj-footer-left">
          Distributed Market Intelligence & Quant QA System · 2026
        </span>
        <span className="pj-footer-badge">Completed — live stack + Vercel demo</span>
      </div>
    </div>
  );
}
