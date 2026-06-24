import { createFileRoute, Link } from "@tanstack/react-router";
import { Mic } from "lucide-react";

export const Route = createFileRoute("/speaking")({
  head: () => ({
    meta: [
      { title: "Speaking — Aishat Muibudeen (Maya)" },
      { name: "description", content: "Talks on design systems, accessibility, and open source design." },
    ],
  }),
  component: SpeakingPage,
});

const talks = [
  {
    event: "OpenForum Academy Symposium 2024",
    title: "Beyond the Code: How Diversity and Inclusion Shape the Future of Open Source",
    year: "2024",
    format: "Online",
    tags: ["Open Source", "Diversity"],
    color: "var(--color-cyan)",
  },
  {
    event: "AsyncAPI Conference on Tour 2024",
    title: "The Arts of Innovation: Designers Leading the Future of Open Source",
    year: "2024",
    format: "Online",
    tags: ["Design", "Open Source"],
    color: "var(--color-yellow)",
  },
  {
    event: "PyLadies Con",
    title: "Talk title TBC",
    year: "TBC",
    format: "TBC",
    tags: ["Community", "Design"],
    color: "var(--color-coral)",
  },
];

function SpeakingPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24 pt-32">
      <Link to="/" className="text-sm text-primary-deep hover:underline">← Home</Link>
      <h1 className="mt-6 font-display text-5xl font-extrabold md:text-6xl">Speaking</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Conference talks and community sessions on design, open source, and inclusion.</p>
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {talks.map((t) => (
          <li
            key={t.event + t.title}
            className="lift-card flex flex-col rounded-3xl border-2 border-foreground bg-card p-6"
          >
            <div className="flex items-center gap-3">
              <span
                className="inline-flex size-10 items-center justify-center rounded-2xl border-2 border-foreground"
                style={{ background: t.color }}
                aria-hidden
              >
                <Mic className="size-5 text-foreground" />
              </span>
              <p className="text-sm font-semibold text-muted-foreground">{t.event}</p>
            </div>
            <h2 className="mt-4 font-display text-xl font-bold leading-snug">{t.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{t.year} · {t.format}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-foreground/20 bg-secondary px-3 py-1 text-xs font-semibold text-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className="mt-12 text-center text-base font-semibold text-muted-foreground">More coming soon 💜</p>
    </main>
  );
}