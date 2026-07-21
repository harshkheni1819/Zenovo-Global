import StatCard from "@/components/dashboard/StatCard";

export default function CandidateDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">
        Candidate Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        <StatCard title="Applied Jobs" value="0" />
        <StatCard title="Saved Jobs" value="0" />
        <StatCard title="Interviews" value="0" />
        <StatCard title="Profile Score" value="25%" />
      </div>
    </div>
  );
}