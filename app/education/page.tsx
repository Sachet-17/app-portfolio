// app/education/page.tsx
import Image from "next/image";
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Education",
  description: "Education — Sachet Ranjan Bisi",
};

type School = {
  degree: string;
  university: string;
  location: string;
  dates: string;
  coursework: string[];
  logo: string;        // path under /public, e.g. "edu/nyu.png"
  logoSize?: number;   // OPTIONAL per-card override in px
};

const schools: School[] = [
  {
    degree: "Master of Science in Computer Engineering",
    university: "New York University",
    location: "New York, NY",
    dates: "Sep 2023 – May 2025",
    coursework: [
      "Machine Learning",
      "Artificial Intelligence",
      "Internet Protocols",
      "Network Security",
    ],
    logo: "edu/nyu.png",
    logoSize: 200, // uncomment to force a per-card size
  },
  {
    degree: "Bachelor of Science in Computer Engineering",
    university: "University of Illinois at Chicago",
    location: "Chicago, IL",
    dates: "Aug 2019 – May 2023",
    coursework: [
      "Data Structures",
      "Computer Vision",
      "Systems Programming",
      "Computer Architecture",
    ],
    logo: "edu/uic.png",
    logoSize: 200,
  },
  {
    degree: "IBDP & IGCSE (Grade 9–12)",
    university: "Indus International School",
    location: "Hyderabad, India",
    dates: "Aug 2015 – May 2019",
    coursework: [
      "Computer Science HL",
      "Business HL",
      "Maths HL",
      "Physics SL",
      "English SL",
      "Hindi SL",
    ],
    logo: "edu/indus2.png",
    logoSize: 200,
  },
  {
    degree: "CBSE (Grade 1–8)",
    university: "Seven Hills Residential School",
    location: "India",
    dates: "Until May 2015",
    coursework: ["General Curriculum"],
    logo: "edu/sevenhills.png",
    logoSize: 200,
  },
];

// Allow a global logo size override via /education?logo=200
export default function EducationPage({
  searchParams,
}: {
  searchParams?: { logo?: string };
}) {
  const parsed = Number(searchParams?.logo);
  const defaultLogoPx =
    Number.isFinite(parsed) && parsed! >= 24 && parsed! <= 256 ? parsed! : 60;

  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Heading */}
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
        Education
      </h1>
      <p className="text-zinc-400 max-w-3xl">
        A blend of academic rigor and practical projects across computer
        engineering, AI/ML, and earlier foundational schooling.
      </p>

      {/* Divider */}
      <div className="border-t border-zinc-800 mt-8 pt-12" />

      {/* Card grid */}
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
        {schools.map((s) => {
          const px = s.logoSize ?? defaultLogoPx;
          return (
            <Card key={s.university}>
              <div className="p-4 relative flex flex-col gap-4 duration-700 group md:gap-6 md:py-8 md:px-8">
                {/* icon + logo side by side */}
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

                {/* degree + uni */}
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

                {/* coursework */}
                <ul className="z-10 mt-2 list-disc pl-5 space-y-1 text-zinc-300 text-sm">
                  {s.coursework.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </Card>
          );
        })}
      </section>
    </main>
  );
}