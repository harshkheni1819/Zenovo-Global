import Link from "next/link";
import { Briefcase, MapPin, Building2, Bookmark } from "lucide-react";

export default function SavedJobsPage() {
  const savedJobs = [
    {
      id: "1",
      title: "Frontend Developer",
      company: "Xenovo Global",
      location: "Ahmedabad, India",
      type: "Full Time",
    },
    {
      id: "2",
      title: "Backend Developer",
      company: "Google",
      location: "Remote",
      type: "Full Time",
    },
    {
      id: "3",
      title: "UI/UX Designer",
      company: "Microsoft",
      location: "Bengaluru, India",
      type: "Hybrid",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Saved Jobs
          </h1>

          <p className="mt-2 text-gray-600">
            Manage your bookmarked jobs.
          </p>
        </div>

        {savedJobs.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow">
            <Bookmark className="mx-auto mb-4 h-16 w-16 text-blue-600" />

            <h2 className="text-2xl font-semibold">
              No Saved Jobs
            </h2>

            <p className="mt-3 text-gray-500">
              Save interesting jobs to view them later.
            </p>

            <Link
              href="/candidate/jobs"
              className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Browse Jobs
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {savedJobs.map((job) => (
              <div
                key={job.id}
                className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {job.title}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-5 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Building2 size={18} />
                        {job.company}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={18} />
                        {job.location}
                      </div>

                      <div className="flex items-center gap-2">
                        <Briefcase size={18} />
                        {job.type}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={`/candidate/jobs/${job.id}`}
                      className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                    >
                      View Job
                    </Link>

                    <button className="rounded-lg border border-red-500 px-5 py-2 text-red-600 hover:bg-red-50">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}