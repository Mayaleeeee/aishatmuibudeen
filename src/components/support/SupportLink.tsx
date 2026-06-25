/**
 * Subtle inline text link inviting visitors to support Maya's open source
 * work on GitHub. Rendered just above the footer on the homepage.
 */
export function SupportLink() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          Enjoy my open source work?{" "}
          <a
            href="https://github.com/Mayaleeeee"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:text-primary-deep"
          >
            Support it on GitHub ⭐
          </a>
        </p>
      </div>
    </section>
  );
}