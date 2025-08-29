import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "About — Sachet Bisi",
  description: "About Sachet Ranjan Bisi",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold mb-8">About</h1>

      {/* Photo + Bio */}
      <div className="grid gap-10 md:grid-cols-[224px,1fr] items-start">
        {/* Photo */}
        <div className="relative w-56 h-56 overflow-hidden rounded-2xl border border-zinc-800">
          <Image
            src="/images/photo.jpg" // <-- change if you used a different filename
            alt="Sachet Ranjan Bisi"
            fill
            sizes="224px"
            className="object-cover"
            priority
          />
        </div>

        {/* Bio */}
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

          {/* Quick facts */}
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            <li className="flex items-center gap-2 text-zinc-400">
              <MapPin className="w-4 h-4" />
              New York, USA
            </li>
            <li className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <Link href="https://github.com/Sachet-17" target="_blank" className="underline">
                Sachet-17
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <Link
                href="https://www.linkedin.com/in/sachetbisi/"
                target="_blank"
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

      {/* Optional: what I’m doing now */}
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
