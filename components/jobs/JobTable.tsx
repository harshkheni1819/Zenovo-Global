"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";
import StatusBadge from "./StatusBadge";

interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  employmentType: string;
  status: string;
}

interface Props {
  jobs: Job[];
}

export default function JobTable({ jobs }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
              Job
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
              Company
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
              Location
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
              Type
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
              Status
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr
              key={job._id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="px-6 py-5 font-semibold text-slate-900">
                {job.title}
              </td>

              <td className="px-6 py-5 text-gray-600">
                {job.company}
              </td>

              <td className="px-6 py-5 text-gray-600">
                {job.location}
              </td>

              <td className="px-6 py-5 text-gray-600">
                {job.employmentType}
              </td>

              <td className="px-6 py-5">
                <StatusBadge status={job.status} />
              </td>

              <td className="px-6 py-5">
                <div className="flex items-center justify-center gap-4">
                  <Link
                    href={`/employer/jobs/${job._id}`}
                    className="text-blue-600 hover:text-blue-800 transition"
                  >
                    <Eye size={18} />
                  </Link>

                  <Link
                    href={`/employer/jobs/edit/${job._id}`}
                    className="text-yellow-600 hover:text-yellow-800 transition"
                  >
                    <Pencil size={18} />
                  </Link>

                  <button
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {jobs.length === 0 && (
        <div className="py-16 text-center text-gray-500">
          No jobs found.
        </div>
      )}
    </div>
  );
}