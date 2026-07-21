import Link from "next/link";
import { Mail, Phone, MapPin, Eye } from "lucide-react";

export default function ApplicantsPage() {
  const applicants = [
    {
      id: "1",
      name: "John Smith",
      email: "john@example.com",
      phone: "+91 9876543210",
      location: "Ahmedabad",
      job: "Frontend Developer",
      status: "Shortlisted",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "+91 9123456789",
      location: "Mumbai",
      job: "Backend Developer",
      status: "Under Review",
    },
    {
      id: "3",
      name: "David Wilson",
      email: "david@example.com",
      phone: "+91 9988776655",
      location: "Delhi",
      job: "UI/UX Designer",
      status: "Interview",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Applicants
          </h1>

          <p className="mt-2 text-gray-600">
            View and manage all job applicants.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left">Applicant</th>
                <th className="px-6 py-4 text-left">Applied For</th>
                <th className="px-6 py-4 text-left">Contact</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {applicants.map((applicant) => (
                <tr
                  key={applicant.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="px-6 py-5">
                    <div className="font-semibold text-gray-900">
                      {applicant.name}
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin size={15} />
                      {applicant.location}
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    {applicant.job}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail size={16} />
                      {applicant.email}
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <Phone size={16} />
                      {applicant.phone}
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                      {applicant.status}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-center">
                    <Link
                      href={`/employer/applicants/${applicant.id}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                      <Eye size={18} />
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}