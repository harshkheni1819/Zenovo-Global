import { notFound } from "next/navigation";

import ServiceLayout from "@/components/services/ServiceLayout";
import { services } from "@/data/services";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <ServiceLayout
      badge={service.badge}
      title={service.title}
      description={service.description}
      benefits={service.benefits}
      process={service.process}
    />
  );
}
