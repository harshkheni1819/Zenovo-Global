"use client";

import { X } from "lucide-react";

interface DeleteJobModalProps {
  open: boolean;
  jobTitle?: string;
  loading?: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteJobModal({
  open,
  jobTitle,
  loading = false,
  onClose,
  onDelete,
}: DeleteJobModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Delete Job
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <p className="text-gray-700">
            Are you sure you want to delete
            {jobTitle ? (
              <>
                {" "}
                <span className="font-semibold">{jobTitle}</span>
              </>
            ) : (
              " this job"
            )}
            ?
          </p>

          <p className="mt-2 text-sm text-red-600">
            This action cannot be undone.
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border border-gray-300 px-5 py-2 hover:bg-gray-100 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            disabled={loading}
            className="rounded-xl bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}