import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "/projects" }, // template route already exists
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "/Sachet-Resume.pdf" }, // upload this to repo root or /public
  { name: "Contact", href: "/contact" }, // template route already exists
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Top Nav */}
      <nav className="my-8 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      {/* Background particles */}
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      {/* Hero */}
      <header id="top" className="flex flex-col items-center justify-center py-8 px-4">
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          SACHET RANJAN BISI
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <p className="my-10 text-center animate-fade-in text-zinc-400 max-w-2xl">
          Software Developer & AI/ML Engineer — I build ML-powered apps, scalable APIs, and clean UIs.
        </p>

        <div className="flex gap-3 animate-fade-in">
          <Link href="/projects" className="px-4 py-2 rounded-lg border border-zinc-700 text-zinc-200 hover:bg-zinc-900">
            View Projects
          </Link>
          <Link href="/Sachet-Resume.pdf" className="px-4 py-2 rounded-lg border border-zinc-700 text-zinc-200 hover:bg-zinc-900">
            Resume
          </Link>
        </div>
      </header>

      {/* About */}
      <section id="about" className="w-full max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-4">About</h2>
        <p className="text-zinc-400">
          MS in Computer Engineering @ NYU. Passionate about AI/ML, backend APIs, and thoughtful UX.
          Recently built pipelines combining OCR/ASR with LLMs and deployed inference services.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="w-full max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-4">Experience</h2>
        <ul className="space-y-4 text-zinc-300">
          <li className="border border-zinc-800 rounded-xl p-4">
            <div className="text-sm text-zinc-400">2024–2025</div>
            <div className="font-medium">Applied AI Engineer (Projects) — NYU & Personal</div>
            <ul className="list-disc pl-5 text-zinc-400 mt-2 space-y-1">
              <li>LLM pipeline (OCR + ASR + validation); reduced latency via batching/caching.</li>
              <li>Deployed APIs & dashboards; added tests and CI.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" className="w-full max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            "Python", "Java", "JavaScript", "React", "Next.js",
            "PyTorch", "TensorFlow", "FastAPI", "Django",
            "PostgreSQL", "SQLite", "Docker", "AWS"
          ].map(s => (
            <span key={s} className="rounded-full border border-zinc-800 px-3 py-1 text-zinc-300">{s}</span>
          ))}
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-12" />
    </div>
  );
}
