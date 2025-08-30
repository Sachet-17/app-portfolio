// app/education/page.tsx
import { Navigation } from "../components/nav";

export const metadata = {
  title: "Education",
  description: "Education — Sachet Ranjan Bisi",
};

export default function EducationPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-32 pb-16">
      <Navigation />
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Education</h1>
      <p className="text-zinc-400">Route works ✅ — now we can paste the full UI.</p>
    </main>
  );
}