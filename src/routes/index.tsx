import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Calendar, Download, Layers, Users, Compass, Search, Moon, Sun, Quote, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { AvailabilityBadge } from "@/components/status/AvailabilityBadge";
import { SocialIconLinks } from "@/components/social/SocialIconLinks";
import { SupportLink } from "@/components/support/SupportLink";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aishat Muibudeen (Maya) — Product Designer & Open Source Lead" },
      {
        name: "description",
        content:
          "Product designer & open source community lead from Nigeria. Design systems, accessibility, and mentorship across AsyncAPI and beyond.",
      },
      { property: "og:title", content: "Aishat Muibudeen (Maya) — Product Designer" },
      {
        property: "og:description",
        content:
          "Design systems, accessibility, and open source mentorship. Selected work, talks, and writing.",
      },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Compass, title: "Product Design", color: "var(--color-cyan)",
    body: "From research and discovery to flows, prototypes and interfaces — I design end-to-end with the user at the centre." },
  { icon: Layers, title: "Design Systems", color: "var(--color-yellow)",
    body: "Accessible components, tokens and documentation that help teams build consistently and inclusively." },
  { icon: Search, title: "UX Research", color: "var(--color-coral)",
    body: "User interviews, usability testing, synthesis and insights that ground design decisions in real human needs." },
  { icon: Users, title: "Open Source & Community", color: "var(--color-mint)",
    body: "Contributor journeys, onboarding systems and community experiences that make participation sustainable." },
];

const work = [
  { tag: "Case study", title: "AsyncAPI Website Redesign",
    blurb: "Led the full redesign including design system, accessibility audit and GSoC mentorship.",
    swatch: "var(--color-cyan)",
    feedback: { name: "Project Lead", quote: "Maya transformed how our community experiences the website." } },
  { tag: "Design system", title: "AsyncAPI Design System",
    blurb: "Built the AsyncAPI design system from scratch — colour tokens, typography, components, WCAG AAA compliant.",
    swatch: "var(--color-yellow)",
    feedback: { name: "Maintainer", quote: "A rock-solid foundation our contributors love to build on." } },
  { tag: "UX research", title: "UX Research Project",
    blurb: "Research, synthesis and insights that shaped real product decisions.",
    swatch: "var(--color-coral)",
    feedback: { name: "Community Member", quote: "The insights reframed how we onboard new contributors." } },
];

type Pill = {
  label: string;
  color: string;
  rotate: number;
};

const leftPills: Pill[] = [
  { label: "Accessibility", color: "var(--color-cyan)", rotate: -6 },
  { label: "Design Systems", color: "var(--color-yellow)", rotate: 4 },
  { label: "UX Research", color: "var(--color-coral)", rotate: -3 },
  { label: "WCAG AAA", color: "var(--color-purple)", rotate: 5 },
];

const rightPills: Pill[] = [
  { label: "Open Source", color: "var(--color-mint)", rotate: 5 },
  { label: "Community Building", color: "var(--color-pink)", rotate: -4 },
  { label: "Figma", color: "var(--color-yellow)", rotate: 6 },
  { label: "Inclusive Design", color: "var(--color-purple)", rotate: -5 },
];

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <Work />
        <ContactCTA />
      </main>
      <SupportLink />
      <Footer />
    </div>
  );
}

function Nav() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span aria-hidden className="inline-block size-3 rounded-full bg-primary" />
          Maya
        </Link>
        <nav aria-label="Primary" className="hidden gap-8 text-sm font-medium md:flex">
          <Link className="hover:text-primary-deep" to="/about">About</Link>
          <Link className="hover:text-primary-deep" to="/portfolio">Portfolio</Link>
          <Link className="hover:text-primary-deep" to="/speaking">Speaking</Link>
          <Link className="hover:text-primary-deep" to="/writing">Writing</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setDark((d) => !d)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-secondary"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 border-2 border-foreground"
          >
            Contact <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border pt-24">
      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-16 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_minmax(0,auto)_1fr]">
          <div className="hidden flex-col gap-5 lg:flex" aria-hidden="false">
            {leftPills.map((p, i) => (
              <div key={p.label} className="flex" style={{ paddingLeft: `${i * 14}px` }}>
                <FloatingPill pill={p} delay={i * 0.4} />
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-3xl text-center">
        <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden />
          Aishat Muibudeen (Maya) · Product Designer &amp; Open Source Community Lead · Nigeria
        </p>
        <h1 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Designing humane products and communities that
          {" "}
          <span className="marker-underline">people can trust</span>.
        </h1>
        <div className="mt-8 flex justify-center">
          <AvailabilityBadge />
        </div>
        <div className="relative z-20 mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground border-2 border-foreground transition-transform hover:-translate-y-0.5"
          >
            View my work <ArrowRight className="size-4" aria-hidden />
          </a>
          <a
            href="https://drive.google.com/file/d/1E2Pbu9_9dukzk96Z7fL357P32qSDcvRj/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-7 py-3.5 text-base font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            <Download className="size-4" aria-hidden /> Download CV
          </a>
        </div>
          </div>
          <div className="hidden flex-col items-end gap-5 lg:flex">
            {rightPills.map((p, i) => (
              <div key={p.label} className="flex" style={{ paddingRight: `${i * 14}px` }}>
                <FloatingPill pill={p} delay={i * 0.5 + 0.2} />
              </div>
            ))}
          </div>
        </div>
        {/* Mobile pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 lg:hidden">
          {[...leftPills, ...rightPills].map((p, i) => (
            <FloatingPill key={p.label} pill={p} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingPill({ pill, delay = 0 }: { pill: Pill; delay?: number }) {
  return (
    <motion.button
      type="button"
      drag
      dragSnapToOrigin
      dragElastic={0.6}
      dragTransition={{ bounceStiffness: 220, bounceDamping: 14 }}
      animate={{ y: [0, -6, 0, 4, 0], rotate: [pill.rotate, pill.rotate + 1.5, pill.rotate] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={{ rotate: [pill.rotate, pill.rotate + 6, pill.rotate - 6, pill.rotate], transition: { duration: 0.5 } }}
      whileTap={{ scale: 1.08 }}
      initial={{ rotate: pill.rotate }}
      className="cursor-grab select-none rounded-full border-2 border-foreground px-4 py-2 text-sm font-semibold text-foreground shadow-[3px_3px_0_0_var(--color-foreground)] active:cursor-grabbing"
      style={{
        background: pill.color,
        touchAction: "none",
      }}
      aria-label={`${pill.label} — draggable tag`}
    >
      {pill.label}
    </motion.button>
  );
}

function SectionHeader({ kicker, title, lead }: { kicker: string; title: string; lead?: string }) {
  return (
    <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-deep">
          <span className="h-px w-8 bg-primary-deep" aria-hidden /> {kicker}
        </p>
        <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">{title}</h2>
      </div>
      {lead && <p className="max-w-md text-base text-muted-foreground">{lead}</p>}
    </div>
  );
}

function Services() {
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

function Work() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeader
          kicker="Portfolio"
          title="Selected work"
          lead="A few projects I've led recently — happy to walk through specifics on a call."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {work.map((w) => (
            <div
              key={w.title}
              className="lift-card group relative flex flex-col overflow-hidden rounded-3xl border-2 border-foreground bg-card"
            >
              <div
                className="relative flex aspect-[4/3] items-end p-6"
                style={{ background: w.swatch }}
              >
                <div
                  aria-hidden
                  className="absolute inset-4 rounded-2xl border-2 border-dashed border-foreground/30 bg-background/30 flex items-center justify-center text-xs font-medium text-foreground/60"
                >
                  Image placeholder
                </div>
                <span className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-foreground">
                  {w.tag}
                </span>
                <ArrowUpRight
                  className="absolute right-5 top-5 size-7 text-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-display text-2xl font-bold leading-tight">{w.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{w.blurb}</p>
                <figure className="mt-2 rounded-2xl border border-border bg-secondary/40 p-4">
                  <Quote className="size-4 text-primary-deep" aria-hidden />
                  <blockquote className="mt-1 text-sm italic leading-relaxed text-foreground/85">
                    "{w.feedback.quote}"
                  </blockquote>
                  <figcaption className="mt-2 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <span aria-hidden className="inline-block size-6 rounded-full" style={{ background: w.swatch }} />
                    {w.feedback.name}
                  </figcaption>
                </figure>
                <a
                  href="#"
                  className="mt-auto inline-flex w-fit items-center gap-1 rounded-full border-2 border-foreground bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary"
                >
                  View case study <ArrowRight className="size-4" aria-hidden />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-7 py-3 text-base font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            View all work <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 70% at 20% 10%, var(--color-cyan) 0%, transparent 60%), radial-gradient(50% 60% at 90% 90%, var(--color-yellow) 0%, transparent 60%), var(--color-background)",
        }}
      />
      <div className="mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
        <h2 className="font-display text-4xl font-extrabold leading-[1.05] md:text-6xl">
          Let's build something <span className="marker-warm">meaningful</span> together.
        </h2>
        <div className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background border-2 border-foreground transition-transform hover:-translate-y-0.5"
          >
            Let's talk <ArrowRight className="size-5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aishat Muibudeen. Designed &amp; built with care in Lagos.
        </p>
        <ul className="flex flex-wrap gap-5 text-sm font-semibold">
          <li><a className="hover:text-primary-deep" href="#">Twitter / X</a></li>
          <li><a className="hover:text-primary-deep" href="#">LinkedIn</a></li>
          <li><a className="hover:text-primary-deep" href="#">GitHub</a></li>
          <li><a className="hover:text-primary-deep" href="#">Read.cv</a></li>
        </ul>
      </div>
    </footer>
  );
}
