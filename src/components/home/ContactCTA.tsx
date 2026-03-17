"use client";

import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import '../../styles/contact-cta.css';
import { profile } from '../../data/profile';

const socials = [
    {
        label: 'Email',
        value: profile.email,
        href: `mailto:${profile.email}`,
        icon: '✉',
    },
    {
        label: 'LinkedIn',
        value: profile.linkedinUrl.replace(/^https?:\/\//, ''),
        href: profile.linkedinUrl,
        icon: 'in',
    },
    {
        label: 'GitHub',
        value: profile.githubUrl.replace(/^https?:\/\//, ''),
        href: profile.githubUrl,
        icon: '⌥',
    },
];

const availability = [
    'Research Collaborations',
    'Quant Finance Roles',
    'ML Engineering Projects',
    'Freelance Consulting',
];

const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

export default function ContactCTA() {
    const { ref, visible } = useScrollReveal({ threshold: 0.2 });

    return (
        <section ref={ref} className="cc-section">

            <div className="cc-orb cc-orb-1" />
            <div className="cc-orb cc-orb-2" />
            <div className="cc-dot-grid" />

            <div className="cc-inner">

                {/* ── Left ── */}
                <div className="cc-left">

                    <div className={`cc-eyebrow reveal reveal-up ${visible ? 'is-visible' : ''}`}>
                        <span className="cc-eyebrow-dot" />
                        Open to opportunities
                    </div>

                    <h2 className={`cc-headline reveal reveal-up reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
                        Let&apos;s build something
                        <br />
                        <span className="cc-headline-accent">that matters.</span>
                    </h2>

                    <p className={`cc-sub reveal reveal-up reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
                        Whether it&apos;s a research collaboration, a quant role,
                        or an interesting problem at the intersection of AI and
                        finance — I&apos;d love to hear from you.
                    </p>

                    <div className={`cc-ctas reveal reveal-up reveal-delay-3 ${visible ? 'is-visible' : ''}`}>
                        <Link href="/contact" className="cc-btn-primary">
                            Get In Touch
                            <span className="cc-btn-arrow">→</span>
                        </Link>
                        <a href="/resume.pdf" download className="cc-btn-secondary">
                            Download Resume
                        </a>
                    </div>

                </div>

                {/* ── Right ── */}
                <div className="cc-right">

                    <div className={`cc-availability reveal reveal-scale reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
                        <div className="cc-avail-top">
                            <div className="cc-avail-dot" />
                            <span className="cc-avail-label">Currently available for</span>
                        </div>
                        <div className="cc-avail-items">
                            {availability.map((item, i) => (
                                <span key={i} className="cc-avail-item">{item}</span>
                            ))}
                        </div>
                    </div>

                    <div className={`cc-socials reveal reveal-up reveal-delay-3 ${visible ? 'is-visible' : ''}`}>
                        {socials.map((s, i) => (
                            <a
                                key={i}
                                href={s.href}
                                target={s.href.startsWith('http') ? '_blank' : undefined}
                                rel="noreferrer"
                                className="cc-social-row"
                            >
                                <div className="cc-social-icon">{s.icon}</div>
                                <div className="cc-social-text">
                                    <span className="cc-social-label">{s.label}</span>
                                    <span className="cc-social-value">{s.value}</span>
                                </div>
                                <span className="cc-social-arrow">→</span>
                            </a>
                        ))}
                    </div>

                </div>

            </div>

            {/* ── Bottom bar ── */}
            <div className={`cc-bottom reveal reveal-fade reveal-delay-4 mx-4 ${visible ? 'is-visible' : ''}`}>
                <span className="cc-copyright">© 2025 Maadhini Narayanakumar</span>
                <div className="cc-bottom-links">
                    {navLinks.map((l, i) => (
                        <Link key={i} href={l.href} className="cc-bottom-link">
                            {l.label}
                        </Link>
                    ))}
                </div>
            </div>

        </section>
    );
}