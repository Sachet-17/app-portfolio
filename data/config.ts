import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
  external: boolean;
}

export const navigation: NavigationItem[] = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export const socials: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sachetbisi/",
    icon: Linkedin,
    external: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/Sachet-17",
    icon: Github,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:sb9229@nyu.edu",
    icon: Mail,
    external: false,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sachet_17/",
    icon: Instagram,
    external: true,
  },
];

export const siteConfig = {
  name: "Sachet Ranjan Bisi",
  title: "Sachet Ranjan Bisi — Portfolio",
  description: "AI/ML Engineer & Software Developer",
  tagline: "AI/ML Engineer • Software Engineer • AI/ML • Backend — building reliable, scalable systems and clean UIs.",
  url: "https://iamsrb.com",
  email: "sb9229@nyu.edu",
  location: "New York, USA",
  github: "https://github.com/Sachet-17",
  linkedin: "https://www.linkedin.com/in/sachetbisi/",
  instagram: "https://www.instagram.com/sachet_17/",
} as const;

