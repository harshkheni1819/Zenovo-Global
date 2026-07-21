import Container from "@/components/ui/Container";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  BriefcaseBusiness,
  Globe,
  Building2,
  LaptopMinimal,
  Network,
} from "lucide-react";

const services = [
  {
    title: "Technology Teams",
    description:
      "Build high-performing technology teams with experienced professionals across modern platforms and emerging technologies.",
    icon: LaptopMinimal,
    href: "/services/technology-teams",
  },
  {
    title: "Flexible Hiring",
    description:
      "Scale your workforce quickly with flexible engagement models that adapt to changing business needs.",
    icon: Users,
    href: "/services/flexible-hiring",
  },
  {
    title: "Permanent Talent",
    description:
      "Connect with professionals ready to make a long-term impact within your organization.",
    icon: BriefcaseBusiness,
    href: "/services/permanent-talent",
  },
  {
    title: "Executive Search",
    description:
      "Identify experienced leaders capable of driving transformation and business growth.",
    icon: Building2,
    href: "/services/executive-search",
  },
  {
    title: "Project Delivery",
    description:
      "Accelerate strategic initiatives with dedicated project teams and specialized expertise.",
    icon: Network,
    href: "/services/project-delivery",
  },
  {
    title: "Global Workforce Solutions",
    description:
      "Expand globally with scalable workforce strategies tailored for growing organizations.",
    icon: Globe,
    href: "/services/global-workforce-solutions",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}

      <section className="bg-white py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              SERVICES
            </span>

            <h1 className="mt-6 text-5xl font-bold text-slate-900 lg:text-6xl">
              Modern Workforce Solutions
              <br />
              For Growing Organizations
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Zenovo Global helps organizations build exceptional technology
              teams through modern workforce solutions designed for startups,
              enterprises, and government organizations.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}

      <section className="bg-slate-50 py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  href={service.href}
                  key={service.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>

                  <h2 className="mt-8 text-2xl font-bold text-slate-900">
                    {service.title}
                  </h2>

                  <p className="mt-5 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 font-semibold text-blue-600">
                    Learn More
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-2" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}