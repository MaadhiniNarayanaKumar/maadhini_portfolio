"use client";
import "../../../styles/proj1.css";
import { useState, useEffect } from "react";
import proj1data from "../../../data/projectsdata/proj1data.json"   // ← Adjust path if you put it in a subfolder

export default function ProjectPage() {
  const [activeAudience, setActiveAudience] = useState("recruiters");
  const [activeTab, setActiveTab] = useState("ai");
  const [activeSection, setActiveSection] = useState("overview");
  const [mounted, setMounted] = useState(false);

  const {
    hero,
    sections,
    techStack,
    features,
    problems,
    archLayers,
    aiFullStackExpertise,
    flowSteps,
    roadmap,
    sidebar
  } = proj1data;

  useEffect(() => {
    setMounted(true);

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
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="pj-root">
      {/* HERO */}
      <div className="pj-hero" id="overview">
        <div className="pj-eyebrow">
          {hero.eyebrow.map((item, i) => (
            <span key={i}>
              {item}
              {i < hero.eyebrow.length - 1 && <span style={{ opacity: 0.4 }}>·</span>}
            </span>
          ))}
        </div>
        <h1 className="pj-hero-title">
          {hero.title}<br />
          <span>&amp; {hero.subtitle}</span>
        </h1>
        <p className="pj-tagline">{hero.tagline}</p>
        <div className="pj-hero-chips">
          {hero.chips.map(t => (
            <span className="pj-chip" key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="pj-main-with-sidebar">
        {/* MAIN CONTENT */}
        <div className="pj-main-content">
          {/* PROBLEM */}
          <section className="pj-section" id="problem">
            <div className="pj-label">{sections.problem.label}</div>
            <h2 className="pj-title">{sections.problem.title}</h2>
            <p className="pj-body">{sections.problem.intro}</p>
            <div className="pj-problem-grid">
              {problems.map(p => (
                <div className="pj-problem-card" key={p.n}>
                  <div className="pj-problem-num">{p.n}</div>
                  <div className="pj-problem-title">{p.t}</div>
                  <div className="pj-problem-desc">{p.d}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ARCHITECTURE */}
          <section className="pj-section" id="architecture">
            <div className="pj-label">{sections.architecture.label}</div>
            <h2 className="pj-title">{sections.architecture.title}</h2>
            <div className="pj-arch-grid">
              {archLayers.map(l => (
                <div className="pj-arch-card" key={l.tag}>
                  <div className="pj-arch-tag">{l.tag}</div>
                  <div className="pj-arch-title">{l.title}</div>
                  <div className="pj-arch-desc">{l.desc}</div>
                </div>
              ))}
            </div>
            <div className="pj-flow-wrap">
              <div className="pj-flow-label">{sections.architecture.flowLabel}</div>
              <div className="pj-flow-steps">
                {flowSteps.map((step, i) => (
                  <span key={step} style={{ display: "flex", alignItems: "center" }}>
                    <span className="pj-flow-step">{step}</span>
                    {i < flowSteps.length - 1 && <span className="pj-flow-arrow">→</span>}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section className="pj-section" id="features">
            <div className="pj-label">{sections.features.label}</div>
            <h2 className="pj-title">{sections.features.title}</h2>
            <div className="pj-features-grid">
              {features.filter(f => !f.highlight).map(f => (
                <div className="pj-feature-card" key={f.name}>
                  <span className="pj-feature-icon">{f.icon}</span>
                  <div className="pj-feature-name">{f.name}</div>
                  <div className="pj-feature-desc">{f.desc}</div>
                </div>
              ))}
              {features.filter(f => f.highlight).map(f => (
                <div className="pj-feature-card pj-highlight" key={f.name}>
                  <div className="pj-badge">Key Differentiator</div>
                  <span className="pj-feature-icon">{f.icon}</span>
                  <div className="pj-feature-name">{f.name}</div>
                  <div className="pj-feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* TECH STACK */}
          <section className="pj-section">
            <div className="pj-label">{sections.techStack.label}</div>
            <h2 className="pj-title">{sections.techStack.title}</h2>
            <div className="pj-table-wrap">
              <table className="pj-table">
                <thead>
                  <tr><th>Layer</th><th>Technology</th><th>Role</th></tr>
                </thead>
                <tbody>
                  {techStack.map(row => (
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

          {/* WHY STANDS OUT */}
          <section className="pj-section" id="why-stands-out">
            <div className="pj-label">{sections.whyStandsOut.label}</div>
            <h2 className="pj-title">{sections.whyStandsOut.title}</h2>
            {mounted && (
              <div className="pj-toggle">
                <button
                  className={`pj-toggle-btn${activeAudience === "recruiters" ? " active" : ""}`}
                  onClick={() => setActiveAudience("recruiters")}
                >
                  For Recruiters
                </button>
                <button
                  className={`pj-toggle-btn${activeAudience === "engineers" ? " active" : ""}`}
                  onClick={() => setActiveAudience("engineers")}
                >
                  For Engineers
                </button>
              </div>
            )}
            <div className="pj-accent-card">
              {!mounted || activeAudience === "recruiters" ? (
                <p className="pj-body">
                  Most portfolio projects compute results and stop. This one questions them in real time.
                  The QA validation layer + live WebSocket timeline + job_id tracking is the kind of rigor
                  you see in production financial systems. The architecture mirrors real quant research and risk teams.
                </p>
              ) : (
                <p className="pj-body">
                  Spark Window functions partitioned by ticker eliminate cross-stock shuffles.
                  The QA layer uses a different execution model to catch numerical drift.
                  WebSocket streams job status live. Drawdown uses unbounded cumulative max with checkpointing.
                  Everything is built with production observability in mind.
                </p>
              )}
            </div>
          </section>

          {/* AI FULL-STACK FINANCE EXPERTISE */}
          <section className="pj-section" id="ai-expertise">
            <div className="pj-label">{sections.aiExpertise.label}</div>
            <h2 className="pj-title">{sections.aiExpertise.title}</h2>
            <p className="pj-body">{sections.aiExpertise.intro}</p>

            <div className="pj-expertise-tabs">
              {aiFullStackExpertise.map(tab => (
                <button
                  key={tab.id}
                  className={`pj-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="pj-tab-icon">{tab.icon}</span>
                  {tab.tab}
                </button>
              ))}
            </div>

            {aiFullStackExpertise.map(tab =>
              tab.id === activeTab && (
                <div key={tab.id} className="pj-expertise-content">
                  <div className="pj-expertise-header">
                    <span className="pj-expertise-icon-big">{tab.icon}</span>
                    <h3>{tab.title}</h3>
                  </div>
                  <p className="pj-body">{tab.desc}</p>
                  <ul className="pj-expertise-list">
                    {tab.highlights.map((item, i) => (
                      <li key={i}>→ {item}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </section>

          {/* ROADMAP */}
          <section className="pj-section" id="roadmap">
            <div className="pj-label">{sections.roadmap.label}</div>
            <h2 className="pj-title">{sections.roadmap.title}</h2>
            <div className="pj-roadmap">
              {roadmap.map(item => (
                <div className={`pj-roadmap-item ${item.done ? "done" : "pend"}`} key={item.phase}>
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

        {/* RIGHT STICKY SIDEBAR */}
        <div className="pj-sidebar">
          <div className="pj-sidebar-inner">
            <div className="pj-sidebar-title">Contents</div>
            <nav className="pj-sidebar-nav">
              {sidebar.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`pj-sidebar-link ${activeSection === item.id ? "active" : ""} ${item.highlight ? "highlight" : ""}`}
                >
                  <span className="pj-sidebar-num">{item.number}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="pj-footer">
        <span className="pj-footer-left">Distributed Market Intelligence & Quant QA System · 2026</span>
        <span className="pj-footer-badge">In Development</span>
      </div>
    </div>
  );
}