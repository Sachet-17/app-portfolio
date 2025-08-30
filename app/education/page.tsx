import { GraduationCap, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { Navigation } from "../components/nav";

export const metadata = {
  title: "Education",
  description: "Education background of Sachet Bisi",
};

export default function EducationPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pt-32 pb-16">
      <Navigation />

      {/* Heading */}
      <header className="mb-12 text-left">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Education
        </h1>
        <p className="mt-4 text-lg text-zinc-400 max-w-3xl">
          A blend of academic rigor and practical projects across computer
          engineering, AI/ML, and systems design.
        </p>
      </header>

      <hr className="border-zinc-800 mb-12" />

      {/* Education Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* NYU */}
        <div className="rounded-xl border border-zinc-800 p-6 bg-zinc-900/40 hover:bg-zinc-900/60 transition">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-zinc-400" />
            <Image
              src="edu/nyu.png"
              alt="NYU Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-semibold text-zinc-100">
            Master of Science in Computer Engineering
          </h2>
          <p className="text-zinc-400">New York University</p>
          <div className="flex items-center gap-4 text-sm text-zinc-500 mt-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> Sep 2023 – May 2025
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> New York, NY
            </div>
          </div>
          <ul className="mt-4 list-disc list-inside text-zinc-300 space-y-1">
            <li>Machine Learning</li>
            <li>Artificial Intelligence</li>
            <li>Internet Protocols</li>
            <li>Network Security</li>
          </ul>
        </div>

        {/* UIC */}
        <div className="rounded-xl border border-zinc-800 p-6 bg-zinc-900/40 hover:bg-zinc-900/60 transition">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-zinc-400" />
            <Image
              src="edu/uic.png"
              alt="UIC Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-semibold text-zinc-100">
            Bachelor of Science in Computer Engineering
          </h2>
          <p className="text-zinc-400">University of Illinois at Chicago</p>
          <div className="flex items-center gap-4 text-sm text-zinc-500 mt-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> Aug 2019 – May 2023
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Chicago, IL
            </div>
          </div>
          <ul className="mt-4 list-disc list-inside text-zinc-300 space-y-1">
            <li>Data Structures</li>
            <li>Computer Vision</li>
            <li>Systems Programming</li>
            <li>Computer Architecture</li>
          </ul>
        </div>
      </div>
    </main>
  );
}