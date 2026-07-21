export default function CandidateResumePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow">
        <h1 className="mb-6 text-3xl font-bold">
          Resume
        </h1>

        <p className="mb-6 text-gray-600">
          Upload your latest resume to apply for jobs.
        </p>

        <div className="rounded-xl border-2 border-dashed border-gray-300 p-10 text-center">
          <p className="mb-4 text-gray-500">
            Drag & drop your resume here
          </p>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="mb-4"
          />

          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Upload Resume
          </button>
        </div>
      </div>
    </div>
  );
}