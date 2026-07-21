import StatCard from "@/components/dashboard/StatCard";

export default function EmployerDashboard() {
  return (
    <>
      <h1 className="text-4xl font-bold text-slate-900 mb-8">
        Employer Dashboard
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Active Jobs"
          value="24"
        />

        <StatCard
          title="Applications"
          value="187"
        />

        <StatCard
          title="Interviews"
          value="31"
        />

        <StatCard
          title="Hired"
          value="12"
        />
      </div>
    </>
  );
}