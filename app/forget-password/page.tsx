"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function EmployerForgotPasswordPage() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert(
      `Password reset link will be sent to ${email}.\n\n(Backend integration pending)`
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Forgot Password
          </h1>

          <p className="mt-2 text-gray-600">
            Enter your registered employer email to receive a password reset
            link.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Email Address
            </label>

            <div className="flex items-center rounded-xl border px-4">
              <Mail className="mr-3 text-gray-400" size={20} />

              <input
                type="email"
                required
                placeholder="company@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-none py-3 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}