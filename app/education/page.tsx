// app/education/page.tsx
import Image from "next/image";
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Education",
  description: "Education — Sachet Ranjan Bisi",
};

type School = {
  name: string;
  degree: string;
  location: string;
  dates: string;
  logoSrc: string; // put files in /public/edu/
  coursework: string[];
};

const schools: School[] = [
  {
    name: "New York University",
    degree: "Master of Science — Computer Engineering",
    location: "New York, NY",
    dates: "Sep 2023 – May 2025",
    logoSrc: "/edu/nyu.png",
    coursework: [
      "Machine Learning",
      "Artificial Intelligence",
      "Internet Protocols",
      "Network Security",
    ],
  },
  {
    name: "University of Illinois Chicago",
    degree: "Bachelor of Science — Computer Engineering",
    location: "Chicago, IL",
    dates: "Aug 2019 – May 2023",
    logoSrc: "/edu/uic.png",
    coursework: [
      "Data Structures",
      "Computer Vision",
      "Systems Programming",
      "Computer Architecture",
    ],
  },
];

export default function EducationPage() {
  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-32 pb-16`}>
      <Navigation />

      <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Education</h1>
      <p className="text-zinc-400 max-w-3xl">
        My academic journey has been shaped by curiosity, resilience, and a passion for technology.  
        At <strong>New York University</strong>, I honed my expertise in <em>Computer Engineering</em>, diving deep into <em>Machine Learning, Artificial Intelligence, Internet Protocols, and Network Security</em>.  
        Before that, I earned my <strong>Bachelor’s degree in Computer Engineering from the University of Illinois Chicago</strong>, where I built a strong foundation in <em>Data Structures, Computer Vision, Systems Programming, and Computer Architecture</em>.  
        Together, these experiences gave me both the technical depth and problem-solving mindset to design scalable, secure, and intelligent systems that create real-world impact.
      </p>

      <div className="border-t border-zinc-800 mt-8 pt-12" />

      <section className="space-y-8">
        {schools.map((s) => (
          <article
            key={s.name}
            className="grid grid-cols-1 md:grid-cols-[160px,1fr] gap-6"
          >
            {/* Logo */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 flex items-center justify-center">
              <div className="relative w-28 h-28">
                <Image
                  src={s.logoSrc}
                  alt={`${s.name} logo`}
                  fill
                  className="object-contain"
                  sizes="112px"
                  priority
                />
              </div>
            </div>

            {/* Details */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="text-white text-xl font-semibold">{s.name}</h2>
                <span className="text-sm text-zinc-400">{s.dates}</span>
              </div>
              <p className="text-zinc-300 mt-1">{s.degree}</p>
              <p className="text-zinc-400 text-sm mt-1">{s.location}</p>

              <div className="mt-4">
                <h3 className="text-zinc-200 text-sm font-medium mb-2">
                  Relevant Coursework
                </h3>
                <div className="flex flex-wrap gap-2">
                  {s.coursework.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 rounded-lg border border-zinc-800 text-xs text-zinc-300 bg-zinc-900/30"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}