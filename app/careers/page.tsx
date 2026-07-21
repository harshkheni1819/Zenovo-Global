import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Zenovo Global",
  description: "Explore careers at Zenovo Global.",
};

export default function CareersPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold">
        Careers
      </h1>

      <p className="mt-8 text-lg text-slate-600">
        Join our growing global team.
      </p>

      <Link
        href="/candidate/jobs"
        className="mt-10 inline-block rounded-xl bg-blue-600 px-8 py-3 text-white"
      >
        View Open Positions
      </Link>
    </main>
  );
}