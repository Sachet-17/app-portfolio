// app/resume/page.tsx
"use client";
import { Navigation } from "../components/nav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Resume",
  description: "Resume — Sachet Ranjan Bisi",
};

export default function ResumePage() {
  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Heading */}
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Resume</h1>
      <p className="text-zinc-400 mb-8">
        View or download my résumé below.
      </p>

      {/* PDF Embed */}
      <div className="w-full h-[80vh] border border-zinc-800 rounded-lg overflow-hidden">
        <iframe
          src="/Sachet%20Ranjan%20Bisi%20Resume.pdf"
          className="w-full h-full"
          title="Sachet Ranjan Bisi Resume"
        />
      </div>
    </main>
  );
}