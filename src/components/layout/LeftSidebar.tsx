"use client";
import '../../styles/sidebar.css';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routes } from '../../lib/routes';
import { profile } from '../../data/profile';
import {
  Mail,
  Linkedin,
  Github,
  Home,
  User,
  Briefcase,
  FolderOpen,
  BookOpen,
  LayoutGrid,
  MapPin,
} from 'lucide-react';

const navItems = [
  { label: 'Home',       href: routes.home,      icon: Home       },
  { label: 'About',      href: routes.about,     icon: User       },
//   { label: 'Experience', href: routes.experience,icon: Briefcase  },
  { label: 'Projects',   href: routes.projects,  icon: FolderOpen },
//   { label: 'Portfolio',  href: routes.portfolio, icon: LayoutGrid },
  { label: 'Blog',       href: routes.blog,      icon: BookOpen   },
  { label: 'Contact',    href: routes.contact,   icon: Mail       },
];

const socials = [
  { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
  { href: profile.linkedinUrl, icon: Linkedin, label: 'LinkedIn' },
  { href: profile.githubUrl, icon: Github, label: 'GitHub' },
];

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">

      {/* ── Glow orb background ── */}
      <div className="sidebar-orb" />

      {/* ── Profile ── */}
      <div className="sidebar-profile">
        <div className="avatar-ring">
          <img
            src="/assets/images/profile.jpg"
            alt={profile.name}
            className="avatar-img"
          />
        </div>
        <h1 className="sidebar-name">{profile.name.split(' ')[0]}</h1>
        <p className="sidebar-role">{profile.role}</p>
        <span className="sidebar-location">
          <MapPin size={11} />
          {profile.location}
        </span>
      </div>

      {/* ── Divider ── */}
      <div className="sidebar-divider" />

      {/* ── Nav ── */}
      <nav className="sidebar-nav">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive =
            pathname === href || (href === routes.home && pathname === '/');
          return (
            <Link
              key={label}
              href={href}
              className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
            >
              <Icon size={15} className="nav-icon" />
              <span>{label}</span>
              {isActive && <span className="nav-pip" />}
            </Link>
          );
        }
        )}
      </nav>

      {/* ── Divider ── */}
      <div className="sidebar-divider" />

      {/* ── Socials ── */}
      <div className="sidebar-socials">
        {socials.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="social-icon"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>

      {/* ── Availability ── */}
      <div className="availability-badge">
        <span className="availability-dot" />
        Open to work
      </div>

      {/* ── Footer ── */}
      <div className="sidebar-footer">
        © {new Date().getFullYear()} {profile.name}
      </div>

    </aside>
  );
}