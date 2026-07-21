import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Leadership from "@/components/sections/Leadership";

export default function AboutPage() {
  return (
    <main>
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-28">
        <Container>
          <div className="max-w-4xl">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              ABOUT ZENOVO GLOBAL
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">
              Connecting Great Companies
              <br />
              With Exceptional Technology Professionals
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Zenovo Global partners with organizations to build high-performing
              technology teams while helping professionals discover meaningful
              career opportunities across today's most innovative industries.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button>Partner With Us</Button>

              <button className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:border-blue-600 hover:text-blue-600">
                Explore Opportunities
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= STORY ================= */}

      <section className="bg-white py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="font-semibold uppercase tracking-wider text-blue-600">
                Our Story
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Built Around People,
                <br />
                Powered By Technology
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                At Zenovo Global, we believe successful organizations are built
                by exceptional people. Our goal is to help businesses discover
                talented professionals while creating career opportunities that
                inspire long-term growth.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Through industry knowledge, technology expertise, and a
                relationship-first mindset, we create meaningful partnerships
                that help organizations innovate with confidence.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-10 shadow-sm">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-5xl font-bold text-blue-600">10+</h3>
                  <p className="mt-2 text-slate-600">Years Experience</p>
                </div>

                <div>
                  <h3 className="text-5xl font-bold text-blue-600">500+</h3>
                  <p className="mt-2 text-slate-600">Business Partners</p>
                </div>

                <div>
                  <h3 className="text-5xl font-bold text-blue-600">10K+</h3>
                  <p className="mt-2 text-slate-600">
                    Technology Professionals
                  </p>
                </div>

                <div>
                  <h3 className="text-5xl font-bold text-blue-600">50+</h3>
                  <p className="mt-2 text-slate-600">
                    Technology Specializations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= MISSION ================= */}

      <section className="bg-slate-50 py-24">
        <Container>
          <div className="text-center">
            <span className="font-semibold uppercase tracking-wider text-blue-600">
              Mission & Vision
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Driving Innovation Through Exceptional People
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                To help organizations build high-performing technology teams
                while empowering professionals with meaningful career
                opportunities that create lasting impact.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                To become one of the most trusted global partners for technology
                workforce solutions by connecting innovation with exceptional
                people.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= VALUES ================= */}

      <section className="bg-white py-24">
        <Container>
          <div className="text-center">
            <span className="font-semibold uppercase tracking-wider text-blue-600">
              Our Values
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              The Principles That Guide Us
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Integrity",
                desc: "Building relationships based on trust and transparency.",
              },
              {
                title: "Innovation",
                desc: "Supporting organizations with modern technology expertise.",
              },
              {
                title: "Excellence",
                desc: "Delivering quality through every partnership.",
              },
              {
                title: "People First",
                desc: "Putting people at the center of everything we do.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-100 bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= LEADERSHIP ================= */}

      <Leadership />
    </main>
  );
}