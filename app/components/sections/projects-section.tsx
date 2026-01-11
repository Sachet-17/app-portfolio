"use client";

import { Inter } from "next/font/google";
import { ProjectsContent } from "../../projects/projects-content";
import { SlideUp } from "../animations";

const inter = Inter({ subsets: ["latin"] });

export function ProjectsSection() {
  return (
    <section id="projects" className={`${inter.className} mx-auto max-w-6xl px-6 py-32`}>
      <SlideUp>
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
          Projects
        </h1>
        <p className="text-zinc-400 max-w-3xl">
          A showcase of selected projects that highlight my experience in AI/ML,
          backend systems, and innovative engineering solutions.
        </p>
      </SlideUp>

      <div className="border-t border-zinc-800 mt-8 pt-12" />

      <ProjectsContent />
    </section>
  );
}

