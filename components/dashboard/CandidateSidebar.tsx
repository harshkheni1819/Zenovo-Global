"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Bookmark,
  User,
  Settings,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/candidate",
    icon: LayoutDashboard,
  },
  {
    name: "Browse Jobs",
    href: "/candidate/jobs",
    icon: Briefcase,
  },
  {
    name: "Applications",
    href: "/candidate/applications",
    icon: FileText,
  },
  {
    name: "Saved Jobs",
    href: "/candidate/saved",
    icon: Bookmark,
  },
  {
    name: "Profile",
    href: "/candidate/profile",
    icon: User,
  },
  {
    name: "Settings",
    href: "/candidate/settings",
    icon: Settings,
  },
];

export default function CandidateSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white border-r border-gray-200 min-h-screen">
      <div className="h-20 flex items-center px-8 border-b">
        <h1 className="text-2xl font-bold">
          Xenova
          <span className="text-blue-600">Global</span>
        </h1>
      </div>

      <nav className="p-5 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                pathname === item.href
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}