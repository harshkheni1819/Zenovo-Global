"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Clock3,
  Globe2,
  BrainCircuit,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";

const features = [
  {
    icon: Users,
    title: "People-First Approach",
    description:
      "We focus on building meaningful relationships with organizations and professionals to create long-term success.",
  },
  {
    icon: BrainCircuit,
    title: "Technology Expertise",
    description:
      "Deep understanding of modern technologies, digital transformation, cloud platforms, AI, cybersecurity, and enterprise systems.",
  },
  {
    icon: Clock3,
    title: "Faster Delivery",
    description:
      "Streamlined processes help organizations build high-performing teams efficiently without compromising quality.",
  },
  {
    icon: Globe2,
    title: "Nationwide Reach",
    description:
      "Supporting organizations across the United States with scalable workforce solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Partnership",
    description:
      "Transparent communication, long-term collaboration, and measurable business outcomes are at the center of everything we do.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Helping organizations accelerate innovation through exceptional technology professionals.",
  },
];

export default function WhyXenovo() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <SectionTitle
          badge="Why Xenovo Global"
          title="A Strategic Partner For Modern Organizations"
          subtitle="We help organizations build future-ready technology teams through expertise, innovation, and a people-first approach."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}