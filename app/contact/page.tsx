import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Zenovo Global",
  description: "Contact Zenovo Global.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold">
        Contact <span className="text-blue-600">Us</span>
      </h1>

      <p className="mt-8 text-lg text-slate-600">
        Email: support@zenovoglobal.com
      </p>

      <p className="mt-2 text-lg text-slate-600">
        Phone: +91 XXXXX XXXXX
      </p>

      <p className="mt-2 text-lg text-slate-600">
        India • United Kingdom • Global
      </p>
    </main>
  );
}