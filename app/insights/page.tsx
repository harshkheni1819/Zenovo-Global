import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Xenovo Global",
  description: "Latest insights from Xenovo Global.",
};

export default function InsightsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold">
        Insights
      </h1>

      <div className="mt-10 space-y-6">
        <article className="rounded-xl border p-6">
          <h2 className="text-2xl font-semibold">
            Future of AI Recruitment
          </h2>

          <p className="mt-4 text-slate-600">
            Discover how artificial intelligence is transforming hiring.
          </p>
        </article>

        <article className="rounded-xl border p-6">
          <h2 className="text-2xl font-semibold">
            Top Hiring Trends in 2026
          </h2>

          <p className="mt-4 text-slate-600">
            Explore the latest recruitment trends shaping global talent acquisition.
          </p>
        </article>
      </div>
    </main>
  );
}