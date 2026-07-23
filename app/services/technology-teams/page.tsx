import ServiceLayout from "@/components/services/ServiceLayout";

export default function TechnologyTeamsPage() {
  return (
    <ServiceLayout
      badge="Technology Teams"
      title="Build High-Performing Technology Teams"
      description="Xenova Global helps organizations connect with highly skilled technology professionals who accelerate innovation, digital transformation, and business growth."
      benefits={[
        "Access to experienced technology professionals",
        "Faster hiring process",
        "Scalable workforce solutions",
        "Reduced hiring risk",
      ]}
      process={[
        "Discovery",
        "Talent Matching",
        "Interview",
        "Successful Onboarding",
      ]}
    />
  );
}