// app/skills/page.tsx
import React from "react";
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";
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
  SiAmazon,          // AWS (fallback icon)
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiJupyter,
  SiPostman,
  SiFirebase,
} from "react-icons/si";

const inter = Inter({ subsets: ["latin"] });

type Item = { name: string; icon?: React.ReactNode };

const ALL_SKILLS: Item[] = [
  // Languages & DB
  { name: "Python", icon: <SiPython className="w-12 h-12 text-yellow-300" /> },
  { name: "Java", icon: <SiOpenjdk className="w-12 h-12 text-orange-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-12 h-12 text-yellow-400" /> },
  { name: "C++", icon: <SiCplusplus className="w-12 h-12 text-blue-500" /> },
  { name: "HTML", icon: <SiHtml5 className="w-12 h-12 text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="w-12 h-12 text-blue-400" /> },
  { name: "SQL", icon: <SiPostgresql className="w-12 h-12 text-sky-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-12 h-12 text-sky-400" /> },

  // Dev tools
  { name: "VS Code" },
  { name: "Git", icon: <SiGit className="w-12 h-12 text-orange-600" /> },
  { name: "JUnit" },
  { name: "PyTest" },
  { name: "Jupyter Notebook", icon: <SiJupyter className="w-12 h-12 text-orange-300" /> },
  { name: "Postman", icon: <SiPostman className="w-12 h-12 text-orange-400" /> },
  { name: "JAX" },

  // ML / Frameworks / Cloud / Web
  { name: "TensorFlow", icon: <SiTensorflow className="w-12 h-12 text-orange-400" /> },
  { name: "PyTorch", icon: <SiPytorch className="w-12 h-12 text-red-500" /> },
  { name: "Scikit-learn", icon: <SiScikitlearn className="w-12 h-12 text-orange-300" /> },
  { name: "Keras", icon: <SiKeras className="w-12 h-12 text-red-500" /> },
  { name: "Pandas", icon: <SiPandas className="w-12 h-12 text-zinc-200" /> },
  { name: "NumPy", icon: <SiNumpy className="w-12 h-12 text-sky-400" /> },
  { name: "OpenCV", icon: <SiOpencv className="w-12 h-12 text-cyan-300" /> },
  { name: "NLP" },
  { name: "Transfer Learning" },
  { name: "LLM Integration" },
  { name: "AWS (S3, EC2, Transcribe)", icon: <SiAmazon className="w-12 h-12 text-yellow-500" /> },
  { name: "GCP", icon: <SiGooglecloud className="w-12 h-12 text-blue-500" /> },
  { name: "Docker", icon: <SiDocker className="w-12 h-12 text-sky-400" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="w-12 h-12 text-blue-500" /> },
  { name: "Jenkins", icon: <SiJenkins className="w-12 h-12 text-red-600" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="w-12 h-12 text-green-600" /> },
  { name: "React", icon: <SiReact className="w-12 h-12 text-cyan-400" /> },
  { name: "Django", icon: <SiDjango className="w-12 h-12 text-green-500" /> },
  { name: "REST" },
  { name: "Firebase", icon: <SiFirebase className="w-12 h-12 text-yellow-400" /> },
  { name: "RESTful APIs" },
];

export const metadata = {
  title: "Skills",
  description: "Skills and tools I use to build production-ready software.",
};

export default function SkillsPage() {
  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Heading */}
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Skills</h1>

      {/* One-line summary */}
      <p className="text-zinc-400 max-w-3xl">
        Languages & Databases: Python, Java, JavaScript, C++, HTML, CSS, SQL, PostgreSQL.{" "}
        Developer Tools: VS Code, Git, JUnit, PyTest, Jupyter Notebook, Postman, JAX.{" "}
        Technologies & Frameworks: TensorFlow, PyTorch, Scikit-learn, Keras, Pandas, NumPy, OpenCV, NLP, Transfer
        Learning, LLM Integration, AWS (S3, EC2, Transcribe), GCP, Docker, Kubernetes, Jenkins, Spring Boot, React,
        Django, REST, Firebase, RESTful APIs.
      </p>

      {/* Divider */}
      <div className="border-t border-zinc-800 mt-8 pt-12" />

      {/* Icon grid */}
      <section>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {ALL_SKILLS.map(({ name, icon }) => (
            <div key={name} className="flex flex-col items-center text-center" title={name}>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex items-center justify-center hover:scale-105 transition">
                {icon ?? <span className="text-xs text-zinc-300 px-2">{name}</span>}
              </div>
              <span className="mt-2 text-sm text-zinc-300">{name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}