"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { Card } from "../card";
import { siteConfig } from "../../../data/config";

const inter = Inter({ subsets: ["latin"] });

export function ContactSection() {
  return (
    <section id="contact" className={`${inter.className} mx-auto w-full max-w-5xl px-6 py-32`}>
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Contact</h1>
      <p className="text-zinc-400 max-w-3xl">
        Prefer a quick form? Fill it out below — I'll get an email when you submit.
      </p>

      <div className="border-t border-zinc-800 mt-8 pt-12" />

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
        <Card>
          <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
            <div className="h-10 bg-zinc-900/80 border-b border-zinc-800 px-4 flex items-center">
              <span className="text-xs text-zinc-500">Google Form</span>
            </div>
            <iframe
              src={siteConfig.googleFormUrl}
              width="100%"
              height="720"
              style={{ border: 0 }}
              className="block w-full"
              loading="lazy"
            />
          </div>
        </Card>

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
              <a href={`mailto:${siteConfig.email}`} className="underline hover:text-zinc-200">
                {siteConfig.email}
              </a>
              .
            </p>

            <div className="border-t border-zinc-800 my-4" />

            <h3 className="text-sm uppercase tracking-wide text-zinc-500">Connect</h3>
            <ul className="space-y-2 text-zinc-300">
              <li>
                LinkedIn —{" "}
                <Link
                  href={siteConfig.linkedin}
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
                  href={siteConfig.github}
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
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-zinc-200"
                >
                  @sachet_17
                </Link>
              </li>
            </ul>

            <div className="border-t border-zinc-800 my-4" />

            <p className="text-xs text-zinc-500">
              Note: The embedded form keeps Google's internal styling.
            </p>
          </div>
        </Card>
      </section>
    </section>
  );
}

