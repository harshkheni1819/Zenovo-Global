import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Xenova Global",
  description: "Contact Xenova Global.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold">
        Contact <span className="text-blue-600">Us</span>
      </h1>

      <p className="mt-8 text-lg text-slate-600">
        Email: Xenova.global2215@gmail.com
      </p>

      <p className="mt-2 text-lg text-slate-600">
        Phone: +1 4843174060
      </p>

      <p className="mt-2 text-lg text-slate-600">
        United Kingdom • Global
      </p>
    </main>
  );
}