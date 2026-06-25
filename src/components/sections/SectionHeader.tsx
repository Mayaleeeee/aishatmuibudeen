/**
 * Shared header for homepage sections — small kicker label, large title,
 * optional lead paragraph aligned to the right on desktop.
 */
export function SectionHeader({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-deep">
          <span className="h-px w-8 bg-primary-deep" aria-hidden /> {kicker}
        </p>
        <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">{title}</h2>
      </div>
      {lead && <p className="max-w-md text-base text-muted-foreground">{lead}</p>}
    </div>
  );
}