import {
  Crown,
  BriefcaseBusiness,
  Cpu,
  ExternalLink,
} from "lucide-react";

const leaders = [
  {
    name: "Hlex Morgan",
    role: "Founder & CEO",
    description:
      "Driving business growth, strategic partnerships, and global innovation for Zenova Global.",
    icon: Crown,
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    name: "Emily Carter",
    role: "Chief Operations Officer",
    description:
      "Leading operations, client success, and ensuring seamless delivery across international projects.",
    icon: BriefcaseBusiness,
    gradient: "from-indigo-600 to-slate-800",
  },
  {
    name: "Daniel Wilson",
    role: "Technology Director",
    description:
      "Architecting scalable software solutions and leading engineering excellence.",
    icon: Cpu,
    gradient: "from-slate-700 to-blue-700",
  },
];

export default function LeadershipPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Leadership Team
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            Meet The People Behind
            <span className="text-blue-600"> Xenova Global</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Experienced professionals dedicated to building meaningful
            technology partnerships and delivering world-class digital
            transformation solutions.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => {
            const Icon = leader.icon;

            return (
              <div
                key={leader.name}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Header */}

                <div
                  className={`flex h-56 items-center justify-center bg-gradient-to-br ${leader.gradient}`}
                >
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                    <Icon className="h-14 w-14 text-white" />
                  </div>
                </div>

                {/* Content */}

                <div className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {leader.name}
                  </h2>

                  <p className="mt-2 font-semibold text-blue-600">
                    {leader.role}
                  </p>

                  <p className="mt-5 leading-7 text-gray-600">
                    {leader.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-blue-600 hover:text-blue-800">
                    <ExternalLink size={20}  />
                    <span className="font-medium">LinkedIn</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 px-10 py-16 text-center text-white">
          <h2 className="text-4xl font-bold">
            Leadership Built on Trust & Innovation
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg text-slate-300">
            Our leadership team combines decades of expertise in technology,
            recruitment, and digital transformation to help organizations build
            exceptional teams and deliver innovative business solutions
            worldwide.
          </p>
        </div>
      </section>
    </main>
  );
}