import Link from "next/link";
import Container from "@/components/ui/Container";

const footerLinks = {
  Solutions: [
    {
      name: "Technology Talent",
      href: "/services/technology-talent",
    },
    {
      name: "Flexible Hiring",
      href: "/services/flexible-hiring",
    },
    {
      name: "Executive Search",
      href: "/services/executive-search",
    },
    {
      name: "Workforce Solutions",
      href: "/services/workforce-solutions",
    },
  ],

  Company: [
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Leadership",
      href: "/leadership",
    },
    {
      name: "Careers",
      href: "/careers",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],

  Resources: [
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Insights",
      href: "/insights",
    },
    {
      name: "Case Studies",
      href: "/case-studies",
    },
    {
      name: "FAQs",
      href: "/faqs",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-900 text-white">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}

          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold">
              Zenovo
              <span className="text-blue-400"> Global</span>
            </h2>

            <p className="mt-5 max-w-sm leading-relaxed text-gray-400">
              Connecting organizations with exceptional technology professionals
              through modern talent solutions.
            </p>

            <div className="mt-6 flex gap-4">
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600">
                in
              </div>

              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600">
                X
              </div>

              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600">
                f
              </div>
            </div>
          </div>

          {/* Footer Links */}

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold">{title}</h3>

              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 transition hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}

        <div className="flex flex-col justify-between gap-4 border-t border-slate-700 py-6 text-sm text-gray-400 md:flex-row">
          <p>© 2026 Zenovo Global. All rights reserved.</p>

          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>

            <Link href="/cookie-policy" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}