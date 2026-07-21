"use client";

import { useRef, useState } from "react";
import { Upload, FileText, Trash2 } from "lucide-react";

interface ResumeUploaderProps {
  onUpload?: (file: File) => void;
}

export default function ResumeUploader({
  onUpload,
}: ResumeUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];

    if (!selected) return;

    setFile(selected);

    if (onUpload) {
      onUpload(selected);
    }
  }

  function removeFile() {
    setFile(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-white p-8">
      {!file ? (
        <div className="flex flex-col items-center justify-center text-center">
          <Upload className="mb-4 h-12 w-12 text-blue-600" />

          <h3 className="text-xl font-semibold">
            Upload Resume
          </h3>

          <p className="mt-2 text-gray-500">
            PDF, DOC or DOCX (Max 5MB)
          </p>

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Choose File
          </button>

          <input
            ref={inputRef}
            hidden
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
          />
        </div>
      ) : (
        <div className="flex items-center justify-between rounded-xl border bg-gray-50 p-5">
          <div className="flex items-center gap-4">
            <FileText className="h-10 w-10 text-blue-600" />

            <div>
              <h4 className="font-semibold">{file.name}</h4>

              <p className="text-sm text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={removeFile}
            className="rounded-lg p-2 text-red-600 hover:bg-red-50"
          >
            <Trash2 size={20} />
          </button>
        </div>
      )}
    </div>
  );
}