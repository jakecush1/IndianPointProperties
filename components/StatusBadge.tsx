import { PropertyStatus } from "@/data/properties";

const styles: Record<PropertyStatus, string> = {
  Available: "bg-emerald-100 text-emerald-800",
  Pending: "bg-amber-100 text-amber-800",
  Sold: "bg-stone-100 text-stone-600",
};

export default function StatusBadge({ status }: { status: PropertyStatus }) {
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${styles[status]}`}>
      {status}
    </span>
  );
}
