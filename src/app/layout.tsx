import "../styles/globals.css";
import React from 'react';
import LeftSidebar from '../components/layout/LeftSidebar';
import ThemeToggle from '../components/layout/ThemeToggle';
import Link from 'next/link';
import { Download } from 'lucide-react';

export const metadata = {
  title: 'Maadhini | Portfolio',
  description: 'Full Stack Developer & Designer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]">
        <LeftSidebar />
        <main className="flex-1 ml-60 overflow-y-auto h-screen">
          {/* Top bar */}
          <div className="sticky top-0 z-10 flex justify-end items-center gap-3 px-6 py-3 border-0 border-[var(--border)] bg-[var(--bg)] backdrop-blur-sm">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium theme-button"
            >
              <Download size={15} />
              Resume
            </a>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full text-sm font-medium contact-button"
            >
              Let&apos;s Talk →
            </Link>
          </div>

          {/* Page content */}
          <div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}