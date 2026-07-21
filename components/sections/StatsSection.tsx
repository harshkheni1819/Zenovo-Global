"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const stats = [
  {
    number: "500+",
    title: "Organizations Supported",
  },
  {
    number: "10K+",
    title: "Technology Professionals",
  },
  {
    number: "2500+",
    title: "Projects Delivered",
  },
  {
    number: "98%",
    title: "Client Satisfaction",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-28">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-5xl font-bold text-blue-600">
                {stat.number}
              </h3>

              <p className="mt-4 text-slate-600">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}