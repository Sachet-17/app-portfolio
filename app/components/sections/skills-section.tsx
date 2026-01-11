"use client";

import { Inter } from "next/font/google";
import { SkillsContent } from "../../skills/skills-content";
import { SlideUp } from "../animations";

const inter = Inter({ subsets: ["latin"] });

export function SkillsSection() {
  return (
    <section id="skills" className={`${inter.className} mx-auto max-w-6xl px-6 py-32`}>
      <SlideUp>
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Skills</h1>
        <p className="text-zinc-400 max-w-3xl">
          Languages | Databases | Developer Tools | Technologies & Frameworks
        </p>
      </SlideUp>

      <div className="border-t border-zinc-800 mt-8 pt-12" />

      <SkillsContent />
    </section>
  );
}

