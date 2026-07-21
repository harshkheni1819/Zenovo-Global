import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology | Zenovo Global",
  description: "Technology solutions offered by Zenovo Global.",
};

export default function TechnologyPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold">
        Technology
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          "Artificial Intelligence",
          "Cloud Computing",
          "Cyber Security",
          "Web Development",
          "Mobile Development",
          "Data Analytics",
        ].map((item) => (
          <div
            key={item}
            className="rounded-xl border p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">
              {item}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}