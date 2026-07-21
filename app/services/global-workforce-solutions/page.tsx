import ServiceLayout from "@/components/services/ServiceLayout";

export default function GlobalWorkforceSolutionsPage() {
  return (
    <ServiceLayout
      badge="Global Workforce Solutions"
      title="Build Global Teams With Confidence"
      description="Expand into new markets with scalable workforce solutions that help organizations access world-class technology professionals across multiple regions."
      benefits={[
        "Global talent access",
        "Scalable hiring strategy",
        "Cross-border workforce support",
        "Enterprise delivery model",
      ]}
      process={[
        "Strategy",
        "Global Sourcing",
        "Deployment",
        "Continuous Support",
      ]}
    />
  );
}