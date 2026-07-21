"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-lg">
        <div className="mb-6 text-6xl">⚠️</div>

        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Something went wrong
        </h1>

        <p className="mb-8 text-gray-600">
          An unexpected error occurred while processing your request.
          Please try again.
        </p>

        {process.env.NODE_ENV === "development" && (
          <div className="mb-8 overflow-auto rounded-lg bg-red-50 p-4 text-left text-sm text-red-700">
            {error.message}
          </div>
        )}

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}