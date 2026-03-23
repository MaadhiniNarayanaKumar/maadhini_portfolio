"use client";
import "../../../styles/proj1.css";
import { useState, useEffect } from "react";

const techStack = [
  { layer: "Frontend",       tech: "React, Recharts", role: "Dashboard & visualization" },
  { layer: "Backend",        tech: "FastAPI, Python",  role: "API layer & pipeline orchestration" },
  { layer: "Processing",     tech: "PySpark",          role: "Distributed feature engineering" },
  { layer: "QA",             tech: "Pandas, NumPy",    role: "Benchmark validation" },
  { layer: "Storage",        tech: "Parquet",          role: "Columnar data storage" },
  { layer: "Data Source",    tech: "yfinance",         role: "Equity market data ingestion" },
  { layer: "Infrastructure", tech: "AWS EC2",          role: "Single-instance deployment" },
];

const features = [
  { name: "Log Returns",          desc: "Normalized price change series for cross-asset comparison.",                                                                          icon: "↗" },
  { name: "Rolling Volatility",   desc: "20-day standard deviation of returns for risk measurement.",                                                                         icon: "〜" },
  { name: "Momentum",             desc: "Rate of price change signal for trend detection.",                                                                                   icon: "⚡" },
  { name: "Maximum Drawdown",     desc: "Peak-to-trough decline tracking for downside risk.",                                                                                 icon: "↘" },
  { name: "QA Validation System", desc: "Every Spark output benchmarked against Pandas/SciPy with relative error thresholds and an alignment score (>95% target).",          icon: "✓", highlight: true },
];

const roadmap = [
  { phase: "Phase 1", label: "PySpark pipeline — ingestion, feature engineering & QA", done: true  },
  { phase: "Phase 2", label: "FastAPI backend & data serving layer",                    done: false },
  { phase: "Phase 3", label: "React dashboard & full UI",                               done: false },
];

const flowSteps = [
  "User triggers pipeline", "FastAPI", "Spark + yfinance",
  "Feature engineering", "QA validation", "Parquet storage",
  "API serves JSON", "UI renders insights",
];

const problems = [
  { n: "01", t: "Scalability", d: "Data doesn't stay small. Pandas breaks at scale — PySpark handles millions of rows across tickers without breaking a sweat." },
  { n: "02", t: "Correctness", d: "Rolling metrics like volatility and drawdown are expensive to compute correctly. Window functions need care — especially drawdown's unbounded cumulative max." },
  { n: "03", t: "Validation",  d: "No one validates whether the numbers are actually right. This project does — with a formal QA layer that scores alignment against a trusted benchmark." },
];

const archLayers = [
  { tag: "Layer 01", title: "UI Layer",         desc: "React dashboard for visualization and pipeline control" },
  { tag: "Layer 02", title: "API Layer",        desc: "FastAPI backend that decouples the frontend from processing logic" },
  { tag: "Layer 03", title: "Processing Layer", desc: "PySpark pipeline handling ingestion, feature engineering, QA validation, and Parquet storage" },
];

export default function ProjectPage() {
  const [activeAudience, setActiveAudience] = useState("recruiters");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="pj-root">
      

      {/* HERO */}
      <div className="pj-hero">
        <div className="pj-eyebrow">
          <span>Quant Finance</span><span style={{opacity:0.4}}>·</span>
          <span>Data Engineering</span><span style={{opacity:0.4}}>·</span>
          <span>2026</span>
        </div>
        <h1 className="pj-hero-title">
          Distributed Market Intelligence<br />
          <span>&amp; Quant QA System</span>
        </h1>
        <p className="pj-tagline">
          A scalable quantitative pipeline that processes equity market data at scale — and proves its own correctness.
        </p>
        <div className="pj-hero-chips">
          {["PySpark", "FastAPI", "React", "AWS EC2", "Parquet", "yfinance"].map(t => (
            <span className="pj-chip" key={t}>{t}</span>
          ))}
        </div>
      </div>

      {/* WHAT IT IS */}
      <section className="pj-section">
        <div className="pj-label">01 — What It Is</div>
        <h2 className="pj-title">A pipeline that doesn't just compute — it validates.</h2>
        <div className="pj-accent-card">
          <p className="pj-body">
            A full-stack data engineering project that ingests real equity market data, computes key quantitative features using a distributed PySpark pipeline, and validates every output through a formal QA system benchmarked against industry-standard libraries. Built to simulate the kind of infrastructure used in real-world quant research and risk analytics teams.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="pj-section">
        <div className="pj-label">02 — The Problem It Solves</div>
        <h2 className="pj-title">Three gaps most financial projects ignore.</h2>
        <p className="pj-body">Most financial data projects stop at "I got results." Three real gaps exist in that approach.</p>
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
      <section className="pj-section">
        <div className="pj-label">03 — Architecture Overview</div>
        <h2 className="pj-title">Three clean layers, one cohesive system.</h2>
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
          <div className="pj-flow-label">End-to-end data flow</div>
          <div className="pj-flow-steps">
            {flowSteps.map((step, i) => (
              <span key={step} style={{display:"flex",alignItems:"center"}}>
                <span className="pj-flow-step">{step}</span>
                {i < flowSteps.length - 1 && <span className="pj-flow-arrow">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pj-section">
        <div className="pj-label">04 — Key Features</div>
        <h2 className="pj-title">Five capabilities, one differentiator.</h2>
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
        <div className="pj-label">05 — Tech Stack</div>
        <h2 className="pj-title">Every tool chosen with purpose.</h2>
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
      <section className="pj-section">
        <div className="pj-label">06 — Why This Stands Out</div>
        <h2 className="pj-title">Built for two audiences.</h2>
        {mounted && (
          <div className="pj-toggle">
            <button className={`pj-toggle-btn${activeAudience==="recruiters"?" active":""}`} onClick={() => setActiveAudience("recruiters")}>
              For Recruiters
            </button>
            <button className={`pj-toggle-btn${activeAudience==="engineers"?" active":""}`} onClick={() => setActiveAudience("engineers")}>
              For Engineers
            </button>
          </div>
        )}
        <div className="pj-accent-card">
          {!mounted || activeAudience === "recruiters" ? (
            <p className="pj-body">
              Most portfolio projects compute results and stop. This one questions them. The QA validation layer — which benchmarks Spark outputs against Pandas as a ground truth — is the kind of rigor you see in production financial systems, not side projects. The architecture mirrors what quant research and risk analytics teams actually build.
            </p>
          ) : (
            <p className="pj-body">
              Spark Window functions partitioned by ticker eliminate cross-stock shuffles entirely. The QA layer intentionally uses a different execution model (single-node Pandas vs distributed Spark) to catch numerical drift, not just rerun the same logic twice. Drawdown uses unbounded cumulative max windows — the one place where Spark's lazy evaluation needs explicit checkpointing.
            </p>
          )}
        </div>
      </section>

      {/* DEMO */}
      {/* <section className="pj-section">
        <div className="pj-label">07 — Demo</div>
        <h2 className="pj-title">See it in action.</h2>
        <div className="pj-video">
          <div className="pj-play">▶</div>
          <div className="pj-video-label">Demo video — coming soon</div>
        </div>
      </section> */}

      {/* CTA */}
      {/* <section className="pj-section">
        <div className="pj-label">08 — Try It</div>
        <h2 className="pj-title">Explore the project.</h2>
        <p className="pj-body">
          Live deployment and source code available below. The pipeline runs end-to-end — trigger it, watch it process, inspect the QA report.
        </p>
        <div className="pj-cta-row">
          <a href="#" className="pj-btn pj-btn-primary">↗ Try Live Demo</a>
          <a href="#" className="pj-btn pj-btn-secondary">⌥ View on GitHub</a>
        </div>
      </section> */}

      {/* ROADMAP */}
      <section className="pj-section">
        <div className="pj-label">07 — Roadmap</div>
        <h2 className="pj-title">Current build status.</h2>
        <div className="pj-roadmap">
          {roadmap.map(item => (
            <div className={`pj-roadmap-item ${item.done ? "done" : "pend"}`} key={item.phase}>
              <div className={`pj-dot ${item.done ? "done-dot" : "pend-dot"}`}>{item.done ? "✓" : "○"}</div>
              <div>
                <div className="pj-roadmap-phase">{item.phase}</div>
                <div className="pj-roadmap-text">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <div className="pj-footer">
        <span className="pj-footer-left">Distributed Market Intelligence & Quant QA System · 2025</span>
        <span className="pj-footer-badge">In Development</span>
      </div>
    </div>
  );
}