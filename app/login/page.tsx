"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function login(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setLoading(false);
      alert(result.error);
      return;
    }

    // Wait briefly for the session to update
    await new Promise((resolve) => setTimeout(resolve, 500));

    const response = await fetch("/api/auth/session");
    const session = await response.json();

    setLoading(false);

    const role = session?.user?.role;

    if (role === "admin") {
      router.push("/admin");
    } else if (role === "employer") {
      router.push("/employer");
    } else if (role === "candidate") {
      router.push("/candidate");
    } else {
      router.push("/");
    }

    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">
            Xenova <span className="text-blue-600">Global</span>
          </h1>

          <p className="mt-2 text-gray-500">
            Welcome back! Login to continue.
          </p>
        </div>

        <form onSubmit={login} className="space-y-5">

          <div>
            <label className="mb-2 block font-medium">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg border px-4 py-3 focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-lg border px-4 py-3 pr-12 focus:border-blue-600 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-600"
            >
              Register
            </Link>
          </div>

        </form>

      </div>
    </div>
  );
}