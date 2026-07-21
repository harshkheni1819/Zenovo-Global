import { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold tracking-wide text-blue-600",
        className
      )}
    >
      {children}
    </span>
  );
}