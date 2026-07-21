"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function Heading({
  title,
  subtitle,
  center = false,
}: HeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-4xl font-bold text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-lg text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}