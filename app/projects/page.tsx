// app/projects/page.tsx
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";
import { siteConfig } from "../../data/config";
import { SlideUp } from "../components/animations";
import { ProjectsContent } from "./projects-content";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Projects",
  description: `Projects — ${siteConfig.name}`,
};

export default function ProjectsPage() {
  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Heading */}
      <SlideUp>
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
          Projects
        </h1>
        <p className="text-zinc-400 max-w-3xl">
          A showcase of selected projects that highlight my experience in AI/ML,
          backend systems, and innovative engineering solutions.
        </p>
      </SlideUp>

      {/* Divider */}
      <div className="border-t border-zinc-800 mt-8 pt-12" />

      <ProjectsContent />
    </main>
  );
}