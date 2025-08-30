// app/experience/page.tsx
import Image from "next/image";
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Experience",
  description: "Work experience — Sachet Ranjan Bisi",
};

type Role = {
  company: string;
  role: string;
  location: string;
  dates: string;
  logoSrc: string; // put files in /public/exp/
  bullets: string[];
};

const roles: Role[] = [
  {
    company: "ViaBot",
    role: "Software Engineer Intern",
    location: "Remote",
    dates: "May 2024 – Aug 2024",
    logoSrc: "/exp/viabot.png",
    bullets: [
      "Refined server-side components with Spring Boot, boosting system throughput by 60% and cutting latency by 75%.",
      "Built Python automation scripts for data migration, reducing execution time by 30% and minimizing errors.",
      "Integrated RESTful APIs with 3 major third-party platforms, cutting integration time by 40% and accelerating feature cycles.",
      "Led unit + integration testing with JUnit and PyTest, achieving ~95% coverage and lowering bug rates by 35%.",
      "Collaborated in Agile sprints with cross-functional teams to accelerate deployments by 20%.",
    ],
  },
  {
    company: "University of Illinois at Chicago",
    role: "Computer Engineering Intern",
    location: "Chicago, IL",
    dates: "May 2022 – Dec 2022",
    logoSrc: "/exp/uic.png",
    bullets: [
      "Engineered circuit designs for an IR thermal camera in Fritzing, enabling precise wiring and hardware integration.",
      "Assembled and aligned components with a custom 3D-printed shutter on a perma-proto board through precision soldering.",
      "Partnered with a 5-member team to diagnose and resolve circuit issues, increasing system reliability by 30%.",
      "Improved prototype effectiveness by surfacing key design faults, reducing production errors.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Heading + summary */}
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Experience</h1>
      <p className="text-zinc-400 max-w-3xl">
        Hands-on experience across backend engineering, API integrations, testing, and hardware prototyping—
        focused on performance, reliability, and shipping production-ready features.
      </p>

      {/* Divider */}
      <div className="border-t border-zinc-800 mt-8 pt-12" />

      {/* Roles */}
      <section className="space-y-8">
        {roles.map((r) => (
          <article
            key={r.company}
            className="grid grid-cols-1 md:grid-cols-[220px,1fr] gap-6 items-center"
          >
            {/* Logo (large, responsive) */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 flex items-center justify-center">
              <div className="relative w-40 h-40 md:w-52 md:h-52">
                <Image
                  src={r.logoSrc}
                  alt={`${r.company} logo`}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 208px, 160px"
                  priority
                />
              </div>
            </div>

            {/* Details */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="text-white text-2xl font-semibold">{r.role}</h2>
                <span className="text-sm text-zinc-400">{r.dates}</span>
              </div>
              <p className="text-zinc-300 mt-1">{r.company}</p>
              <p className="text-zinc-400 text-sm">{r.location}</p>

              <ul className="mt-4 space-y-2 text-zinc-300 list-disc pl-5">
                {r.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}