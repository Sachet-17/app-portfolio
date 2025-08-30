// app/experience/page.tsx
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Experience",
  description: "Work experience — Sachet Ranjan Bisi",
};

type Role = {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    title: "Software Engineer Intern",
    company: "ViaBot",
    location: "Remote",
    dates: "May 2024 – Aug 2024",
    bullets: [
      "Refined Spring Boot server-side components → +60% throughput, −75% latency.",
      "Python automation for data migration → −30% execution time, fewer errors.",
      "Integrated RESTful APIs with 3 third-party platforms → −40% integration time.",
      "Unit & integration testing (JUnit, PyTest) → ~95% coverage, −35% bugs.",
      "Agile collaboration across teams → +20% faster deployments.",
    ],
  },
  {
    title: "Computer Engineering Intern",
    company: "University of Illinois at Chicago",
    location: "Chicago, IL",
    dates: "May 2022 – Dec 2022",
    bullets: [
      "Designed IR thermal camera circuits in Fritzing for precise hardware integration.",
      "Assembled components with custom 3D-printed shutter; precision soldering on perma-proto.",
      "Diagnosed & resolved circuit issues in a 5-person team → +30% system reliability.",
      "Optimized prototype by surfacing key design faults → fewer production errors.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Heading + summary (matches your other pages) */}
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Experience</h1>
      <p className="text-zinc-400 max-w-3xl">
        Backend engineering, API integrations, testing, and hardware prototyping—focused on
        performance, reliability, and shipping production-ready features.
      </p>

      {/* Divider */}
      <div className="border-t border-zinc-800 mt-8 pt-12" />

      {/* Contacts-style card grid */}
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
        {roles.map((r) => (
          <Card key={`${r.company}-${r.title}`}>
            <div className="p-4 relative flex flex-col gap-4 duration-700 group md:gap-6 md:py-8 md:px-8">
              
              {/* circle icon (like contacts) */}
              <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                <Briefcase size={20} />
              </span>

              {/* title / meta */}
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

              {/* bullets */}
              <ul className="z-10 mt-2 list-disc pl-5 space-y-2 text-zinc-300">
                {r.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
}