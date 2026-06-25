import { Compass, Layers, Search, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

/**
 * "What I do" — four practice areas Maya offers, rendered as a 2-column
 * grid of colour-coded cards.
 */
const services = [
  {
    icon: Compass,
    title: "Product Design",
    color: "var(--color-cyan)",
    body: "End-to-end design across UX, UI, interaction and visual — from early research to shipped product.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    color: "var(--color-yellow)",
    body: "Accessible, scalable component libraries and token-based systems that help teams build consistently.",
  },
  {
    icon: Search,
    title: "UX Research",
    color: "var(--color-coral)",
    body: "User interviews, usability testing and synthesis that ground every design decision in real evidence.",
  },
  {
    icon: Users,
    title: "Open Source & Community",
    color: "var(--color-mint)",
    body: "Design leadership, contributor onboarding and community infrastructure for open source ecosystems.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeader
          kicker="What I do"
          title="What I do"
          lead="Four practices, one through-line: build for people — with people."
        />
        <ul className="grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, body, color }) => (
            <li
              key={title}
              className="lift-card group relative flex flex-col rounded-3xl border-2 border-foreground p-8"
              style={{ background: color }}
            >
              <span
                className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl border-2 border-foreground bg-background"
                aria-hidden
              >
                <Icon className="size-6 text-foreground" />
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/85">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}