// app/projects/page.tsx
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Calendar } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Projects",
  description: "Projects — Sachet Ranjan Bisi",
};

type Project = {
  title: string;
  date: string;
  bullets: string[];
};

const projects: Project[] = [
  {
    title: "LLM-Powered Medication Verification",
    date: "Oct 2024",
    bullets: [
      "Developed a multi-modal text extraction pipeline using Python OCR APIs and AWS Transcribe, increasing accuracy by 25% in processing images, ED notes, audio, and handwritten clinical notes.",
      "Optimized medication data organization with advanced prompt engineering using Gemini LLM, reducing reconciliation time by 50%.",
      "Architected high-performance backend REST APIs with the Django REST framework, improving response times by 60% and enhancing system efficiency for an Android application.",
    ],
  },
  {
    title: "Food Classification Deployment Track",
    date: "Dec 2023",
    bullets: [
      "Maximized a food classification model using Transfer Learning with MobileNetV2, achieving 88% accuracy.",
      "Led the project from planning to deployment, utilizing Docker and Kubernetes to reduce resource utilization by 17%.",
      "Improved scalability and addressed deployment bottlenecks, enhancing response times by 85% and increasing overall project efficiency.",
    ],
  },
  {
    title: "Beep Baseball",
    date: "May 2023",
    bullets: [
      "Researched and authored the project proposal, contributing to a team that secured $250 in funding for the project.",
      "Conducted rigorous testing on electrical components and collaborated with engineers to identify and resolve critical issues, reducing potential production errors by 30% and enhancing product reliability.",
    ],
  },
  {
    title: "Neural Network Application",
    date: "Dec 2022",
    bullets: [
      "Implemented a perceptron training algorithm for image classification, achieving 92% accuracy on validation datasets.",
      "Optimized curve fitting using backpropagation, reducing error by 86%.",
      "Built a Python-based shape classification model, improving efficiency by 89%.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Heading */}
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
        Projects
      </h1>
      <p className="text-zinc-400 max-w-3xl">
        A showcase of selected projects that highlight my experience in AI/ML,
        backend systems, and innovative engineering solutions.
      </p>

      {/* Divider */}
      <div className="border-t border-zinc-800 mt-8 pt-12" />

      {/* Card grid */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {projects.map((p) => (
          <Card key={p.title}>
            <div className="p-4 relative flex flex-col gap-4 duration-700 group md:gap-6 md:py-8 md:px-8">
              {/* title + date */}
              <div>
                <h2 className="text-xl font-medium text-zinc-200 group-hover:text-white duration-150">
                  {p.title}
                </h2>
                <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
                  <Calendar className="w-4 h-4" />
                  {p.date}
                </div>
              </div>

              {/* bullets */}
              <ul className="z-10 mt-2 list-disc pl-5 space-y-1 text-zinc-300 text-sm">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
}