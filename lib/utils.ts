export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatSalary(salary: number | string) {
  if (typeof salary === "string") return salary;

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(salary);
}

export function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function truncate(text: string, length = 120) {
  if (text.length <= length) return text;

  return text.substring(0, length) + "...";
}