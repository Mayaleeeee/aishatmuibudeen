/**
 * Dark pill with a pulsing green dot used to show that Maya is currently
 * open to new work. Reusable on the hero and the about page.
 */
type AvailabilityBadgeProps = {
  text?: string;
  className?: string;
};

export function AvailabilityBadge({
  text = "Available for hire · Remote · Hybrid · Open to Relocation",
  className = "",
}: AvailabilityBadgeProps) {
  return (
    <span
      className={
        "inline-flex items-center gap-2 rounded-full bg-[#0F1117] px-4 py-1.5 text-xs font-semibold text-white sm:text-sm " +
        className
      }
    >
      <span className="status-dot" aria-hidden />
      <span>{text}</span>
    </span>
  );
}