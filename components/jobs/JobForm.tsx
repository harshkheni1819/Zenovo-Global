"use client";

import { useState } from "react";

export default function JobForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      title: formData.get("title"),
      company: formData.get("company"),
      location: formData.get("location"),
      employmentType: formData.get("employmentType"),
      experience: formData.get("experience"),
      salary: formData.get("salary"),
      description: formData.get("description"),
      responsibilities: formData.get("responsibilities"),
      requirements: formData.get("requirements"),
      skills: formData
        .get("skills")
        ?.toString()
        .split(",")
        .map((s) => s.trim()),
    };

    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      alert("Job posted successfully.");
      e.currentTarget.reset();
    } else {
      alert("Something went wrong.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl border border-gray-200 p-10 space-y-6 shadow-sm"
    >
      <h2 className="text-3xl font-bold">
        Post a New Job
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <input
          name="title"
          placeholder="Job Title"
          required
          className="border rounded-xl p-4"
        />

        <input
          name="company"
          placeholder="Company"
          required
          className="border rounded-xl p-4"
        />

        <input
          name="location"
          placeholder="Location"
          required
          className="border rounded-xl p-4"
        />

        <select
          name="employmentType"
          className="border rounded-xl p-4"
        >
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Contract</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>

        <input
          name="experience"
          placeholder="Experience"
          className="border rounded-xl p-4"
        />

        <input
          name="salary"
          placeholder="Salary"
          className="border rounded-xl p-4"
        />

        <input
          name="skills"
          placeholder="React, Next.js, Node.js"
          className="border rounded-xl p-4 md:col-span-2"
        />

        <textarea
          name="description"
          placeholder="Job Description"
          rows={6}
          className="border rounded-xl p-4 md:col-span-2"
        />

        <textarea
          name="responsibilities"
          placeholder="Responsibilities"
          rows={6}
          className="border rounded-xl p-4 md:col-span-2"
        />

        <textarea
          name="requirements"
          placeholder="Requirements"
          rows={6}
          className="border rounded-xl p-4 md:col-span-2"
        />
      </div>

      <button
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
      >
        {loading ? "Posting..." : "Publish Job"}
      </button>
    </form>
  );
}