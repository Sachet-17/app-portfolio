import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";
import { Navigation } from "../components/nav";

export const metadata = {
  title: "About",
  description: "About Sachet Ranjan Bisi",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Top navigation */}
      <Navigation />

      <h1 className="text-3xl font-semibold mb-8 mt-16">About</h1>

      {/* Photo + Bio */}
      <div className="grid gap-10 md:grid-cols-[auto,1fr] items-start">
        {/* Photo */}
        <div className="w-80 h-80 overflow-hidden rounded-2xl border border-zinc-800">
          <Image
            src="/headshot.jpg" // file must be at /public/photo.jpg
            alt="Sachet Ranjan Bisi"
            width={224}
            height={224}
            className="object-cover w-80 h-80"
            priority
          />
        </div>

        {/* Bio + actions + quick facts */}
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            I’m a Computer Engineer with a love for AI/ML—always chasing ideas that can
            become useful in the real world. I enjoy building projects that make a
            difference, especially ML-powered apps, scalable APIs, and clean UIs.
          </p>
          <p>
            Recently, I’ve been working on pipelines that combine OCR and ASR with LLMs
            for medication verification, and deploying inference services with good
            observability and latency.
          </p>

          {/* Actions */}
          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="/Sachet%20Ranjan%20Bisi%20Resume.pdf" // or rename to /public/Sachet-Resume.pdf and change to "/Sachet-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900"
            >
              <FileText className="w-4 h-4" />
              Download Résumé
            </a>
          </div>

          {/* Quick facts */}
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            <li className="flex items-center gap-2 text-zinc-400">
              <MapPin className="w-4 h-4" />
              New York, USA
            </li>
            <li className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <Link
                href="https://github.com/Sachet-17"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Sachet-17
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <Link
                href="https://www.linkedin.com/in/sachetbisi/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                sachetbisi
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <Link href="mailto:sb9229@nyu.edu" className="underline">
                sb9229@nyu.edu
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Interests / Focus */}
      <section className="mt-16">
        <h2 className="text-xl font-medium mb-4">Interests</h2>
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            "LLMs",
            "Computer Vision",
            "MLOps",
            "FastAPI / Django",
            "React / Next.js",
            "Distributed Systems",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-800 px-3 py-1 text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* What I'm doing now */}
      <section className="mt-16">
        <h2 className="text-xl font-medium mb-4">Currently</h2>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>
            Building an LLM-powered medication verification system (OCR + ASR + validation).
          </li>
          <li>Exploring deployment patterns and observability for ML APIs.</li>
        </ul>
      </section>
    </main>
  );
}
