"use client";

import { useState } from "react";

export default function CandidateSettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [jobAlerts, setJobAlerts] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow">
        <h1 className="mb-8 text-3xl font-bold text-slate-900">
          Account Settings
        </h1>

        <div className="space-y-8">
          <div className="flex items-center justify-between border-b pb-6">
            <div>
              <h2 className="text-lg font-semibold">
                Email Notifications
              </h2>

              <p className="text-sm text-gray-500">
                Receive updates about your applications.
              </p>
            </div>

            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
              className="h-5 w-5"
            />
          </div>

          <div className="flex items-center justify-between border-b pb-6">
            <div>
              <h2 className="text-lg font-semibold">
                Job Alerts
              </h2>

              <p className="text-sm text-gray-500">
                Receive new job recommendations.
              </p>
            </div>

            <input
              type="checkbox"
              checked={jobAlerts}
              onChange={(e) => setJobAlerts(e.target.checked)}
              className="h-5 w-5"
            />
          </div>

          <div>
            <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}