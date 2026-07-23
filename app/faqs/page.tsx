export default function FAQsPage() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-10">
        Frequently Asked Questions
      </h1>

      <div className="space-y-8">
        <div>
          <h2 className="font-semibold text-xl">
            How do I apply for jobs?
          </h2>
          <p className="text-gray-600 mt-2">
            Create your account and apply directly from the Jobs page.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl">
            Is registration free?
          </h2>
          <p className="text-gray-600 mt-2">
            Yes. Registration is completely free for candidates.
          </p>
        </div>
      </div>
    </main>
  );
}