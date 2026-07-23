export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow">
        <h1 className="mb-8 text-5xl font-bold">
          Cookie Policy
        </h1>

        <div className="space-y-8 text-gray-700 leading-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              What Are Cookies?
            </h2>

            <p>
              Cookies are small files stored on your device that help improve
              website functionality and user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              How We Use Cookies
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Remember login sessions.</li>
              <li>Improve website performance.</li>
              <li>Analyze website traffic.</li>
              <li>Enhance user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Managing Cookies
            </h2>

            <p>
              You may disable cookies through your browser settings, although
              some features of the website may not function properly.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}