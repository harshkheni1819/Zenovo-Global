import connectDB from "@/lib/mongodb";
import Job from "@/models/Job";
import JobCard from "@/components/jobs/JobCard";

export default async function CandidateJobsPage() {
  await connectDB();

  const jobs = await Job.find({ status: "Active" }).lean();

  const serializedJobs = jobs.map((job: any) => ({
    ...job,
    _id: job._id.toString(),
  }));

  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Browse Jobs
        </h1>

        <p className="mt-2 text-gray-500">
          Discover opportunities that match your skills.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {serializedJobs.map((job: any) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </main>
  );
}