import React from "react";
import Link from "next/link";
import { profile } from "../../data/profile";

export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 py-20 bg-[var(--bg)]">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--text-muted)]">
            Contact
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text)]">
            Let’s collaborate.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
            I’m open to opportunities in <strong>AI/ML</strong> and{" "}
            <strong>quantitative research</strong>, as well as technical collaborations.
            <br />
            <span className="inline-block mt-2">
              I typically respond within 24 hours.
            </span>
          </p>

          {/* Location */}
          <div className="mt-5 flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <span>📍</span>
            <span>Franklin Park, New Jersey, USA</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--border)] mb-10" />

        {/* Contact Cards */}
        <div className="space-y-5">
          {[
            {
              label: "Email",
              value: profile.email,
              href: `mailto:${profile.email}`,
              primary: true,
            },
            {
              label: "LinkedIn",
              value: profile.linkedinUrl.replace(/^https?:\/\//, ""),
              href: profile.linkedinUrl,
            },
            {
              label: "GitHub",
              value: profile.githubUrl.replace(/^https?:\/\//, ""),
              href: profile.githubUrl,
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label !== "Email" ? "_blank" : undefined}
              rel={item.label !== "Email" ? "noreferrer" : undefined}
              className={`
                group flex items-center justify-between
                rounded-2xl px-6 py-5
                border transition-all duration-300
                hover:shadow-md hover:-translate-y-0.5
                active:scale-[0.99]
                ${
                  item.primary
                    ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                    : "bg-[var(--bg-subtle)] border-[var(--border)] hover:border-[var(--accent)]"
                }
              `}
            >
              <div>
                <div
                  className={`text-sm font-semibold ${
                    item.primary ? "text-white" : "text-[var(--text)]"
                  }`}
                >
                  {item.label}
                </div>

                <div
                  className={`text-sm break-words ${
                    item.primary
                      ? "text-white/80"
                      : "text-[var(--text-muted)]"
                  }`}
                >
                  {item.value}
                </div>
              </div>

              <span
                className={`font-semibold transition-transform group-hover:translate-x-1 ${
                  item.primary ? "text-white" : "text-[var(--accent)]"
                }`}
              >
                →
              </span>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 p-8 rounded-3xl border border-[var(--border)] bg-[var(--bg-subtle)]">
          <h2 className="text-xl font-bold text-[var(--text)]">
            Prefer a quick overview?
          </h2>

          <p className="mt-3 text-[var(--text-muted)]">
            Explore my selected work or download my resume instantly.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download
              className="px-5 py-2.5 rounded-full text-sm font-medium
                         bg-[var(--accent)] text-white
                         hover:opacity-90 active:scale-[0.98]
                         transition"
            >
              Download Resume →
            </a>

            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-full text-sm font-medium
                         border border-[var(--border)]
                         hover:border-[var(--accent)]
                         active:scale-[0.98]
                         transition"
            >
              View Work →
            </Link>
          </div>
        </div> */}

      </div>
    </div>
  );
}