import CandidateSidebar from "@/components/dashboard/CandidateSidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function CandidateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <CandidateSidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}