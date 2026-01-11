// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";
import { MapPin, Github, Linkedin, Mail, FileText, Instagram } from "lucide-react";
import { aboutData } from "../../data/about";
import { siteConfig } from "../../data/config";
import { SlideUp, StaggerContainer, StaggerItem } from "../components/animations";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About",
  description: `About ${siteConfig.name}`,
};

export default function AboutPage() {
  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Heading + one-liner summary */}
      <SlideUp>
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">About</h1>
        <p className="text-zinc-400 max-w-3xl">
          Recent Grad | NYU | AI/ML | Backend | Cloud | Coffee | NBA | Anime | Problem Solving
        </p>
      </SlideUp>

      {/* Divider (to mirror the Skills page) */}
      <div className="border-t border-zinc-800 mt-8 pt-12" />

      {/* Tile grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

       {/* Photo tile (no cropping, respects original aspect ratio) */}
        <StaggerItem>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-3 flex items-center justify-center">
          <div className="w-full max-w-[280px] md:max-w-[380px]">
            <Image
              src="/headshot.png"
              alt="Sachet Ranjan Bisi"
              width={900}          // any portrait dimensions matching your photo
              height={1125}        // keeps the ratio; Next.js will size down responsively
              className="w-full h-auto rounded-lg"
              priority
              sizes="(max-width: 768px) 280px, 380px"
            />
          </div>
          </div>
        </StaggerItem>

        {/* Bio tile (spans 2 columns on large screens) */}
        <StaggerItem>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 lg:col-span-2">
          <h2 className="text-xl font-semibold text-white mb-3">Who I am</h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            {aboutData.bio.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          </div>
        </StaggerItem>

        {/* Resume tile */}
        <StaggerItem>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-white font-medium mb-2">{aboutData.resume.title}</h3>
            <p className="text-sm text-zinc-400">
              {aboutData.resume.description}
            </p>
          </div>
          <a
            href={aboutData.resume.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900 transition"
          >
            <FileText className="w-4 h-4" />
            Download Résumé
          </a>
          </div>
        </StaggerItem>

        {/* Location tile */}
        <StaggerItem>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6">
          <h3 className="text-white font-medium mb-2">Location</h3>
          <p className="text-zinc-300 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-zinc-400" /> {aboutData.location.city}, {aboutData.location.country}
          </p>
          </div>
        </StaggerItem>

        {/* GitHub tile */}
        <StaggerItem>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6">
          <h3 className="text-white font-medium mb-2">GitHub</h3>
          <Link
            href={siteConfig.github}
            target="_blank"
            className="text-zinc-300 underline inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4 text-zinc-400" />
            Sachet-17
          </Link>
          </div>
        </StaggerItem>

        {/* LinkedIn tile */}
        <StaggerItem>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6">
          <h3 className="text-white font-medium mb-2">LinkedIn</h3>
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            className="text-zinc-300 underline inline-flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4 text-zinc-400" />
            sachetbisi
          </Link>
          </div>
        </StaggerItem>

        {/* Email tile */}
        <StaggerItem>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6">
          <h3 className="text-white font-medium mb-2">Email</h3>
          <Link href={`mailto:${siteConfig.email}`} className="text-zinc-300 underline inline-flex items-center gap-2">
            <Mail className="w-4 h-4 text-zinc-400" />
            {siteConfig.email}
          </Link>
          </div>
        </StaggerItem>

        {/* Instagram tile */}
        <StaggerItem>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6">
          <h3 className="text-white font-medium mb-2">Instagram</h3>
          <Link 
            href={siteConfig.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-300 underline inline-flex items-center gap-2"
          >
            <Instagram className="w-4 h-4 text-zinc-400" />
            @sachet_17
          </Link>
          </div>
        </StaggerItem>

        {/* Interests tile (full width on large screens) */}
        <StaggerItem>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 lg:col-span-3">
          <h3 className="text-white font-medium mb-3">Interests & Focus</h3>
          <ul className="list-disc pl-5 space-y-2 text-zinc-300">
            {aboutData.interests.map((interest, i) => (
              <li key={i}>
                <strong>{interest.title}</strong> – {interest.description}
              </li>
            ))}
          </ul>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </main>
  );
}