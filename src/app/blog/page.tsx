import React from 'react';
import Link from 'next/link';
import blogs from '../../data/blogs.json';
import '../../styles/blogs-grid.css';

function BlogCard({ blog, index }: { blog: (typeof blogs)[0]; index: number }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="bg-card">
      <div className="bg-band" style={{ background: blog.bg }}>
        <span className="bg-category" style={{ color: blog.accent, borderColor: `${blog.accent}40` }}>
          {blog.category}
        </span>
        <span className="bg-readtime">{blog.readTime}</span>
        <div className="bg-band-number" style={{ color: blog.accent }}>
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      <div className="bg-body">
        <span className="bg-date">{blog.date}</span>
        <h3 className="bg-title">{blog.title}</h3>
        <p className="bg-excerpt">{blog.excerpt}</p>
        <div className="bg-footer">
          <div className="bg-tags">
            {blog.tags.map((tag, i) => (
              <span key={i} className="bg-tag">
                {tag}
              </span>
            ))}
          </div>
          <span className="bg-arrow" style={{ color: blog.accent }}>
            →
          </span>
        </div>
      </div>
      <div className="bg-line" style={{ background: blog.accent }} />
    </Link>
  );
}

export default function BlogPage() {
  return (
    <div className="bg-section">
      <div className="bg-eyebrow">
        <div className="bg-eyebrow-line" />
        <span>Writing</span>
        <div className="bg-eyebrow-line" />
      </div>

      <div className="bg-headline">
        <h1 className="bg-headline-text">My Blogs</h1>
        <p className="bg-headline-sub">Thoughts on quant finance, ML, and building systems that work.</p>
      </div>

      <div className="bg-grid">
        {blogs.map((b, i) => (
          <BlogCard key={b.id} blog={b} index={i} />
        ))}
      </div>
    </div>
  );
}
