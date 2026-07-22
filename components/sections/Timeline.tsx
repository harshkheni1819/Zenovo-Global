"use client";

const timeline = [
  {
    title: "Create Account",
    description: "Sign up as a Candidate or Employer.",
  },
  {
    title: "Complete Profile",
    description: "Add your resume or company details.",
  },
  {
    title: "Connect",
    description: "Apply for jobs or hire top talent.",
  },
  {
    title: "Grow",
    description: "Build your career with Xenovo Global.",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-4xl font-bold">
          How It Works
        </h2>

        <div className="mt-16 space-y-10">
          {timeline.map((step, index) => (
            <div
              key={step.title}
              className="flex items-start gap-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                {index + 1}
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}