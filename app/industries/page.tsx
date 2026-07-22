import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | Xenovo Global",
  description: "Industries served by Xenovo Global.",
};

export default function IndustriesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold">
        Industries
      </h1>

      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        <li>Information Technology</li>
        <li>Healthcare</li>
        <li>Finance</li>
        <li>Education</li>
        <li>E-Commerce</li>
        <li>Manufacturing</li>
      </ul>
    </main>
  );
}