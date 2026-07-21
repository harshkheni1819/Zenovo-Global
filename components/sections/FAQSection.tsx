"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const faqs = [
  {
    question: "How does Zenovo Global support organizations?",
    answer:
      "We help organizations build high-performing technology teams by connecting them with experienced professionals across a wide range of technical domains.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We support organizations in finance, healthcare, retail, manufacturing, government, logistics, telecommunications, and technology sectors.",
  },
  {
    question: "Do you support remote and hybrid teams?",
    answer:
      "Yes. We work with organizations that require on-site, hybrid, remote, and distributed technology teams.",
  },
  {
    question: "Which technologies do you specialize in?",
    answer:
      "Cloud, AI, Data Engineering, Cybersecurity, DevOps, Software Engineering, Enterprise Platforms, Mobile, and Web technologies.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <SectionTitle
          badge="Frequently Asked Questions"
          title="Answers To Common Questions"
          subtitle="Find quick answers about our services and technology expertise."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}