// app/skills/page.tsx
import React from "react";
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";
import { SkillsContent } from "./skills-content";
import { SlideUp } from "../components/animations";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Skills",
  description: "Skills and tools I use to build production-ready software.",
};

export default function SkillsPage() {
  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Heading */}
      <SlideUp>
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Skills</h1>

        {/* One-line summary */}
        <p className="text-zinc-400 max-w-3xl">
          Languages | Databases | Developer Tools | Technologies & Frameworks
        </p>
      </SlideUp>

      {/* Divider */}
      <div className="border-t border-zinc-800 mt-8 pt-12" />

      <SkillsContent />
    </main>
  );
}