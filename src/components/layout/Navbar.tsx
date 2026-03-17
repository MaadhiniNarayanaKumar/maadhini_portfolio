import React from 'react';
import Link from 'next/link';
import { routes } from '../../lib/routes';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="space-x-4">
        <Link href={routes.home}>Home</Link>
        <Link href={routes.about}>About</Link>
        <Link href={routes.projects}>Projects</Link>
        <Link href={routes.blog}>Blog</Link>
        <Link href={routes.portfolio}>Portfolio</Link>
        <Link href={routes.experience}>Experience</Link>
        <Link href={routes.contact}>Contact</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}
