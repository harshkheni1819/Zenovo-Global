"use client";

import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  color?: string;
  subtitle?: string;
}

export default function DashboardCard({
  title,
  value,
  icon,
  color = "bg-blue-600",
  subtitle,
}: DashboardCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-gray-500">
              {subtitle}
            </p>
          )}
        </div>

        {icon && (
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl text-white ${color}`}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}