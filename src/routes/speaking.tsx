import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/speaking")({
  head: () => ({
    meta: [
      { title: "Speaking — Aishat Muibudeen (Maya)" },
      { name: "description", content: "Talks on design systems, accessibility, and open source design." },
    ],
  }),
  component: SpeakingPage,
});

function SpeakingPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link to="/" className="text-sm text-primary-deep hover:underline">← Home</Link>
      <h1 className="mt-6 font-display text-5xl font-extrabold">Speaking</h1>
      <p className="mt-6 text-lg text-muted-foreground">Conference talks and community sessions.</p>
    </main>
  );
}