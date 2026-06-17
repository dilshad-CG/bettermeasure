export default function Stars({ size = "text-base" }: { size?: string }) {
  return (
    <span className={`tracking-tight text-[#FBBC04] ${size}`} aria-label="5 out of 5 stars">
      {"★★★★★"}
    </span>
  );
}
