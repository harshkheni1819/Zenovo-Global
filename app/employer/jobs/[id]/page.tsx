import connectDB from "@/lib/mongodb";
import Job from "@/models/Job";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function JobDetailsPage({ params }: Props) {
  const { id } = await params;

  await connectDB();

  const job = await Job.findById(id).lean();

  if (!job) {
    notFound();
  }

  const data: any = job;

  return (
    <main className="max-w-5xl mx-auto py-10 space-y-8">
      <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              {data.title}
            </h1>

            <p className="mt-2 text-gray-500">
              {data.company} • {data.location}
            </p>
          </div>

          <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
            {data.status}
          </span>
        </div>

        <hr className="my-8" />

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <h3 className="font-semibold text-slate-900">
              Employment Type
            </h3>

            <p className="text-gray-600 mt-2">
              {data.employmentType}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Experience
            </h3>

            <p className="text-gray-600 mt-2">
              {data.experience}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Salary
            </h3>

            <p className="text-gray-600 mt-2">
              {data.salary}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Skills
            </h3>

            <div className="flex flex-wrap gap-2 mt-3">
              {data.skills?.map((skill: string) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        <hr className="my-8" />

        <section className="space-y-6">

          <div>
            <h2 className="text-2xl font-bold">
              Job Description
            </h2>

            <p className="mt-3 text-gray-600 whitespace-pre-wrap">
              {data.description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Responsibilities
            </h2>

            <p className="mt-3 text-gray-600 whitespace-pre-wrap">
              {data.responsibilities}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Requirements
            </h2>

            <p className="mt-3 text-gray-600 whitespace-pre-wrap">
              {data.requirements}
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}