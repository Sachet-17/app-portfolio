// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";
import { Navigation } from "../components/nav";

// client-only typing component (you should already have app/components/typing.tsx)
const Typing = dynamic(() => import("../components/typing"), { ssr: false });

// Use Inter on THIS page only (no global changes)
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About",
  description: "About Sachet Ranjan Bisi",
};

export default function AboutPage() {
  return (
    <main className={`${inter.className} mx-auto max-w-5xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Big ABOUT heading (matches Projects style) */}
      <header className="mb-12 text-right">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          ABOUT
        </h1>
      </header>

      {/* Photo + Bio */}
      <div className="grid gap-10 md:grid-cols-[auto,1fr] items-start">
        {/* Photo */}
        <div className="w-80 h-80 overflow-hidden rounded-2xl border border-zinc-800">
          <Image
            src="/headshots.jpg" // ensure /public/headshots.jpg exists (case-sensitive)
            alt="Sachet Ranjan Bisi"
            width={320}
            height={320}
            className="object-cover object-top w-80 h-80"
            priority
          />
        </div>

        {/* Bio + Resume + Links */}
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            I’m Sachet Bisi, a Computer Engineering graduate from NYU with hands-on
            experience in software development, backend engineering, and AI/ML model
            deployment. I’ve built scalable APIs, optimized backend systems for high
            performance, and deployed intelligent applications across cloud platforms
            like AWS, GCP, and Azure.
          </p>
          <p>
            I’m seeking full-time opportunities as a Software Engineer, AI/ML Engineer,
            or Backend Developer to create impactful, production-ready solutions.
          </p>

          {/* Resume button */}
          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="/Sachet%20Ranjan%20Bisi%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900 hover:translate-y-[-1px] transition"
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

      {/* Interests & Focus with looping typing */}
      <section className="mt-20 text-right">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
          <Typing
            words={[
              "INTERESTS & FOCUS",
              "AI/ML",
              "NBA",
              "Anime & TV",
              "Content",
              "Creative Problem-Solving",
            ]}
          />
        </h2>

        <ul className="list-disc pl-5 space-y-2 text-zinc-300 text-left max-w-2xl mx-auto">
          <li><strong>Tech Enthusiast</strong> – Always exploring AI/ML, cloud-native systems, and emerging tools.</li>
          <li><strong>Basketball (NBA)</strong> – Love following the game and analyzing plays.</li>
          <li><strong>Anime & TV</strong> – Big fan of immersive storytelling and creative worlds.</li>
          <li><strong>Content Consumer</strong> – Constantly learning through podcasts, videos, and online communities.</li>
          <li><strong>Creative Problem-Solving</strong> – Enjoy experimenting with new ideas that blend tech and creativity.</li>
        </ul>
      </section>
    </main>
  );
}
