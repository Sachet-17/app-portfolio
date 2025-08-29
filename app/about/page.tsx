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
            src="/headshots.jpg" // file must be at /public/photo.jpg
            alt="Sachet Ranjan Bisi"
            width={320}
            height={320}
            className="object-cover object-top w-80 h-80"
            priority
          />
        </div>

        {/* Bio + actions + quick facts */}
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            I’m Sachet Bisi, a Computer Engineering graduate from NYU with hands-on
            experience in software development, backend engineering, and AI/ML model
            deployment. I’ve built scalable APIs, optimized backend systems for high
            performance, and deployed intelligent applications across cloud platforms
            like AWS, GCP, and Azure. Passionate about AI/ML and cloud-native systems,
            I’m seeking full-time opportunities as a Software Engineer, AI/ML Engineer,
            or Backend Developer to create impactful, production-ready solutions.
          </p>

          {/* Actions */}
          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="/Sachet%20Ranjan%20Bisi%20Resume.pdf" // ✅ exact file path in /public
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
        <h2 className="text-xl font-medium mb-4">Interests & Focus</h2>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>
            <strong>Tech Enthusiast</strong> – Always exploring AI/ML, cloud-native systems,
            and emerging tools.
          </li>
          <li>
            <strong>Basketball (NBA)</strong> – Love following the game and analyzing plays.
          </li>
          <li>
            <strong>Anime & TV</strong> – Big fan of immersive storytelling and creative worlds.
          </li>
          <li>
            <strong>Content Consumer</strong> – Constantly learning through podcasts, videos,
            and online communities.
          </li>
          <li>
            <strong>Creative Problem-Solving</strong> – Enjoy experimenting with new ideas
            that blend tech and creativity.
          </li>
        </ul>
      </section>
    </main>
  );
}
