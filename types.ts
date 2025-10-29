
import React from 'react';

export interface NavLink {
  name: string;
  path: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  // Fix: Add React import to use React.ReactNode
  content: React.ReactNode;
}

export interface SocialLink {
    name: string;
    href: string;
    // Fix: Add React import to use React.ComponentType
    icon: React.ComponentType<{ className?: string }>;
}