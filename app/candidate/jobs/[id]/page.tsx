import connectDB from "@/lib/mongodb";
import Job from "@/models/Job";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Briefcase,
  IndianRupee,
  Clock,
  Building2,
} from "lucide-react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

interface JobData {
  _id: {
    toString(): string;
  };
  title: string;
  company: string;
  location: string;
  employmentType: string;
  experience: string;
  salary: string;
  status: string;
  description: string;
  responsibilities: string;
  requirements: string;
  skills?: string[];
}

export default async function CandidateJobDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  await connectDB();

  const job = await Job.findById(id).lean();

  if (!job) {
    notFound();
  }

  const data = job as unknown as JobData;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        {/* Header */}
        <div className="border-b p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                {data.title}
              </h1>

              <div className="mt-5 flex flex-wrap gap-5 text-gray-600">
                <div className="flex items-center gap-2">
                  <Building2 size={18} />
                  {data.company}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  {data.location}
                </div>

                <div className="flex items-center gap-2">
                  <Briefcase size={18} />
                  {data.employmentType}
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  {data.experience}
                </div>

                <div className="flex items-center gap-2">
                  <IndianRupee size={18} />
                  {data.salary}
                </div>
              </div>
            </div>

            <span className="rounded-full bg-green-100 px-4 py-2 font-medium text-green-700">
              {data.status}
            </span>
          </div>
        </div>

        {/* Skills */}
        <div className="border-b p-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Required Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {data.skills?.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-blue-100 px-4 py-2 text-blue-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="border-b p-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Job Description
          </h2>

          <p className="whitespace-pre-wrap leading-8 text-gray-600">
            {data.description}
          </p>
        </div>

        {/* Responsibilities */}
        <div className="border-b p-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Responsibilities
          </h2>

          <p className="whitespace-pre-wrap leading-8 text-gray-600">
            {data.responsibilities}
          </p>
        </div>

        {/* Requirements */}
        <div className="border-b p-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Requirements
          </h2>

          <p className="whitespace-pre-wrap leading-8 text-gray-600">
            {data.requirements}
          </p>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center justify-between gap-4 p-8 md:flex-row">
          <Link
            href="/candidate/jobs"
            className="rounded-xl border border-gray-300 px-6 py-3 transition hover:bg-gray-100"
          >
            ← Back to Jobs
          </Link>

          <button
            type="button"
            className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Apply Now
          </button>
        </div>
      </div>
    </main>
  );
}