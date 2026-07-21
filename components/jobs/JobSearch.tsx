"use client";

interface JobSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function JobSearch({
  value,
  onChange,
}: JobSearchProps) {
  return (
    <input
      type="text"
      placeholder="Search jobs..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-96 rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
    />
  );
}