// app/contact/page.tsx
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";
import { Mail } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contact",
  description: "Contact — Sachet Ranjan Bisi",
};

export default function ContactPage() {
  return (
    <main className={`${inter.className} mx-auto max-w-5xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Heading */}
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
        Contact
      </h1>
      <p className="text-zinc-400 max-w-3xl">
        I’d love to connect! Whether it’s about opportunities, collaborations, or just to say hi,
        feel free to reach out.
      </p>

      {/* Divider */}
      <div className="border-t border-zinc-800 mt-8 pt-12" />

      {/* Contact action */}
      <section className="flex flex-col items-center gap-6">
        <a
          href="mailto:sb9229@nyu.edu"
          className="inline-flex items-center gap-3 rounded-lg border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-lg text-zinc-100 hover:bg-zinc-900 hover:border-zinc-400 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-600"
        >
          <Mail className="h-5 w-5" />
          sb9229@nyu.edu
        </a>
        <p className="text-sm text-zinc-500">
          Click the button above to open your default email app.
        </p>
      </section>
    </main>
  );
}