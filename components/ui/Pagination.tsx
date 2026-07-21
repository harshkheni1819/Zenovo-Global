"use client";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onChange,
}: PaginationProps) {
  return (
    <div className="mt-10 flex items-center justify-center gap-3">
      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="rounded-lg border px-4 py-2 disabled:opacity-50"
      >
        Previous
      </button>

      <span className="font-semibold">
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className="rounded-lg border px-4 py-2 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}