import Image from "next/image";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";

const Typing = dynamic(() => import("../components/typing"), { ssr: false });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Education",
  description: "Education background of Sachet Ranjan Bisi",
};

const education = [
  {
    school: "New York University",
    period: "September 2023 - May 2025",
    degree: "Master of Science in Computer Engineering",
    location: "New York City, NY",
    logo: "/nyu.png",
    courses: ["Machine Learning", "Artificial Intelligence", "Internet Protocols", "Network Security"],
  },
  {
    school: "University of Illinois",
    period: "August 2019 - May 2023",
    degree: "Bachelor of Science in Computer Engineering",
    location: "Chicago, IL",
    logo: "/uic.png",
    courses: ["Data Structures", "Computer Vision", "Systems Programming", "Computer Architecture"],
  },
];

export default function EducationPage() {
  return (
    <main className={`${inter.className} mx-auto max-w-5xl px-6 pt-32 pb-16`}>
      {/* Top navigation */}
      <Navigation />

      {/* Page heading */}
      <header className="mb-16 text-left">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Education</h1>
        <p className="mt-3 text-lg text-zinc-400">
          My academic journey and the courses that shaped my career in Computer Engineering.
        </p>
      </header>

      {/* Timeline style education section */}
      <section className="relative mt-12">
        {/* Vertical timeline line */}
        <span className="hidden md:block absolute left-5 top-0 bottom-0 w-px bg-zinc-800" aria-hidden="true" />

        <div className="space-y-16">
          {education.map((edu, i) => (
            <div key={edu.school} className="relative md:pl-12">
              {/* Timeline dot */}
              <span className="hidden md:block absolute left-5 top-6 w-3 h-3 rounded-full bg-zinc-500 border border-zinc-900" />

              {/* Card */}
              <div
                className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 
                hover:border-zinc-700 hover:bg-zinc-900/60 hover:translate-y-0.5 
                hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition duration-300"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={edu.logo}
                    alt={edu.school}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain rounded-lg bg-zinc-800 p-2"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-zinc-200">{edu.school}</h3>
                    <p className="text-zinc-400">{edu.degree}</p>
                    <p className="text-zinc-500 text-sm">
                      {edu.period} • {edu.location}
                    </p>
                  </div>
                </div>

                {/* Courses */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 rounded-lg border border-zinc-700 text-xs text-zinc-300 bg-zinc-900/30 hover:bg-zinc-800/60 transition"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}