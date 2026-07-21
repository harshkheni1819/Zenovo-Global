import ServiceLayout from "@/components/services/ServiceLayout";

export default function PermanentTalentPage() {
  return (
    <ServiceLayout
      badge="Permanent Talent"
      title="Long-Term Professionals For Sustainable Growth"
      description="We connect organizations with highly qualified professionals who contribute to long-term success, innovation, and organizational growth."
      benefits={[
        "Experienced professionals",
        "Culture-focused hiring",
        "Lower turnover",
        "Long-term business value",
      ]}
      process={[
        "Consultation",
        "Talent Search",
        "Interviews",
        "Successful Placement",
      ]}
    />
  );
}