import { Terminal, Compass, Layers, Search } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

/**
 * "What I do" — four practice areas, rendered as a 2-column grid of
 * colour-coded cards.
 */
const services = [
  {
    icon: Terminal,
    title: "Developer Experience",
    color: "var(--color-cyan)",
    body: "Designing the tools developers work inside — CLIs, documentation and the interfaces around them, where being understood matters more than being pretty.",
  },
  {
    icon: Compass,
    title: "Product Design",
    color: "var(--color-yellow)",
    body: "End-to-end design across UX, UI and interaction, from early research through to shipped product.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    color: "var(--color-coral)",
    body: "Accessible component libraries and token-based systems that let distributed teams build consistently without a review bottleneck.",
  },
  {
    icon: Search,
    title: "UX Research",
    color: "var(--color-mint)",
    body: "Interviews, usability testing and synthesis that ground design decisions in evidence rather than opinion.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeader
          kicker="What I do"
          title="What I do"
          lead="Four practices, one through-line: make complex technical work make sense to the people doing it."
        />
        <ul className="grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, body, color }) => (
            <li
              key={title}
              className="lift-card group relative flex flex-col rounded-3xl border-2 border-on-tint p-8"
              style={{ background: color }}
            >
              <span
                className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl border-2 border-on-tint bg-white"
                aria-hidden
              >
                <Icon className="size-6 text-on-tint" />
              </span>
              <h3 className="font-display text-2xl font-bold text-on-tint">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-on-tint/85">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
