"use client";

// app/page.tsx
import Link from "next/link";
import Particles from "./components/particles";
import Spotlight from "./components/spotlight";
import Typing from "./components/typing";
import { navigation, socials, siteConfig } from "../data/config";

const roleWords = [
  "AI/ML Engineer",
  "Software Engineer",
  "Backend Developer",
  "Problem Solver",
  "Full Stack Developer",
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Background particles */}
      <Spotlight />
      <Particles className="absolute inset-0 -z-10" quantity={80} />

      {/* Top nav */}
      <nav className="mt-16 sm:mt-20 animate-fade-in">
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-base sm:text-lg text-zinc-400 hover:text-zinc-200 transition-all duration-300 group"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-zinc-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </ul>
      </nav>

      {/* Glow line */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* Hero title */}
      <h1 className="z-10 mt-6 sm:mt-8 px-2 text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-white/90 text-edge-outline animate-title whitespace-nowrap">
        {siteConfig.name}
      </h1>

      {/* Glow line */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* Social icons */}
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
            <span className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/40 text-zinc-300 hover:text-white hover:bg-zinc-900 hover:border-zinc-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 hover:shadow-lg hover:shadow-zinc-500/20">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:scale-110" />
            </span>
            <span className="mt-2 text-[11px] sm:text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">
              {name}
            </span>
          </Link>
        ))}
      </div>
      
      {/* Subtitle with typing effect */}
      <div className="my-10 sm:my-12 text-center animate-fade-in px-4">
        <p className="mx-auto max-w-xl text-sm sm:text-base text-zinc-300 mb-2 font-medium">
          <Typing words={roleWords} speed={100} pause={2000} />
        </p>
        <p className="mx-auto max-w-xl text-xs sm:text-sm text-zinc-500 mt-4">
          building reliable, scalable systems and clean UIs
        </p>
      </div>
    </div>
  );
}