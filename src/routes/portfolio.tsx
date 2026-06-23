import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Aishat Muibudeen (Maya)" },
      { name: "description", content: "Selected product design, design systems, and open source work." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <Link to="/" className="text-sm text-primary-deep hover:underline">← Home</Link>
      <h1 className="mt-6 font-display text-5xl font-extrabold">Portfolio</h1>
      <p className="mt-6 text-lg text-muted-foreground">Case studies coming soon.</p>
    </main>
  );
}