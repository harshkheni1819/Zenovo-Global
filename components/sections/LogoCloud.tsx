"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const logos = [
  "React",
  "Next.js",
  "Node.js",
  "AWS",
  "Azure",
  "MongoDB",
  "Docker",
  "Kubernetes",
];

export default function LogoCloud() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Technology Ecosystem
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8"
        >
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-white font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}