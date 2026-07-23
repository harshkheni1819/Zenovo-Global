export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow">
        <h1 className="mb-8 text-5xl font-bold text-slate-900">
          Privacy Policy
        </h1>

        <p className="mb-6 text-gray-600">
          Effective Date: January 1, 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-8">
          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Information We Collect
            </h2>

            <p>
              Xenova Global collects personal information such as your name,
              email address, resume, company information, and other details
              necessary to provide recruitment and technology services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Provide recruitment services.</li>
              <li>Improve our platform.</li>
              <li>Communicate with candidates and employers.</li>
              <li>Ensure platform security.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Data Security
            </h2>

            <p>
              We implement industry-standard security practices to protect your
              personal information.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Contact
            </h2>

            <p>
              For privacy-related questions contact us at
              Xenova.global2215@gmail.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}