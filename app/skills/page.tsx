// app/skills/page.tsx
import React from "react";
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";
// ✅ example icons from react-icons
import { SiPython, SiJava, SiReact } from "react-icons/si";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Skills",
  description: "Skills of Sachet Ranjan Bisi",
};

export default function SkillsPage() {
  const skills = [
    { name: "Python", icon: <SiPython className="w-12 h-12 text-yellow-400" /> },
    { name: "Java", icon: <SiJava className="w-12 h-12 text-red-500" /> },
    { name: "React", icon: <SiReact className="w-12 h-12 text-cyan-400" /> },
  ];

  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-48 pb-16`}>
      <Navigation />

      {/* Header like Projects/About */}
      <section className="mb-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Skills</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-zinc-400">
          A few of my core technologies and tools.
        </p>
      </section>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-zinc-900/0 via-zinc-900/20 to-zinc-900/0" />
      <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />

      {/* Simple icon grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
        {skills.map(({ name, icon }) => (
          <div key={name} className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:scale-105 transition">
              {icon}
            </div>
            <span className="mt-2 text-sm text-zinc-300">{name}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
