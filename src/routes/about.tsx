import { createFileRoute, Link } from "@tanstack/react-router";
import { AvailabilityBadge } from "@/components/status/AvailabilityBadge";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aishat Muibudeen (Maya)" },
      { name: "description", content: "About Maya — product designer & open source community lead based in Nigeria." },
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
        I design products and the <span className="marker-underline">conditions for people to thrive</span> around them.
      </h1>

      <div className="mt-8">
        <AvailabilityBadge text="Open to new opportunities · Remote · Hybrid · Open to Relocation" />
      </div>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/90">
        <p>
          I'm a <strong>Product Designer</strong> with over 5 years of experience across UX, UI,
          web design and UX research. I specialise in creating accessible, user-centred digital
          products that work for real people — and that align with business goals and engineering
          constraints.
        </p>
        <p>
          A significant part of my work sits at the intersection of design, open source and developer
          communities. At <strong>AsyncAPI</strong>, I've been designing since 2021 — leading the
          website redesign, building the design system, mentoring contributors and collaborating
          with technical and non-technical stakeholders to improve usability, contributor
          experience and product outcomes.
        </p>
        <p>
          I also co-founded <strong>OpenNest Africa</strong>, a community I built from the ground
          up to make open source more accessible and inclusive — especially for people who don't
          come from a traditional engineering background.
        </p>
        <p>
          I'm especially drawn to complex systems where user needs, business priorities and
          technical constraints all have to come together. Accessibility and design systems are
          where I do some of my best work.
        </p>
        <p>
          Outside of work, I enjoy reading, writing, watching films, travelling and spending time
          in nature.
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