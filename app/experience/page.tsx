// app/experience/page.tsx
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { roles } from "../../data/experience";
import { siteConfig } from "../../data/config";
import { SlideUp, StaggerContainer, StaggerItem, Reveal } from "../components/animations";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Experience",
  description: `Work experience — ${siteConfig.name}`,
};

export default function ExperiencePage() {
  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Heading + summary (matches your other pages) */}
      <SlideUp>
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Experience</h1>
        <p className="text-zinc-400 max-w-3xl">
          Backend engineering, API integrations, testing, and hardware prototyping—focused on
          performance, reliability, and shipping production-ready features.
        </p>
      </SlideUp>

      {/* Divider */}
      <div className="border-t border-zinc-800 mt-8 pt-12" />

      {/* Contacts-style card grid */}
      <Reveal delay={0.1}>
        <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
        {roles.map((r) => (
          <StaggerItem key={r.id}>
            <Card>
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
          </StaggerItem>
        ))}
        </StaggerContainer>
      </Reveal>
    </main>
  );
}