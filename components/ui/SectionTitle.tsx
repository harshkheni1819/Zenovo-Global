import Badge from "./Badge";

interface Props {
  badge: string;
  title: string;
  subtitle: string;
  center?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  center = true,
}: Props) {
  return (
    <div
      className={`max-w-3xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      <Badge>{badge}</Badge>

      <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        {subtitle}
      </p>
    </div>
  );
}