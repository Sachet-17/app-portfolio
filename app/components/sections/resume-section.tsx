"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { siteConfig } from "../../../data/config";

const inter = Inter({ subsets: ["latin"] });

export function ResumeSection() {
  const pdfPath = siteConfig.resumePdfPath;

  return (
    <section id="resume" className={`${inter.className} mx-auto max-w-6xl px-6 py-32`}>
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Resume</h1>
      <p className="text-zinc-400 mb-6">
        View my résumé below. You can also download it for later.
      </p>
      
      <div className="border-t border-zinc-800 mb-12" />
      
      <div className="mb-8 flex flex-wrap gap-3">
        <Link
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-900"
        >
          Open in new tab
        </Link>
        <a
          href={pdfPath}
          download
          className="rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-900"
        >
          Download PDF
        </a>
      </div>

      <div className="w-full h-[80vh] border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900">
        <iframe
          src={pdfPath}
          title="Sachet Ranjan Bisi Resume"
          className="w-full h-full"
        />
      </div>

      <p className="mt-3 text-xs text-zinc-500">
        If the PDF doesn't render, use "Open in new tab" or "Download PDF".
      </p>
    </section>
  );
}

