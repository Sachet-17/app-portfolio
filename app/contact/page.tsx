// app/contact/page.tsx
import { Inter } from "next/font/google";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";
import { Reveal, SlideUp } from "../components/animations";
import { ContactForm } from "../components/contact-form";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contact",
  description: "Contact — Sachet Ranjan Bisi",
};

export default function ContactPage() {
  return (
    <main className={`${inter.className} mx-auto w-full max-w-5xl px-6 pt-32 pb-16`}>
      <Navigation />

      {/* Heading */}
      <SlideUp>
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Contact</h1>
        <p className="text-zinc-400 max-w-3xl">
          Have a question or want to work together? Fill out the form below and I'll get back to you soon.
        </p>
      </SlideUp>

      {/* Divider */}
      <div className="border-t border-zinc-800 mt-8 pt-12" />

      {/* Two-column layout */}
      <Reveal delay={0.1}>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left: Contact Form */}
        <Card>
          <div className="p-5 md:p-8">
            <ContactForm />
          </div>
        </Card>

        {/* Right: Extra info */}
        <Card>
          <div className="p-5 md:p-8 space-y-4">
            <h2 className="text-lg font-medium">What happens next?</h2>
            <p className="text-zinc-400">
              Your message lands in my inbox and I usually reply within 24–48 hours on weekdays.
            </p>

            <div className="border-t border-zinc-800 my-4" />

            <h3 className="text-sm uppercase tracking-wide text-zinc-500">Prefer email?</h3>
            <p className="text-zinc-400">
              Email me directly at{" "}
              <a href="mailto:sb9229@nyu.edu" className="underline hover:text-zinc-200">
                sb9229@nyu.edu
              </a>
              .
            </p>

            <div className="border-t border-zinc-800 my-4" />

            <h3 className="text-sm uppercase tracking-wide text-zinc-500">Connect</h3>
            <ul className="space-y-2 text-zinc-300">
              <li>
                LinkedIn —{" "}
                <Link
                  href="https://www.linkedin.com/in/sachetbisi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-zinc-200"
                >
                  sachetbisi
                </Link>
              </li>
              <li>
                GitHub —{" "}
                <Link
                  href="https://github.com/Sachet-17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-zinc-200"
                >
                  Sachet-17
                </Link>
              </li>
              <li>
                Instagram —{" "}
                <Link
                  href="https://www.instagram.com/sachet_17/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-zinc-200"
                >
                  @sachet_17
                </Link>
              </li>
            </ul>

          </div>
        </Card>
        </section>
      </Reveal>
    </main>
  );
}