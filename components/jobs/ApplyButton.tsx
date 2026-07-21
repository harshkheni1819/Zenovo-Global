"use client";

import { useState } from "react";

interface Props {
  jobId: string;
}

export default function ApplyButton({ jobId }: Props) {
  const [loading, setLoading] = useState(false);

  async function apply() {
    setLoading(true);

    const res = await fetch("/api/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        job: jobId,
        coverLetter: "",
        resumeUrl: "",
      }),
    });

    setLoading(false);

    if (res.ok) {
      alert("Application submitted successfully.");
    } else {
      alert("Failed to apply.");
    }
  }

  return (
    <button
      onClick={apply}
      disabled={loading}
      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition disabled:opacity-50"
    >
      {loading ? "Applying..." : "Apply Now"}
    </button>
  );
}