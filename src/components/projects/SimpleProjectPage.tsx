"use client";

import React, { useState } from "react";
import "../../styles/proj1.css";

type Problem = { n: string; t: string; d: string };
type Layer = { tag: string; title: string; desc: string };
type StackRow = { layer: string; tech: string; role: string };
type StatusItem = { phase: string; label: string; done: boolean };

export type SimpleProjectData = {
  hero: {
    eyebrow: string[];
    title: string;
    subtitle: string;
    tagline: string;
    impact: string;
    chips: string[];
  };
  links: {
    github: string;
    githubLabel: string;
    live?: string;
    liveLabel?: string;
    api?: string;
    apiLabel?: string;
  };
  problems: Problem[];
  layers: Layer[];
  highlights: string[];
  stack: StackRow[];
  status: StatusItem[];
  footer: string;
  badge: string;
  statusHeading?: string;
  embed?: {
    label: string;
    title: string;
    body: string;
    src: string;
    frameTitle: string;
    tall?: boolean;
    allow?: string;
  };
};

const sidebar = [
  { id: "overview", number: "00", label: "Overview" },
  { id: "problem", number: "01", label: "Problem" },
  { id: "how-it-works", number: "02", label: "How it works" },
  { id: "highlights", number: "03", label: "Highlights" },
  { id: "status", number: "04", label: "Status" },
];

export default function SimpleProjectPage({ data }: { data: SimpleProjectData }) {
  const [activeSection, setActiveSection] = useState("overview");
  const {
    hero,
    links,
    problems,
    layers,
    highlights,
    stack,
    status,
    footer,
    badge,
    statusHeading,
    embed,
  } = data;

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pj-root">
      <div className="pj-hero" id="overview">
        <div className="pj-eyebrow">
          {hero.eyebrow.map((item, i) => (
            <span key={item}>
              {i > 0 && " · "}
              {item}
            </span>
          ))}
        </div>
        <h1 className="pj-hero-title">
          {hero.title}
          <br />
          <span>{hero.subtitle}</span>
        </h1>
        <p className="pj-tagline">{hero.tagline}</p>
        <p className="pj-impact">{hero.impact}</p>
        <div className="pj-hero-chips">
          {hero.chips.map((c) => (
            <span className="pj-chip" key={c}>
              {c}
            </span>
          ))}
        </div>
        <div className="pj-hero-links">
          {links.live && (
            <a
              className="pj-hero-link"
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              {links.liveLabel || "Open live demo"} →
            </a>
          )}
          {links.api && (
            <a
              className="pj-hero-link"
              href={links.api}
              target="_blank"
              rel="noopener noreferrer"
            >
              {links.apiLabel || "API docs"} →
            </a>
          )}
          <a
            className="pj-hero-link"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {links.githubLabel} →
          </a>
        </div>
      </div>

      <div className="pj-main-with-sidebar">
        <div className="pj-main-content">
          {embed && (
            <section className="pj-section">
              <div className="pj-label">{embed.label}</div>
              <h2 className="pj-title">{embed.title}</h2>
              <p className="pj-body">{embed.body}</p>
              <div className={`pj-play-frame${embed.tall ? " pj-play-frame-tall" : ""}`}>
                <iframe
                  src={embed.src}
                  title={embed.frameTitle}
                  className="pj-play-frame-iframe"
                  allow={embed.allow}
                />
              </div>
            </section>
          )}
          <section className="pj-section" id="problem">
            <div className="pj-label">01 — The Problem</div>
            <h2 className="pj-title">What this build solves.</h2>
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

          <section className="pj-section" id="how-it-works">
            <div className="pj-label">02 — How It Works</div>
            <h2 className="pj-title">Architecture at a glance.</h2>
            <div className="pj-stack-diagram" aria-label="Architecture layers">
              {layers.map((l, i) => (
                <div className="pj-stack-layer" key={l.tag}>
                  <div className="pj-stack-layer-meta">
                    <span className="pj-stack-layer-tag">{l.tag}</span>
                    <span className="pj-stack-layer-title">{l.title}</span>
                  </div>
                  <p className="pj-stack-layer-desc">{l.desc}</p>
                  {i < layers.length - 1 && (
                    <span className="pj-stack-connector" aria-hidden="true">
                      ↓
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="pj-table-wrap" style={{ marginTop: 28 }}>
              <table className="pj-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Technology</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {stack.map((row) => (
                    <tr key={row.layer}>
                      <td className="cl">{row.layer}</td>
                      <td className="ct">{row.tech}</td>
                      <td>{row.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="pj-section" id="highlights">
            <div className="pj-label">03 — Highlights</div>
            <h2 className="pj-title">What ships today.</h2>
            <div className="pj-highlights-grid">
              {highlights.map((h) => (
                <div className="pj-feature-card" key={h}>
                  <div className="pj-feature-name">{h}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="pj-section" id="status">
            <div className="pj-label">04 — Status</div>
            <h2 className="pj-title">{statusHeading ?? "Build status — shipped complete."}</h2>
            <div className="pj-roadmap">
              {status.map((item) => (
                <div
                  key={item.label}
                  className={`pj-roadmap-item ${item.done ? "done" : "pend"}`}
                >
                  <div className={`pj-dot ${item.done ? "done-dot" : "pend-dot"}`}>
                    {item.done ? "✓" : "○"}
                  </div>
                  <div>
                    <div className="pj-roadmap-phase">{item.phase}</div>
                    <div className="pj-roadmap-text">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="pj-sidebar">
          <div className="pj-sidebar-inner">
            <div className="pj-sidebar-title">Contents</div>
            <nav className="pj-sidebar-nav">
              {sidebar.map((item) => (
                <button
                  key={item.id}
                  type="button"
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
        <span className="pj-footer-left">{footer}</span>
        <span className="pj-footer-badge">{badge}</span>
      </div>
    </div>
  );
}
