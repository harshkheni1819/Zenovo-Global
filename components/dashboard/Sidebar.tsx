"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Building2,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/employer",
    icon: LayoutDashboard,
  },
  {
    name: "Jobs",
    href: "/employer/jobs",
    icon: Briefcase,
  },
  {
    name: "Applicants",
    href: "/employer/applicants",
    icon: Users,
  },
  {
    name: "Company",
    href: "/employer/company",
    icon: Building2,
  },
  {
    name: "Settings",
    href: "/employer/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
      <div className="h-20 flex items-center px-8 border-b">
        <h1 className="text-2xl font-bold">
          Xenova
          <span className="text-blue-600">Global</span>
        </h1>
      </div>

      <nav className="flex-1 p-5 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition
              ${
                pathname === item.href
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-5 border-t">
        <button className="flex items-center gap-3 text-red-500 hover:text-red-600">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}