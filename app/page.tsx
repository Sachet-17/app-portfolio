// app/page.tsx
import Link from "next/link";
import Particles from "./components/particles";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";


const navigation = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

// 🔗 Edit these to your own handles
const socials = [
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
    href: "https://www.instagram.com/sachet_17/", // <- update
    icon: Instagram,
    external: true,
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Background particles (non-blocking) */}
      <Particles className="absolute inset-0 -z-10" quantity={80} />

      {/* Top nav (simple quick links for home) */}
      <nav className="mt-16 sm:mt-20 animate-fade-in">
        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs sm:text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      {/* Glow line */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* Hero title */}
      <h1 className="z-10 mt-6 sm:mt-8 px-2 text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-white/90 text-edge-outline animate-title whitespace-nowrap">
        Sachet Ranjan Bisi
      </h1>

      {/* Glow line */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* Social icon row with labels */}
      <div className="mt-6 sm:mt-8 flex items-center justify-center gap-5 sm:gap-7">
        {socials.map(({ name, href, icon: Icon, external }) => (
          <Link
            key={name}
            href={href}
            aria-label={name}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="group flex flex-col items-center"
          >
            <span className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/40 text-zinc-300 hover:text-white hover:bg-zinc-900 hover:border-zinc-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:scale-110" />
            </span>
            <span className="mt-2 text-[11px] sm:text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">
              {name}
            </span>
          </Link>
        ))}
      </div>
      
      {/* Subtitle / CTA */}
      <div className="my-10 sm:my-12 text-center animate-fade-in px-4">
        <p className="mx-auto max-w-xl text-sm sm:text-base text-zinc-400">
         AI/ML Engineer • Software Engineer • AI/ML • Backend — building reliable, scalable systems and clean UIs.
        </p>

        {/*<div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/projects"
            className="rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-900"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-900"
          >
            Contact
          </Link>
        </div> */}
      </div>
    </div>
  );
}