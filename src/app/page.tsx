import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSnapshot from '../components/home/AboutSnapshot';
import LocationSection from '../components/home/LocationSection';
import ContactCTA from '../components/home/ContactCTA';
import QuoteBand from '../components/home/QuoteBand';
import StoryActs from '../components/home/StoryActs';
import { routes } from '../lib/routes';
import Link from 'next/link';
import SkillsSection from '../components/home/SkillsSection';
import ProjectGrid from '../components/home/ProjectsGrid';
import BlogsGrid from '../components/home/BlogsGrid';

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <QuoteBand />
            {/* <AboutSnapshot /> */}
            <StoryActs />
            <SkillsSection />
            <ProjectGrid />
            {/* <BlogsGrid /> */}
            <ContactCTA />
            {/* quick links for redirection */}
            {/* <p>
        <Link href={routes.projects}>See projects</Link> |{' '}
        <Link href={routes.blog}>Read blog</Link>
      </p>
      <LocationSection />
      <ContactCTA /> */}
        </div>
    );
}
