import JobTable from "@/components/jobs/JobTable";
import connectDB from "@/lib/mongodb";
import Job from "@/models/Job";

export default async function JobsPage() {
  await connectDB();

  const jobs = await Job.find().lean();

  const serializedJobs = jobs.map((job: any) => ({
    ...job,
    _id: job._id.toString(),
  }));

  return (
    <main className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          Jobs
        </h1>

        <a
          href="/employer/jobs/create"
          className="rounded-xl bg-blue-600 px-6 py-3 text-white"
        >
          + Post New Job
        </a>
      </div>

      <JobTable jobs={serializedJobs} />
    </main>
  );
}