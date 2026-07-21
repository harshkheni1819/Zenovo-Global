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

export default async function CandidateJobDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  await connectDB();

  const job = await Job.findById(id).lean();

  if (!job) {
    notFound();
  }

  const data: any = job;

  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-8 border-b">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                {data.title}
              </h1>

              <div className="flex flex-wrap gap-5 mt-5 text-gray-600">
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

            <div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                {data.status}
              </span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="p-8 border-b">
          <h2 className="text-2xl font-semibold mb-4">
            Required Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {data.skills?.map((skill: string) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="p-8 border-b">
          <h2 className="text-2xl font-semibold mb-4">
            Job Description
          </h2>

          <p className="text-gray-600 whitespace-pre-wrap leading-8">
            {data.description}
          </p>
        </div>

        {/* Responsibilities */}
        <div className="p-8 border-b">
          <h2 className="text-2xl font-semibold mb-4">
            Responsibilities
          </h2>

          <p className="text-gray-600 whitespace-pre-wrap leading-8">
            {data.responsibilities}
          </p>
        </div>

        {/* Requirements */}
        <div className="p-8 border-b">
          <h2 className="text-2xl font-semibold mb-4">
            Requirements
          </h2>

          <p className="text-gray-600 whitespace-pre-wrap leading-8">
            {data.requirements}
          </p>
        </div>

        {/* Footer */}
        <div className="p-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <Link
            href="/candidate/jobs"
            className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            ← Back to Jobs
          </Link>

          import ApplyButton from "@/components/jobs/ApplyButton";
          <ApplyButton jobId={data._id.toString()} />
        </div>
      </div>
    </main>
  );
}