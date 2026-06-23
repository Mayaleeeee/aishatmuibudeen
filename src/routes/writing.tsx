import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Aishat Muibudeen (Maya)" },
      { name: "description", content: "Essays and notes on design, accessibility, and open source." },
    ],
  }),
  component: WritingPage,
});

function WritingPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link to="/" className="text-sm text-primary-deep hover:underline">← Home</Link>
      <h1 className="mt-6 font-display text-5xl font-extrabold">Writing</h1>
      <p className="mt-6 text-lg text-muted-foreground">Essays coming soon.</p>
    </main>
  );
}