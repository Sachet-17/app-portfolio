// app/not-found.tsx
import Link from "next/link";
import { Inter } from "next/font/google";
import { Navigation } from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <main
      className={`${inter.className} relative flex min-h-screen flex-col items-center justify-center bg-black px-6`}
    >
      {/* Top Navigation */}
      <Navigation />

      {/* Content */}
      <div className="flex flex-col items-center justify-center text-center mt-32 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white">404</h1>
        <p className="text-zinc-400">Oops! The page you’re looking for doesn’t exist.</p>
        <Link
          href="/"
          className="rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-900 transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}