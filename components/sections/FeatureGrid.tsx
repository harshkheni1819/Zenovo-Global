"use client";

import { Briefcase, Globe, Users, Award } from "lucide-react";

const features = [
  {
    title: "Global Jobs",
    description: "Find thousands of verified jobs worldwide.",
    icon: Globe,
  },
  {
    title: "Top Companies",
    description: "Connect with leading employers.",
    icon: Briefcase,
  },
  {
    title: "Professional Network",
    description: "Build meaningful professional connections.",
    icon: Users,
  },
  {
    title: "Career Growth",
    description: "Advance your career with premium opportunities.",
    icon: Award,
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Why Choose Xenovo Global
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-4">
                  <Icon className="text-blue-600" size={30} />
                </div>

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}