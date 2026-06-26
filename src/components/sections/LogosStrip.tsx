/**
 * Horizontal infinite-scroll marquee of organisations Maya has worked
 * with. Pure CSS animation (see .marquee-track in styles.css) — the
 * track is duplicated twice so translating -50% loops seamlessly.
 * Logos are greyscale + reduced opacity, lifting to full colour on hover.
 */
const logos = [
  "AsyncAPI Initiative",
  "Oppia Foundation",
  "OpenNest Africa",
  "She Code Africa",
  "KodeCamp",
  "OpenForum Academy",
  "Google Summer of Code",
  "PyLadies",
];

export function LogosStrip() {
  return (
    <section
      aria-label="Trusted by and collaborated with"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.22em] text-primary-deep">
          Trusted by &amp; collaborated with
        </p>
        <div className="marquee-pause group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex w-max gap-12 md:gap-16">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 font-display text-lg font-bold uppercase tracking-wide text-foreground/55 grayscale opacity-70 transition hover:opacity-100 hover:text-foreground hover:grayscale-0 md:text-xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}