import connectDB from "@/lib/mongodb";
import Application from "@/models/Application";

export default async function EmployerApplicationsPage() {
  await connectDB();

  const applications = await Application.find()
    .populate("candidate", "firstName lastName email")
    .populate("job", "title company")
    .sort({ createdAt: -1 })
    .lean();

  return (
    <main className="space-y-8">
      <h1 className="text-4xl font-bold">
        Applications
      </h1>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left">Candidate</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Job</th>
              <th className="px-6 py-4 text-left">Company</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Applied</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((application: any) => (
              <tr
                key={application._id.toString()}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  {application.candidate?.firstName}{" "}
                  {application.candidate?.lastName}
                </td>

                <td className="px-6 py-4">
                  {application.candidate?.email}
                </td>

                <td className="px-6 py-4">
                  {application.job?.title}
                </td>

                <td className="px-6 py-4">
                  {application.job?.company}
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                    {application.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  {new Date(application.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {applications.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            No applications found.
          </div>
        )}
      </div>
    </main>
  );
}