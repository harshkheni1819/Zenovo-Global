import ServiceLayout from "@/components/services/ServiceLayout";

export default function ExecutiveSearchPage() {
  return (
    <ServiceLayout
      badge="Executive Search"
      title="Leadership That Drives Business Transformation"
      description="Our executive search practice helps organizations identify exceptional leaders who inspire innovation and deliver measurable business outcomes."
      benefits={[
        "Leadership expertise",
        "Confidential search process",
        "Industry-focused recruitment",
        "Strategic leadership advisory",
      ]}
      process={[
        "Executive Consultation",
        "Leadership Search",
        "Assessment",
        "Executive Placement",
      ]}
    />
  );
}