/**
 * Warm one-line support note rendered just above the footer. Inline
 * text with a single inline link to GitHub Sponsors — intentionally
 * not styled as a button or banner.
 */
export function SupportLink() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-3xl px-6 py-10 text-center">
        <p className="text-base leading-relaxed text-muted-foreground">
          I build in the open. If my work has helped you — design systems, accessibility resources,
          community tools — you can support it directly on{" "}
          <a
            href="https://github.com/sponsors/Mayaleeeee"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:text-primary-deep"
          >
            GitHub Sponsors
          </a>
          . 💜
        </p>
      </div>
    </section>
  );
}