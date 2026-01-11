// app/education/page.tsx
import Image from "next/image";
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { schools } from "../../data/education";
import { siteConfig } from "../../data/config";
import { SlideUp, StaggerContainer, StaggerItem } from "../components/animations";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Education",
  description: `Education — ${siteConfig.name}`,
};

// Allow a global logo size override via /education?logo=200
export default function EducationPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const logoParam = Array.isArray(searchParams.logo) ? searchParams.logo[0] : searchParams.logo;
  const parsed = Number(logoParam);
  const defaultLogoPx =
    Number.isFinite(parsed) && parsed! >= 24 && parsed! <= 256 ? parsed! : 60;

  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Heading */}
      <SlideUp>
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
          Education
        </h1>
        <p className="text-zinc-400 max-w-3xl">
          A blend of academic rigor and practical projects across computer
          engineering, AI/ML, and earlier foundational schooling.
        </p>
      </SlideUp>

      {/* Divider */}
      <div className="border-t border-zinc-800 mt-8 pt-12" />

      {/* Card grid */}
      <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
        {schools.map((s) => {
          const px = s.logoSize ?? defaultLogoPx;
          return (
            <StaggerItem key={s.id}>
              <Card>
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
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </main>
  );
}