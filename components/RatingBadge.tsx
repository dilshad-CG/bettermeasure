import Stars from "./Stars";
import { rating } from "@/lib/content";

export default function RatingBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 text-sm ${className}`}>
      <Stars size="text-sm" />
      <span className="font-semibold text-navy">{rating.value.toFixed(1)}</span>
      <span className="text-ink/50">· Rated on Google</span>
    </div>
  );
}
