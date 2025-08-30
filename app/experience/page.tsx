// app/experience/page.tsx
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Experience",
  description: "Work experience — Sachet Ranjan Bisi",
};

export default function ExperiencePage() {
  return (
    <main className={`${inter.className} mx-auto max-w-5xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Page Heading */}
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
        Experience
      </h1>
      <p className="text-zinc-400 max-w-3xl mb-12">
        Hands-on experience across backend engineering, API integrations,
        testing, and hardware prototyping — focused on performance,
        reliability, and building production-ready solutions.
      </p>

      {/* Divider */}
      <div className="border-t border-zinc-800 mb-12" />

      {/* Experience List */}
      <section className="space-y-12 text-zinc-300">
        {/* ViaBot */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="text-xl font-semibold text-white">
              Software Engineer Intern — ViaBot
            </h2>
            <span className="text-sm text-zinc-400">May 2024 – Aug 2024 | Remote</span>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Refined server-side components with Spring Boot, boosting system throughput by 60% and reducing latency by 75%.
            </li>
            <li>
              Built Python automation scripts for data migration, reducing execution time by 30% and minimizing errors.
            </li>
            <li>
              Integrated RESTful APIs with three major third-party platforms, cutting integration time by 40% and improving feature development cycles.
            </li>
            <li>
              Led unit and integration testing with JUnit and PyTest, achieving ~95% coverage and reducing bug rates by 35%.
            </li>
            <li>
              Collaborated in Agile sprints with cross-functional teams to accelerate deployment timelines by 20%.
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800" />

        {/* UIC */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="text-xl font-semibold text-white">
              Computer Engineering Intern — University of Illinois at Chicago
            </h2>
            <span className="text-sm text-zinc-400">May 2022 – Dec 2022 | Chicago, IL</span>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Engineered circuit designs for an IR thermal camera using Fritzing, enabling precise wiring and seamless hardware integration.
            </li>
            <li>
              Assembled and aligned components with a custom 3D-printed shutter on a perma-proto breadboard through precision soldering.
            </li>
            <li>
              Partnered with a 5-member team to identify and resolve circuit issues, increasing system reliability by 30%.
            </li>
            <li>
              Contributed to prototype optimization by pinpointing design faults, reducing production errors and improving effectiveness.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}