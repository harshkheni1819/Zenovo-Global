import Link from "next/link";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function CandidateApplicationsPage() {
  // Temporary data
  const applications = [
    {
      id: "1",
      jobTitle: "Frontend Developer",
      company: "Xenova Global",
      location: "Ahmedabad, India",
      status: "Under Review",
      appliedDate: "20 July 2026",
    },
    {
      id: "2",
      jobTitle: "Backend Developer",
      company: "TechNova",
      location: "Remote",
      status: "Interview",
      appliedDate: "18 July 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            My Applications
          </h1>

          <p className="mt-2 text-gray-600">
            Track the status of all your job applications.
          </p>
        </div>

        {applications.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow">
            <h2 className="text-2xl font-semibold">
              No Applications Yet
            </h2>

            <p className="mt-3 text-gray-500">
              Start applying for jobs to see them here.
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
            {applications.map((application) => (
              <div
                key={application.id}
                className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {application.jobTitle}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        {application.company}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {application.location}
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {application.appliedDate}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                      {application.status}
                    </span>
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