"use client";

const testimonials = [
  {
    name: "Harsh Patel",
    role: "Software Engineer",
    company: "Google",
    text: "Xenovo Global helped me land my dream job within two weeks.",
  },
  {
    name: "Riya Shah",
    role: "HR Manager",
    company: "Microsoft",
    text: "The hiring experience was smooth and extremely fast.",
  },
  {
    name: "Amit Kumar",
    role: "Full Stack Developer",
    company: "Amazon",
    text: "A beautiful platform with excellent job opportunities.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          What People Say
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <p className="italic text-gray-600">
                "{item.text}"
              </p>

              <div className="mt-8">
                <h4 className="font-semibold">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.role} • {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}