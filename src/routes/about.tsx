import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aishat Muibudeen (Maya)" },
      { name: "description", content: "About Maya — product designer & open source community lead based in Nigeria." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link to="/" className="text-sm text-primary-deep hover:underline">← Home</Link>
      <h1 className="mt-6 font-display text-5xl font-extrabold">About Maya</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        I'm Aishat Muibudeen — a product designer and open source community lead based in Nigeria. I design accessible, inclusive products and lead community design at AsyncAPI.
      </p>
    </main>
  );
}