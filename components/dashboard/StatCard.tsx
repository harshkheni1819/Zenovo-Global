interface Props {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <p className="text-gray-500">{title}</p>

      <h2 className="mt-3 text-4xl font-bold text-slate-900">
        {value}
      </h2>
    </div>
  );
}