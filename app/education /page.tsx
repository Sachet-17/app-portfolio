"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";

const inter = Inter({ subsets: ["latin"] });

export default function EducationPage() {
  return (
    <main className={`${inter.className} mx-auto max-w-5xl px-6 pt-32 pb-16`}>
      {/* Top navigation */}
      <Navigation />

      {/* Page heading */}
      <header className="mb-12 text-left">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Education</h1>
      </header>

      {/* Summary */}
      <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl mb-12">
        I have pursued my academic journey with a focus on <strong>Computer Engineering</strong>, 
        gaining strong foundations in software development, machine learning, and systems programming.  
        Here are the institutions where I studied:
      </p>

      {/* Education Cards (similar to Projects UI) */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* NYU */}
        <div className="border border-zinc-800 rounded-lg p-6 hover:bg-zinc-900 transition">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/skills/nyu.png" // place your NYU logo in public/skills/nyu.png
              alt="New York University Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <div>
              <h3 className="text-lg font-semibold text-zinc-100">
                New York University
              </h3>
              <p className="text-sm text-zinc-400">
                September 2023 – May 2025 · New York, NY
              </p>
            </div>
          </div>
          <p className="text-zinc-300">
            Master of Science in <strong>Computer Engineering</strong>
          </p>
          <p className="text-sm text-zinc-400 mt-2">
            Relevant Coursework: Machine Learning, Artificial Intelligence, 
            Internet Protocols, Network Security
          </p>
        </div>

        {/* University of Illinois */}
        <div className="border border-zinc-800 rounded-lg p-6 hover:bg-zinc-900 transition">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/skills/illinois.png" // place your Illinois logo in public/skills/illinois.png
              alt="University of Illinois Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <div>
              <h3 className="text-lg font-semibold text-zinc-100">
                University of Illinois
              </h3>
              <p className="text-sm text-zinc-400">
                August 2019 – May 2023 · Chicago, IL
              </p>
            </div>
          </div>
          <p className="text-zinc-300">
            Bachelor of Science in <strong>Computer Engineering</strong>
          </p>
          <p className="text-sm text-zinc-400 mt-2">
            Relevant Coursework: Data Structures, Computer Vision, Systems Programming, 
            Computer Architecture
          </p>
        </div>
      </section>
    </main>
  );
}