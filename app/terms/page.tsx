export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow">
        <h1 className="mb-8 text-5xl font-bold">
          Terms & Conditions
        </h1>

        <div className="space-y-8 text-gray-700 leading-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Acceptance
            </h2>

            <p>
              By using Xenova Global you agree to these Terms &
              Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              User Responsibilities
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate information.</li>
              <li>Keep your account secure.</li>
              <li>Do not misuse the platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Limitation of Liability
            </h2>

            <p>
              Xenova Global is not responsible for employment decisions
              made by employers or candidates.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}