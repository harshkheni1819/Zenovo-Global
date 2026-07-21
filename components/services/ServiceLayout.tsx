import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

interface ServiceLayoutProps {
  badge: string;
  title: string;
  description: string;
  benefits: string[];
  process: string[];
}

export default function ServiceLayout({
  badge,
  title,
  description,
  benefits,
  process,
}: ServiceLayoutProps) {
  return (
    <main>
      {/* Hero */}

      <section className="bg-gradient-to-b from-white to-slate-50 py-24">
        <Container>
          <div className="max-w-4xl">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              {badge}
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
              {title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              {description}
            </p>

            <div className="mt-10 flex gap-4">
              <Button>Talk To Our Team</Button>

              <Button variant="outline">Explore Opportunities</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}

      <section className="bg-white py-24">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Why Organizations Choose This Solution
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}

      <section className="bg-slate-50 py-24">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Our Delivery Process
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}

      <section className="bg-blue-600 py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="text-5xl font-bold">
              Let's Build Something Exceptional
            </h2>

            <p className="mt-6 text-lg text-blue-100">
              Whether you're growing your team or exploring your next
              opportunity, Zenovo Global is ready to help.
            </p>

            <button className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105">
              Get Started
              <ArrowRight size={20} />
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}