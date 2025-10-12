
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
  content: React.ReactNode;
}

export interface SocialLink {
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
}