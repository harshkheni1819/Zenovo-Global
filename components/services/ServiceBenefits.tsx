"use client";

import { CheckCircle } from "lucide-react";

interface ServiceBenefitsProps {
  benefits: string[];
}

export default function ServiceBenefits({
  benefits,
}: ServiceBenefitsProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Key Benefits
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-4 rounded-xl border p-6"
            >
              <CheckCircle className="mt-1 text-blue-600" />

              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}