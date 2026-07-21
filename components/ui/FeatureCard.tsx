import { LucideIcon } from "lucide-react";
import Card from "./Card";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <Card>
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>

      <h3 className="mt-8 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </Card>
  );
}