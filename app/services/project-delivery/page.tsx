import ServiceLayout from "@/components/services/ServiceLayout";

export default function ProjectDeliveryPage() {
  return (
    <ServiceLayout
      badge="Project Delivery"
      title="Dedicated Teams For Successful Project Execution"
      description="Accelerate digital initiatives with experienced project teams focused on quality, collaboration, and timely delivery."
      benefits={[
        "Dedicated project teams",
        "Agile delivery",
        "Specialized expertise",
        "Predictable outcomes",
      ]}
      process={[
        "Project Planning",
        "Team Formation",
        "Execution",
        "Delivery",
      ]}
    />
  );
}