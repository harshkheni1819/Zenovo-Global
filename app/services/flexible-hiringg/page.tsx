import ServiceLayout from "@/components/services/ServiceLayout";

export default function FlexibleHiringPage() {
  return (
    <ServiceLayout
      badge="Flexible Hiring"
      title="Flexible Workforce Solutions That Scale With Your Business"
      description="Whether you're expanding a project team, addressing seasonal demand, or accelerating product delivery, Zenovo Global provides flexible workforce solutions tailored to your business objectives."
      benefits={[
        "Quick access to qualified professionals",
        "Flexible engagement models",
        "Reduced hiring timelines",
        "Scalable workforce planning",
      ]}
      process={[
        "Requirement Analysis",
        "Talent Identification",
        "Selection",
        "Project Kickoff",
      ]}
    />
  );
}