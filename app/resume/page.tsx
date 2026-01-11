// app/resume/page.tsx
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Resume",
  description: "Resume — Sachet Ranjan Bisi",
};

export default function ResumePage() {
  // file must be in /public with this exact name (spaces included)
  const pdfPath = "/Sachet%20Ranjan%20Bisi%20Resume.pdf";

  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Heading */}
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Resume</h1>
      <p className="text-zinc-400 mb-6">
        View my résumé below. You can also download it for later.
      </p>
      
      {/* Divider */}
      <div className="border-t border-zinc-800 mb-12" />
      
      {/* Actions */}
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

      {/* PDF embed */}
      <div className="w-full h-[80vh] border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900">
        <iframe
          src={pdfPath}
          title="Sachet Ranjan Bisi Resume"
          className="w-full h-full"
        />
      </div>

      {/* Fallback note */}
      <p className="mt-3 text-xs text-zinc-500">
        If the PDF doesn’t render, use “Open in new tab” or “Download PDF”.
      </p>
    </main>
  );
}