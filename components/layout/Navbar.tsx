"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/constants/site";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}

        <Link href="/" onClick={() => setOpen(false)}>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Xenovo
            <span className="text-blue-600"> Global</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative font-medium transition-all duration-300 ${
                pathname === item.href
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {item.name}

              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                  pathname === item.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login">
            <Button variant="outline">
              Login
            </Button>
          </Link>

          <Link href="/register">
            <Button>
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <div className="space-y-4 border-t border-slate-200 bg-white px-6 py-6">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-2 font-medium transition ${
                pathname === item.href
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="space-y-3 pt-4">
            <Link href="/login" onClick={() => setOpen(false)}>
              <Button
                variant="outline"
                className="w-full"
              >
                Login
              </Button>
            </Link>

            <Link href="/register" onClick={() => setOpen(false)}>
              <Button className="w-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}