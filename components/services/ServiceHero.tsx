"use client";

interface ServiceHeroProps {
  title: string;
  description: string;
}

export default function ServiceHero({
  title,
  description,
}: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-5xl font-bold">{title}</h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
          {description}
        </p>
      </div>
    </section>
  );
}