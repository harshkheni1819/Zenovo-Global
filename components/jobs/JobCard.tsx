"use client";

import Link from "next/link";
import { MapPin, Briefcase, IndianRupee } from "lucide-react";

interface Props {
  job: any;
}

export default function JobCard({ job }: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {job.title}
          </h2>

          <p className="mt-1 text-gray-500">
            {job.company}
          </p>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
          {job.status}
        </span>
      </div>

      <div className="mt-6 space-y-2 text-gray-600">
        <div className="flex items-center gap-2">
          <MapPin size={18} />
          {job.location}
        </div>

        <div className="flex items-center gap-2">
          <Briefcase size={18} />
          {job.employmentType}
        </div>

        <div className="flex items-center gap-2">
          <IndianRupee size={18} />
          {job.salary}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {job.skills?.slice(0, 4).map((skill: string) => (
          <span
            key={skill}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
          >
            {skill}
          </span>
        ))}
      </div>

      <Link
        href={`/candidate/jobs/${job._id}`}
        className="mt-8 inline-block w-full rounded-xl bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}