export default function CandidateProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow">
        <h1 className="mb-6 text-3xl font-bold">
          Candidate Profile
        </h1>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block font-medium">
              Full Name
            </label>
            <input
              className="w-full rounded-lg border p-3"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Email
            </label>
            <input
              className="w-full rounded-lg border p-3"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Phone
            </label>
            <input
              className="w-full rounded-lg border p-3"
              placeholder="Enter your phone number"
            />
          </div>

          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}