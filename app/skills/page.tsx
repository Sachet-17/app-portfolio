// app/skills/page.tsx
import React from "react";
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";

// Simple Icons via react-icons (only ones that exist are imported)
import {
  SiPython,
  SiOpenjdk,         // Java
  SiJavascript,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiReact,
  SiDjango,
  SiSpringboot,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiAmazonaws,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiJupyter,
  SiPostman,
  SiFirebase,
  SiVisualstudiocode,
  SiNodedotjs,
} from "react-icons/si";

const inter = Inter({ subsets: ["latin"] });

type Item = { name: string; icon?: React.ReactNode };

function Section({ title, items }: { title: string; items: Item[] }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
        {items.map(({ name, icon }) => (
          <div key={name} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex items-center justify-center hover:scale-105 transition">
              {icon ?? <span className="text-xs text-zinc-400 px-2">{name}</span>}
            </div>
            <span className="mt-2 text-sm text-zinc-300">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export const metadata = {
  title: "Skills",
  description:
    "Languages, frameworks, ML/AI tools, cloud & DevOps, and developer tooling I work with.",
};

export default function SkillsPage() {
  const languages: Item[] = [
    { name: "Python", icon: <SiPython className="w-12 h-12 text-yellow-300" /> },
    { name: "Java", icon: <SiOpenjdk className="w-12 h-12 text-orange-500" /> }, // Java icon = OpenJDK
    { name: "JavaScript", icon: <SiJavascript className="w-12 h-12 text-yellow-400" /> },
    { name: "C++", icon: <SiCplusplus className="w-12 h-12 text-blue-500" /> },
    { name: "HTML", icon: <SiHtml5 className="w-12 h-12 text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="w-12 h-12 text-blue-400" /> },
    { name: "SQL", icon: <SiPostgresql className="w-12 h-12 text-sky-400" /> },
  ];

  const devTools: Item[] = [
    { name: "VS Code", icon: <SiVisualstudiocode className="w-12 h-12 text-blue-500" /> },
    { name: "Git", icon: <SiGit className="w-12 h-12 text-orange-600" /> },
    { name: "JUnit" },     // no official icon in SI
    { name: "PyTest" },    // no official icon in SI
    { name: "Jupyter", icon: <SiJupyter className="w-12 h-12 text-orange-300" /> },
    { name: "Postman", icon: <SiPostman className="w-12 h-12 text-orange-400" /> },
    { name: "JAX" },       // no official icon in SI
  ];

  const frameworksAndTech: Item[] = [
    { name: "TensorFlow", icon: <SiTensorflow className="w-12 h-12 text-orange-400" /> },
    { name: "PyTorch", icon: <SiPytorch className="w-12 h-12 text-red-500" /> },
    { name: "Scikit-learn", icon: <SiScikitlearn className="w-12 h-12 text-orange-300" /> },
    { name: "Keras", icon: <SiKeras className="w-12 h-12 text-red-500" /> },
    { name: "Pandas", icon: <SiPandas className="w-12 h-12 text-zinc-200" /> },
    { name: "NumPy", icon: <SiNumpy className="w-12 h-12 text-sky-400" /> },
    { name: "OpenCV", icon: <SiOpencv className="w-12 h-12 text-cyan-300" /> },
    { name: "NLP" },                 // text tile
    { name: "Transfer Learning" },   // text tile
    { name: "LLM Integration" },     // text tile
    { name: "Node.js", icon: <SiNodedotjs className="w-12 h-12 text-green-500" /> },
    { name: "React", icon: <SiReact className="w-12 h-12 text-cyan-400" /> },
    { name: "Django", icon: <SiDjango className="w-12 h-12 text-green-500" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="w-12 h-12 text-green-600" /> },
    { name: "Firebase", icon: <SiFirebase className="w-12 h-12 text-yellow-400" /> },
    { name: "REST / RESTful APIs" }, // text tile
  ];

  const cloudDevOps: Item[] = [
    { name: "AWS (S3, EC2, Transcribe)", icon: <SiAmazonaws className="w-12 h-12 text-yellow-500" /> },
    { name: "GCP", icon: <SiGooglecloud className="w-12 h-12 text-blue-500" /> },
    { name: "Docker", icon: <SiDocker className="w-12 h-12 text-sky-400" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="w-12 h-12 text-blue-500" /> },
    { name: "Jenkins", icon: <SiJenkins className="w-12 h-12 text-red-600" /> },
  ];

  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-48 pb-16`}>
      <Navigation />

      {/* Header (Projects/About style) */}
      <section className="mb-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Skills</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-zinc-400">
          Languages, frameworks, ML/AI tools, cloud platforms, and developer tooling I use
          to build production-ready software.
        </p>
      </section>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-zinc-900/0 via-zinc-900/20 to-zinc-900/0" />
      <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />

      <Section title="Languages" items={languages} />
      <Section title="Frameworks & Technologies" items={frameworksAndTech} />
      <Section title="Cloud & DevOps" items={cloudDevOps} />
      <Section title="Developer Tools" items={devTools} />

      <p className="mt-14 text-center text-sm text-zinc-500">
        *Actively exploring LLM evals, vector DBs, and low-latency inference patterns.
      </p>
    </main>
  );
}