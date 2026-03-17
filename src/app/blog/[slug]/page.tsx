import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import blogs from '../../../data/blogs.json';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="px-6 py-10">
      <div className="max-w-3xl">
        <Link
          href="/blog"
          className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] underline underline-offset-4"
        >
          ← Back to blog
        </Link>

        <div className="mt-6 rounded-2xl border border-[var(--border)] overflow-hidden">
          <div className="p-6" style={{ background: post.bg }}>
            <div className="flex items-center justify-between gap-4">
              <span
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold"
                style={{ color: post.accent, borderColor: `${post.accent}40`, background: `${post.accent}12` }}
              >
                {post.category}
              </span>
              <span className="text-xs font-medium text-white/75">{post.readTime}</span>
            </div>
            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {post.title}
            </h1>
            <div className="mt-3 text-sm text-white/75">{post.date}</div>
          </div>

          <div className="p-6 bg-[var(--bg)]">
            <p className="text-[var(--text-muted)] leading-relaxed">{post.excerpt}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--border)] bg-[var(--bg-subtle)] px-3 py-1 text-xs font-medium text-[var(--text)]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] p-5">
              <div className="text-sm font-semibold text-[var(--text)]">Note</div>
              <p className="mt-1 text-sm text-[var(--text-muted)] leading-relaxed">
                This post page is currently backed by `src/data/blogs.json`. If you want, I can
                upgrade it to render real MDX content with code blocks, math, and a table of contents.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/contact" className="px-4 py-2 rounded-full text-sm font-medium contact-button">
                  Ask me anything →
                </Link>
                <Link href="/projects" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium theme-button">
                  See projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
