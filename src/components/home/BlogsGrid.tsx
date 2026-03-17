"use client";
import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import blogs from '../../data/blogs.json';
import '../../styles/blogs-grid.css';

const displayBlogs = blogs.slice(0, 9);

interface BlogCardProps {
  blog: typeof blogs[0];
  index: number;
  visible: boolean;
}

function BlogCard({ blog, index, visible }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className={`bg-card reveal reveal-up ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      {/* Top band */}
      <div className="bg-band" style={{ background: blog.bg }}>
        <span
          className="bg-category"
          style={{ color: blog.accent, borderColor: `${blog.accent}40` }}
        >
          {blog.category}
        </span>
        <span className="bg-readtime">{blog.readTime}</span>
        <div
          className="bg-band-number"
          style={{ color: blog.accent }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Body */}
      <div className="bg-body">
        <span className="bg-date">{blog.date}</span>
        <h3 className="bg-title">{blog.title}</h3>
        <p className="bg-excerpt">{blog.excerpt}</p>

        <div className="bg-footer">
          <div className="bg-tags">
            {blog.tags.map((tag, i) => (
              <span key={i} className="bg-tag">{tag}</span>
            ))}
          </div>
          <span className="bg-arrow" style={{ color: blog.accent }}>→</span>
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <div className="bg-line" style={{ background: blog.accent }} />

    </Link>
  );
}

export default function BlogsGrid() {
  const { ref, visible } = useScrollReveal<HTMLElement>({ threshold: 0.05 });

  return (
    <section ref={ref} className="bg-section">

      {/* ── Eyebrow ── */}
      <div className={`bg-eyebrow reveal reveal-up ${visible ? 'is-visible' : ''}`}>
        <div className="bg-eyebrow-line" />
        <span>Writing</span>
        <div className="bg-eyebrow-line" />
      </div>

      {/* ── Headline ── */}
      <div className={`bg-headline reveal reveal-up reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
        <h2 className="bg-headline-text">From The Blog</h2>
        <p className="bg-headline-sub">
          Thoughts on quantitative finance, machine learning, and building things that work
        </p>
      </div>

      {/* ── 3x3 Grid ── */}
      <div className="bg-grid">
        {displayBlogs.map((blog, i) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            index={i}
            visible={visible}
          />
        ))}
      </div>

      {/* ── Show more ── */}
      <div className={`bg-showmore reveal reveal-up ${visible ? 'is-visible' : ''}`}>
        <Link href="/blog" className="bg-showmore-btn">
          <span>Read All Posts</span>
          <span className="bg-showmore-count">{blogs.length} articles</span>
          <span className="bg-showmore-arrow">→</span>
        </Link>
      </div>

    </section>
  );
}