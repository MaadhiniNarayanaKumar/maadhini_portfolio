"use client";
import React from 'react';
import { Download } from 'lucide-react';
import { profile } from '../../data/profile';

interface ResumeButtonProps {
  variant?: 'pill' | 'solid' | 'ghost';
  size?:    'sm' | 'md' | 'lg';
  label?:   string;
}

export default function ResumeButton({
  variant = 'pill',
  size    = 'md',
  label   = 'Resume',
}: ResumeButtonProps) {
  return (
    <a
      href={profile.resumeUrl}
      download
      target="_blank"
      rel="noreferrer"
      className={`resume-btn resume-btn-${variant} resume-btn-${size}`}
    >
      <Download className="resume-btn-icon" />
      <span>{label}</span>
    </a>
  );
}