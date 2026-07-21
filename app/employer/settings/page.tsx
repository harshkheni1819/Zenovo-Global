"use client";

import { useState } from "react";

export default function EmployerSettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [jobAlerts, setJobAlerts] = useState(true);
  const [publicProfile, setPublicProfile] = useState(false);

  function handleSave() {
    alert("Settings saved successfully!");
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-8 text-3xl font-bold text-slate-900">
          Employer Settings
        </h1>

        <div className="space-y-8">
          <div className="flex items-center justify-between border-b pb-5">
            <div>
              <h2 className="font-semibold text-lg">
                Email Notifications
              </h2>
              <p className="text-gray-500 text-sm">
                Receive updates about applicants and jobs.
              </p>
            </div>

            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
              className="h-5 w-5"
            />
          </div>

          <div className="flex items-center justify-between border-b pb-5">
            <div>
              <h2 className="font-semibold text-lg">
                Job Alerts
              </h2>
              <p className="text-gray-500 text-sm">
                Get notifications for recommended candidates.
              </p>
            </div>

            <input
              type="checkbox"
              checked={jobAlerts}
              onChange={(e) => setJobAlerts(e.target.checked)}
              className="h-5 w-5"
            />
          </div>

          <div className="flex items-center justify-between border-b pb-5">
            <div>
              <h2 className="font-semibold text-lg">
                Public Company Profile
              </h2>
              <p className="text-gray-500 text-sm">
                Allow candidates to view your company profile.
              </p>
            </div>

            <input
              type="checkbox"
              checked={publicProfile}
              onChange={(e) => setPublicProfile(e.target.checked)}
              className="h-5 w-5"
            />
          </div>

          <button
            onClick={handleSave}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}