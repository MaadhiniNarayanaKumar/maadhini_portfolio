import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import projects from '../../../data/projects.json';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="px-6 py-10">
      <div
        className="rounded-2xl border border-[var(--border)] p-8"
        style={{ background: project.gradient }}
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/projects"
            className="text-sm font-medium text-white/80 hover:text-white underline underline-offset-4"
          >
            ← Back to projects
          </Link>
          <span className="text-sm font-medium text-white/80">{project.year}</span>
        </div>

        <h1 className="mt-6 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          {project.title}
        </h1>
        <p className="mt-4 text-white/85 max-w-2xl leading-relaxed">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span
            className="rounded-full border px-3 py-1 text-xs font-semibold"
            style={{ borderColor: `${project.accent}60`, color: project.accent, background: `${project.accent}14` }}
          >
            {project.category}
          </span>
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 max-w-3xl">
        <h2 className="text-xl font-bold text-[var(--text)]">What this project demonstrates</h2>
        <ul className="mt-3 space-y-2 text-[var(--text-muted)] leading-relaxed list-disc pl-5">
          <li>Clear problem framing and a system-level approach.</li>
          <li>Evaluation discipline (robustness &amp; out-of-sample mindset).</li>
          <li>Engineering choices that aim to survive real constraints.</li>
        </ul>

        <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] p-5">
          <div className="text-sm font-semibold text-[var(--text)]">Next</div>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Want the full breakdown? I can expand this page with architecture diagrams,
            results, and links (GitHub/demo) per project.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full text-sm font-medium contact-button"
            >
              Let&apos;s talk →
            </Link>
            <a href="/resume.pdf" download className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium theme-button">
              Download resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
