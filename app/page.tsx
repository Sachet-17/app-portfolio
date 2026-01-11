"use client";

// app/page.tsx
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Particles from "./components/particles";
import Spotlight from "./components/spotlight";
import Typing from "./components/typing";
import { Navigation } from "./components/nav";
import { Card } from "./components/card";
import { navigation, socials, siteConfig } from "../data/config";
import { aboutData } from "../data/about";
import { schools } from "../data/education";
import { roles } from "../data/experience";
import { SkillsContent } from "./skills/skills-content";
import { ProjectsContent } from "./projects/projects-content";
import { SlideUp, StaggerContainer, StaggerItem } from "./components/animations";
import { MapPin, Github, Linkedin, Mail, FileText, Instagram, Briefcase, Calendar, GraduationCap } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const roleWords = [
  "AI/ML Engineer",
  "Software Engineer",
  "Backend Developer",
  "Problem Solver",
  "Full Stack Developer",
];

// Helper function for smooth scroll
const scrollToSection = (hash: string) => {
  const targetId = hash.slice(1); // Remove #
  const element = document.getElementById(targetId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// Handle hash on page load
const handleHashOnLoad = () => {
  if (typeof window !== "undefined" && window.location.hash) {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      scrollToSection(window.location.hash);
    }, 100);
  }
};

export default function Home() {
  useEffect(() => {
    handleHashOnLoad();
  }, []);

  const pdfPath = "/Sachet%20Ranjan%20Bisi%20Resume.pdf";
  const GOOGLE_FORM_EMBED_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeCGdSeKWTvZSLkY5_tF7LdsaUbHMVTqrNXra-m1b8B1vKsbg/viewform?usp=dialog";

  return (
    <div className="relative min-h-screen bg-black">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        {/* Background particles */}
        <Spotlight />
        <Particles className="absolute inset-0 -z-10" quantity={80} />

        {/* Top nav */}
        <nav className="mt-16 sm:mt-20 animate-fade-in">
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {navigation.map((item) => {
              const hash = item.href.startsWith("/") ? `#${item.href.slice(1)}` : item.href;
              return (
                <a
                  key={item.href}
                  href={hash}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(hash);
                  }}
                  className="relative text-base sm:text-lg text-zinc-400 hover:text-zinc-200 transition-all duration-300 group cursor-pointer"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-zinc-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              );
            })}
          </ul>
        </nav>

        {/* Glow line */}
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        {/* Hero title */}
        <h1 className="z-10 mt-6 sm:mt-8 px-2 text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-white/90 text-edge-outline animate-title whitespace-nowrap">
          {siteConfig.name}
        </h1>

        {/* Glow line */}
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        {/* Social icons */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-5 sm:gap-7">
          {socials.map(({ name, href, icon: Icon, external }) => (
            <Link
              key={name}
              href={href}
              aria-label={name}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center"
            >
              <span className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/40 text-zinc-300 hover:text-white hover:bg-zinc-900 hover:border-zinc-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 hover:shadow-lg hover:shadow-zinc-500/20">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:scale-110" />
              </span>
              <span className="mt-2 text-[11px] sm:text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">
                {name}
              </span>
            </Link>
          ))}
        </div>
        
        {/* Subtitle with typing effect */}
        <div className="my-10 sm:my-12 text-center animate-fade-in px-4">
          <p className="mx-auto max-w-xl text-sm sm:text-base text-zinc-300 mb-2 font-medium">
            <Typing words={roleWords} speed={100} pause={2000} />
          </p>
          <p className="mx-auto max-w-xl text-xs sm:text-sm text-zinc-500 mt-4">
            building reliable, scalable systems and clean UIs
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`${inter.className} mx-auto max-w-6xl px-6 py-32`}>
        <SlideUp>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">About</h1>
          <p className="text-zinc-400 max-w-3xl">
            Recent Grad | NYU | AI/ML | Backend | Cloud | Coffee | NBA | Anime | Problem Solving
          </p>
        </SlideUp>

        <div className="border-t border-zinc-800 mt-8 pt-12" />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Photo tile */}
          <StaggerItem>
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-3 flex items-center justify-center">
              <div className="w-full max-w-[280px] md:max-w-[380px]">
                <Image
                  src="/headshot.png"
                  alt="Sachet Ranjan Bisi"
                  width={900}
                  height={1125}
                  className="w-full h-auto rounded-lg"
                  priority
                  sizes="(max-width: 768px) 280px, 380px"
                />
              </div>
            </div>
          </StaggerItem>

          {/* Bio tile */}
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

          {/* Interests tile */}
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
      </section>

      {/* Skills Section */}
      <section id="skills" className={`${inter.className} mx-auto max-w-6xl px-6 py-32`}>
        <SlideUp>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Skills</h1>
          <p className="text-zinc-400 max-w-3xl">
            Languages | Databases | Developer Tools | Technologies & Frameworks
          </p>
        </SlideUp>

        <div className="border-t border-zinc-800 mt-8 pt-12" />

        <SkillsContent />
      </section>

      {/* Education Section */}
      <section id="education" className={`${inter.className} mx-auto max-w-6xl px-6 py-32`}>
        <SlideUp>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            Education
          </h1>
          <p className="text-zinc-400 max-w-3xl">
            A blend of academic rigor and practical projects across computer
            engineering, AI/ML, and earlier foundational schooling.
          </p>
        </SlideUp>

        <div className="border-t border-zinc-800 mt-8 pt-12" />

        <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12 mt-8">
          {schools.map((s) => {
            const px = s.logoSize ?? 60;
            return (
              <StaggerItem key={s.id}>
                <Card>
                  <div className="p-4 relative flex flex-col gap-4 duration-700 group md:gap-6 md:py-8 md:px-8">
                    <div className="flex items-center gap-3">
                      <span className="relative z-10 flex items-center justify-center w-14 h-14 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                        <GraduationCap size={20} />
                      </span>
                      <Image
                        src={s.logo}
                        alt={`${s.university} logo`}
                        width={px}
                        height={px}
                        className="rounded-md object-contain"
                        priority
                      />
                    </div>

                    <div className="z-10 mt-2">
                      <h2 className="text-xl font-medium text-zinc-200 group-hover:text-white duration-150">
                        {s.degree}
                      </h2>
                      <p className="mt-1 text-zinc-400">{s.university}</p>

                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {s.dates}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {s.location}
                        </span>
                      </div>
                    </div>

                    <ul className="z-10 mt-2 list-disc pl-5 space-y-1 text-zinc-300 text-sm">
                      {s.coursework.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`${inter.className} mx-auto max-w-6xl px-6 py-32`}>
        <SlideUp>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Experience</h1>
          <p className="text-zinc-400 max-w-3xl">
            Backend engineering, API integrations, testing, and hardware prototyping—focused on
            performance, reliability, and shipping production-ready features.
          </p>
        </SlideUp>

        <div className="border-t border-zinc-800 mt-8 pt-12" />

        <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12 mt-8">
          {roles.map((r) => (
            <StaggerItem key={r.id}>
              <Card>
                <div className="p-4 relative flex flex-col gap-4 duration-700 group md:gap-6 md:py-8 md:px-8">
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    <Briefcase size={20} />
                  </span>

                  <div className="z-10">
                    <h2 className="text-xl font-medium text-zinc-200 group-hover:text-white duration-150">
                      {r.title}
                    </h2>
                    <p className="mt-1 text-zinc-400">
                      {r.company}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {r.dates}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {r.location}
                      </span>
                    </div>
                  </div>

                  <ul className="z-10 mt-2 list-disc pl-5 space-y-2 text-zinc-300">
                    {r.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`${inter.className} mx-auto max-w-6xl px-6 py-32`}>
        <SlideUp>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            Projects
          </h1>
          <p className="text-zinc-400 max-w-3xl">
            A showcase of selected projects that highlight my experience in AI/ML,
            backend systems, and innovative engineering solutions.
          </p>
        </SlideUp>

        <div className="border-t border-zinc-800 mt-8 pt-12" />

        <ProjectsContent />
      </section>

      {/* Resume Section */}
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

      {/* Contact Section */}
      <section id="contact" className={`${inter.className} mx-auto w-full max-w-5xl px-6 py-32`}>
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Contact</h1>
        <p className="text-zinc-400 max-w-3xl">
          Prefer a quick form? Fill it out below — I'll get an email when you submit.
        </p>

        <div className="border-t border-zinc-800 mt-8 pt-12" />

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
          <Card>
            <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <div className="h-10 bg-zinc-900/80 border-b border-zinc-800 px-4 flex items-center">
                <span className="text-xs text-zinc-500">Google Form</span>
              </div>
              <iframe
                src={GOOGLE_FORM_EMBED_URL}
                width="100%"
                height="720"
                style={{ border: 0 }}
                className="block w-full"
                loading="lazy"
              />
            </div>
          </Card>

          <Card>
            <div className="p-5 md:p-8 space-y-4">
              <h2 className="text-lg font-medium">What happens next?</h2>
              <p className="text-zinc-400">
                Your message lands in my inbox and I usually reply within 24–48 hours on weekdays.
              </p>

              <div className="border-t border-zinc-800 my-4" />

              <h3 className="text-sm uppercase tracking-wide text-zinc-500">Prefer email?</h3>
              <p className="text-zinc-400">
                Email me directly at{" "}
                <a href="mailto:sb9229@nyu.edu" className="underline hover:text-zinc-200">
                  sb9229@nyu.edu
                </a>
                .
              </p>

              <div className="border-t border-zinc-800 my-4" />

              <h3 className="text-sm uppercase tracking-wide text-zinc-500">Connect</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>
                  LinkedIn —{" "}
                  <Link
                    href="https://www.linkedin.com/in/sachetbisi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-zinc-200"
                  >
                    sachetbisi
                  </Link>
                </li>
                <li>
                  GitHub —{" "}
                  <Link
                    href="https://github.com/Sachet-17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-zinc-200"
                  >
                    Sachet-17
                  </Link>
                </li>
                <li>
                  Instagram —{" "}
                  <Link
                    href="https://www.instagram.com/sachet_17/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-zinc-200"
                  >
                    @sachet_17
                  </Link>
                </li>
              </ul>

              <div className="border-t border-zinc-800 my-4" />

              <p className="text-xs text-zinc-500">
                Note: The embedded form keeps Google's internal styling.
              </p>
            </div>
          </Card>
        </section>
      </section>
    </div>
  );
}
