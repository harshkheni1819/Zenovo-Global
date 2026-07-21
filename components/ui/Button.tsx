import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const styles = clsx(
    "inline-flex items-center justify-center rounded-xl px-7 py-3.5 font-semibold transition-all duration-300",
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl"
      : "border border-slate-300 bg-white text-slate-900 hover:border-blue-600 hover:text-blue-600",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}