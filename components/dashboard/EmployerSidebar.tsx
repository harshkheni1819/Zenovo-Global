"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Building2,
  Settings,
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
    name: "Applications",
    href: "/employer/applications",
    icon: FileText,
  },
  {
    name: "Company Profile",
    href: "/employer/company",
    icon: Building2,
  },
  {
    name: "Settings",
    href: "/employer/settings",
    icon: Settings,
  },
];

export default function EmployerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white border-r border-gray-200 min-h-screen">
      <div className="h-20 flex items-center px-8 border-b">
        <h1 className="text-2xl font-bold">
          Xenovo
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
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                pathname === item.href
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}