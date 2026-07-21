"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Shield,
  Cpu,
  Smartphone,
  Globe,
  BrainCircuit,
  Server,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const technologies = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "AWS • Azure • Google Cloud",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "MongoDB • PostgreSQL • SQL Server",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description: "Machine Learning • Gen AI • LLM",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Security • IAM • SOC • Compliance",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Android • iOS • Flutter • React Native",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "React • Next.js • Angular • Vue",
  },
  {
    icon: Server,
    title: "DevOps",
    description: "Docker • Kubernetes • CI/CD",
  },
  {
    icon: Cpu,
    title: "Enterprise Platforms",
    description: "SAP • Salesforce • Microsoft",
  },
];

export default function TechnologyExpertise() {
  return (
    <section className="bg-white py-28">
      <Container>
        <SectionTitle
          badge="Technology Expertise"
          title="Supporting Modern Digital Transformation"
          subtitle="Our expertise spans today's most in-demand technologies, enabling organizations to build innovative digital products and scalable enterprise solutions."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">
                <tech.icon
                  className="text-blue-600 group-hover:text-white"
                  size={30}
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {tech.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}