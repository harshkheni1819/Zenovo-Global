"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-8">
      <div className="relative w-96">
        <Search
          className="absolute left-4 top-3 text-gray-400"
          size={18}
        />

        <input
          className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
          placeholder="Search..."
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell size={22} />

          <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            H
          </div>

          <div>
            <p className="font-semibold">Harsh Patel</p>
            <p className="text-sm text-gray-500">
              Employer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}