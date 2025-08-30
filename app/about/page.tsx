// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";
import { MapPin, Github, Linkedin, Mail, FileText } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About",
  description: "About Sachet Ranjan Bisi",
};

export default function AboutPage() {
  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Heading + one-liner summary */}
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">About</h1>
      <p className="text-zinc-400 max-w-3xl">
        Computer Engineering grad (NYU) building scalable backends and ML-powered apps across AWS, GCP, and Azure.
        I focus on clean APIs, reliable infra, and shipping production-ready features.
      </p>

      {/* Divider (to mirror the Skills page) */}
      <div className="border-t border-zinc-800 mt-8 pt-12" />

      {/* Tile grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Photo tile */}
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-3 flex items-center justify-center">
          <div className="relative w-full aspect-square max-h-[360px]">
            <Image
              src="/headshots.jpg"
              alt="Sachet Ranjan Bisi"
              fill
              className="object-cover object-top rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Bio tile (spans 2 columns on large screens) */}
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 lg:col-span-2">
          <h2 className="text-xl font-semibold text-white mb-3">Who I am</h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>
              I’m Sachet Bisi, a Computer Engineering graduate from NYU with hands-on experience in software
              development, backend engineering, and AI/ML model deployment. I’ve built scalable APIs, optimized
              backend systems for high performance, and deployed intelligent applications across cloud platforms like
              AWS, GCP, and Azure.
            </p>
            <p>
              I’m seeking full-time opportunities as a Software Engineer, AI/ML Engineer, or Backend Developer to
              create impactful, production-ready solutions.
            </p>
          </div>
        </div>

        {/* Resume tile */}
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-white font-medium mb-2">Résumé</h3>
            <p className="text-sm text-zinc-400">
              PDF download with experience, projects, and skills.
            </p>
          </div>
          <a
            href="/Sachet%20Ranjan%20Bisi%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900 transition"
          >
            <FileText className="w-4 h-4" />
            Download Résumé
          </a>
        </div>

        {/* Location tile */}
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6">
          <h3 className="text-white font-medium mb-2">Location</h3>
          <p className="text-zinc-300 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-zinc-400" /> New York, USA
          </p>
        </div>

        {/* GitHub tile */}
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6">
          <h3 className="text-white font-medium mb-2">GitHub</h3>
          <Link
            href="https://github.com/Sachet-17"
            target="_blank"
            className="text-zinc-300 underline inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4 text-zinc-400" />
            Sachet-17
          </Link>
        </div>

        {/* LinkedIn tile */}
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6">
          <h3 className="text-white font-medium mb-2">LinkedIn</h3>
          <Link
            href="https://www.linkedin.com/in/sachetbisi/"
            target="_blank"
            className="text-zinc-300 underline inline-flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4 text-zinc-400" />
            sachetbisi
          </Link>
        </div>

        {/* Email tile */}
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6">
          <h3 className="text-white font-medium mb-2">Email</h3>
          <Link href="mailto:sb9229@nyu.edu" className="text-zinc-300 underline inline-flex items-center gap-2">
            <Mail className="w-4 h-4 text-zinc-400" />
            sb9229@nyu.edu
          </Link>
        </div>

        {/* Interests tile (full width on large screens) */}
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 lg:col-span-3">
          <h3 className="text-white font-medium mb-3">Interests & Focus</h3>
          <ul className="list-disc pl-5 space-y-2 text-zinc-300">
            <li>
              <strong>Tech Enthusiast</strong> – Always exploring AI/ML, cloud-native systems, and emerging tools.
            </li>
            <li>
              <strong>Basketball (NBA)</strong> – Love following the game and analyzing plays.
            </li>
            <li>
              <strong>Anime & TV</strong> – Big fan of immersive storytelling and creative worlds.
            </li>
            <li>
              <strong>Content Consumer</strong> – Constantly learning through podcasts, videos, and online communities.
            </li>
            <li>
              <strong>Creative Problem-Solving</strong> – Enjoy experimenting with new ideas that blend tech and creativity.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}