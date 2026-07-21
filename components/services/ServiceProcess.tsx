"use client";

interface ServiceProcessProps {
  steps: string[];
}

export default function ServiceProcess({
  steps,
}: ServiceProcessProps) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Our Process
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={step}
              className="flex items-start gap-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                {index + 1}
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Step {index + 1}
                </h3>

                <p className="mt-2 text-gray-600">
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}