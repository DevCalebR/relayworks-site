import type { ProductStatus } from "@/content/products";

type StatusBadgeProps = {
  status: ProductStatus;
};

const statusClassName: Record<ProductStatus, string> = {
  Beta: "bg-amber-100 text-amber-700 ring-amber-200",
  Portfolio: "bg-sky-100 text-sky-700 ring-sky-200",
  Waitlist: "bg-violet-100 text-violet-700 ring-violet-200",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ring-inset ${statusClassName[status]}`}
    >
      {status}
    </span>
  );
}
