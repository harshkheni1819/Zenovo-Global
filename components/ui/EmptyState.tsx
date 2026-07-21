"use client";

import Link from "next/link";

interface EmptyStateProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function EmptyState({
  title,
  description,
  buttonText,
  buttonHref,
}: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed p-12 text-center">
      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-gray-500">
        {description}
      </p>

      {buttonText && buttonHref && (
        <Link
          href={buttonHref}
          className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}