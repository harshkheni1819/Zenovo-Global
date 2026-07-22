"use client";

import Link from "next/link";

export default function ServiceCTA() {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Grow Your Business?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-blue-100">
          Let Xenovo Global connect you with top talent and world-class
          technology solutions.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <Link
            href="/contact"
            className="rounded-xl bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            Contact Us
          </Link>

          <Link
            href="/register"
            className="rounded-xl border border-white px-8 py-3 font-semibold transition hover:bg-white hover:text-blue-600"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}