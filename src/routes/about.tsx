import { createFileRoute, Link } from "@tanstack/react-router";
import { AvailabilityBadge } from "@/components/status/AvailabilityBadge";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aishat Muibudeen (Maya)" },
      { name: "description", content: "Aishat Muibudeen (Maya) — technical product designer working on developer tools, CLIs and design systems. Open source maintainer based in Nigeria." },
    ],
  }),
  component: AboutPage,
});

const languages = [
  { name: "English", level: "C2 (Fluent)", color: "var(--color-cyan)" },
  { name: "German", level: "B2 (Goethe-Zertifikat B2)", color: "var(--color-yellow)" },
];

const tools = [
  "Figma",
  "Framer",
  "Adobe Creative Suite",
  "Miro",
  "Canva",
  "Git",
  "HTML",
  "CSS",
];

/**
 * About page — Maya's bio, availability, languages and tools.
 */
function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 pt-32">
      <Link to="/" className="text-sm text-primary-deep hover:underline">← Home</Link>
      <h1 className="mt-6 font-display text-5xl font-extrabold leading-tight md:text-6xl">
        I simplify <span className="marker-underline">complex things</span>.
      </h1>

      <div className="mt-8">
        <AvailabilityBadge text="Open to new opportunities · Remote · Hybrid · Open to Relocation" />
      </div>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/90">
        <p>
          I'm a <strong>Technical Product Designer</strong> working mostly on tools built for
          developers — command-line tools, documentation, design systems, and the interfaces
          engineers spend their whole day inside.
        </p>
        <p>
          What draws me to this work is the complexity itself. Developer tools carry an enormous
          amount of architecture, and most of it leaks straight through to the person using them.
          My job is to reduce that load, to take something tangled and make it legible, so
          someone can move through it without holding the whole system in their head. I find that
          genuinely fascinating, and I want the people on the other side of it to have an easier
          day than they would have had otherwise.
        </p>
        <p>
          Most of that work happens at <strong>AsyncAPI</strong>, where I've been designing since
          2021. I redesigned the UX of the AsyncAPI CLI, mapping every state across its command
          set, defining the message architecture the tool now runs on, and proposing changes to
          the command API itself that maintainers accepted and engineers shipped. I also built and
          maintain the design system, led the website redesign, and mentor contributors through
          Google Summer of Code.
        </p>
        <p>
          I work in the open. That means writing design specifications in GitHub issues, reviewing
          pull requests against the design, and defending decisions publicly, including the ones
          reviewers told me to change. I serve on AsyncAPI's Code of Conduct and Technical Steering
          Committees, and I co-founded <strong>OpenNest Africa</strong> to make open source
          reachable for people without a traditional engineering background.
        </p>
        <p>
          Accessibility runs through all of it, though not always in the way people expect. On the
          CLI, it meant quieting the interface, cutting advice nobody asked for, so the errors
          that mattered were actually readable.
        </p>
        <p>
          Outside of work, I read, write, watch films, travel and spend time in nature.
        </p>
      </div>

      <section className="mt-14 rounded-3xl border-2 border-foreground bg-card p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-deep">Languages</p>
        <h2 className="mt-2 font-display text-3xl font-bold">I speak &amp; work in</h2>
        <ul className="mt-5 grid gap-3 text-base sm:grid-cols-2">
          {languages.map((language) => (
            <li key={language.name} className="flex items-center gap-2">
              <span className="size-2 rounded-full" style={{ background: language.color }} />
              {language.name} — {language.level}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-3xl border-2 border-foreground bg-card p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-deep">Tools</p>
        <h2 className="mt-2 font-display text-3xl font-bold">My toolkit</h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border-2 border-foreground bg-background px-4 py-1.5 text-sm font-semibold text-foreground"
            >
              {tool}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
