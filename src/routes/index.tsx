import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Sparkles,
  Layers,
  Users,
  Compass,
  Mic2,
  Mail,
} from "lucide-react";

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
  {
    icon: Compass,
    title: "Product Design",
    body:
      "End-to-end product work — research, IA, prototyping, hand-off. Shipping clarity, not pixels.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    body:
      "Tokens, components, governance. The kind of system designers and engineers actually adopt.",
  },
  {
    icon: Users,
    title: "Open Source Community",
    body:
      "Leading design at AsyncAPI — turning a contributor base into a working design team.",
  },
  {
    icon: Sparkles,
    title: "Mentorship",
    body:
      "GSoC, Outreachy, and 1:1 mentoring. Helping new designers ship their first real OSS work.",
  },
];

const work = [
  {
    year: "2024",
    tag: "Website redesign",
    title: "AsyncAPI website redesign",
    blurb:
      "Led the full redesign — design system, accessibility audit, and GSoC mentorship — for the home of the event-driven API spec.",
    swatch: "var(--color-primary)",
  },
  {
    year: "2023",
    tag: "Design system",
    title: "AsyncAPI Design System",
    blurb:
      "Built from scratch: colour tokens, typography scale, reusable components — WCAG 2.0 AAA compliant by default.",
    swatch: "var(--color-highlight)",
  },
  {
    year: "2024",
    tag: "UX research",
    title: "Contributor onboarding research",
    blurb:
      "User research, synthesis, and insights that reshaped how first-time contributors land in an OSS project.",
    swatch: "var(--color-accent)",
  },
];

const talks = [
  {
    event: "Open Source Summit",
    year: "2024",
    title: "Designing in the open: a playbook for OSS design teams",
  },
  {
    event: "AsyncAPI Conf",
    year: "2023",
    title: "From figma file to design system the community actually uses",
  },
  {
    event: "DevFest Lagos",
    year: "2023",
    title: "Accessibility is not a phase — building AAA from day one",
  },
  {
    event: "Config (Friends of Figma)",
    year: "2024",
    title: "Mentoring designers through their first open source contribution",
  },
];

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <Work />
        <Speaking />
        <Belief />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#main" className="flex items-center gap-2 font-display text-lg font-bold">
          <span aria-hidden className="inline-block size-3 rounded-full bg-primary" />
          Maya
        </a>
        <nav aria-label="Primary" className="hidden gap-8 text-sm font-medium md:flex">
          <a className="hover:text-primary-deep" href="#work">Work</a>
          <a className="hover:text-primary-deep" href="#services">What I do</a>
          <a className="hover:text-primary-deep" href="#speaking">Speaking</a>
          <a className="hover:text-primary-deep" href="#contact">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
        >
          Let's talk <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* decorative shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 top-24 size-72 rounded-full opacity-70 blur-3xl"
          style={{ background: "var(--color-primary)" }}
        />
        <div
          className="absolute -right-20 bottom-10 size-72 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--color-highlight)" }}
        />
        <svg
          className="absolute right-10 top-32 hidden md:block"
          width="160" height="160" viewBox="0 0 160 160" fill="none"
        >
          <circle cx="80" cy="80" r="70" stroke="var(--color-foreground)" strokeWidth="2" strokeDasharray="4 6" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-28 pt-20 md:pt-28 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden />
            Lagos, Nigeria — available for select projects
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Designing in the
            <br />
            <span className="marker-underline">open</span>, with
            <br />
            care &amp; <span className="marker-warm">craft</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm <strong className="text-foreground">Aishat Muibudeen</strong> — Maya. A product designer and open source community lead. I build design systems, ship accessible product work, and mentor designers contributing to OSS for the first time.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              View my work <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
            >
              <Download className="size-4" aria-hidden /> Download CV
            </a>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat k="6+" v="Years designing products" />
            <Stat k="40+" v="Mentees shipped to OSS" />
            <Stat k="AAA" v="Accessibility, by default" />
          </dl>
        </div>

        <aside className="relative" aria-label="Portrait card">
          <div className="relative ml-auto w-full max-w-sm">
            <div
              className="absolute -inset-3 -z-10 rounded-3xl"
              style={{ background: "var(--color-primary)" }}
              aria-hidden
            />
            <div className="rounded-3xl border-2 border-foreground bg-card p-6 shadow-[var(--shadow-card)]">
              <div
                className="mb-5 flex aspect-[4/5] items-end justify-start overflow-hidden rounded-2xl p-5"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary), var(--color-highlight))",
                }}
              >
                <span className="font-display text-7xl font-extrabold text-foreground">M</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-bold">Maya</p>
                  <p className="text-sm text-muted-foreground">she/her · Lagos</p>
                </div>
                <span className="rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
                  Open to chat
                </span>
              </div>
            </div>
            <span
              className="absolute -right-4 -top-4 rotate-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground"
              style={{ animation: "float-soft 6s ease-in-out infinite" }}
            >
              ✦ Product Designer
            </span>
            <span
              className="absolute -bottom-4 -left-4 -rotate-3 rounded-full border-2 border-foreground bg-background px-3 py-1 text-xs font-bold"
              style={{ animation: "float-soft 7s ease-in-out infinite 1s" }}
            >
              OSS Lead · AsyncAPI
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-display text-3xl font-bold text-primary-deep">{k}</dt>
      <dd className="mt-1 text-sm text-muted-foreground">{v}</dd>
    </div>
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
          title="A small toolkit, used with intention."
          lead="Four practices that overlap more than they don't — product design grounded in research, design systems built for adoption, community work, and mentorship."
        />
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              className="lift-card group relative flex flex-col rounded-3xl border-2 border-foreground bg-card p-6"
            >
              <span
                className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl"
                style={{
                  background:
                    i % 2 === 0 ? "var(--color-primary)" : "var(--color-highlight)",
                }}
                aria-hidden
              >
                <Icon className="size-6 text-foreground" />
              </span>
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              <span
                className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-primary-deep"
                aria-hidden
              >
                0{i + 1}
              </span>
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
          kicker="Featured work"
          title="Selected case studies."
          lead="A few projects I've led recently. Longer write-ups behind each card — happy to walk through specifics on a call."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {work.map((w) => (
            <a
              key={w.title}
              href="#"
              className="lift-card group relative flex flex-col overflow-hidden rounded-3xl border-2 border-foreground bg-card"
              aria-label={`${w.title} — ${w.tag} (${w.year})`}
            >
              <div
                className="relative flex aspect-[4/3] items-end p-6"
                style={{ background: w.swatch }}
              >
                <span className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-foreground">
                  {w.tag} · {w.year}
                </span>
                <ArrowUpRight
                  className="absolute right-5 top-5 size-7 text-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-display text-2xl font-bold leading-tight">{w.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{w.blurb}</p>
                <span className="mt-auto pt-4 text-sm font-semibold text-primary-deep">
                  Read case study →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Speaking() {
  return (
    <section id="speaking" className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="h-px w-8 bg-primary" aria-hidden /> Speaking
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-background md:text-5xl">
              On stage &amp; in community calls.
            </h2>
          </div>
          <p className="max-w-md text-base text-background/80">
            Talks on design systems, accessibility, and what it takes to design in the open.
          </p>
        </div>

        <ul className="divide-y divide-background/15 border-y border-background/15">
          {talks.map((t) => (
            <li key={t.title} className="group grid grid-cols-12 items-center gap-4 py-6">
              <span className="col-span-2 font-mono text-sm text-primary md:col-span-1">{t.year}</span>
              <span className="col-span-10 text-sm font-semibold uppercase tracking-widest text-background/70 md:col-span-3">
                {t.event}
              </span>
              <span className="col-span-12 font-display text-xl font-bold leading-snug text-background md:col-span-7 md:text-2xl">
                <Mic2 className="mr-3 inline size-5 text-primary" aria-hidden />
                {t.title}
              </span>
              <ArrowUpRight
                className="col-span-12 size-5 justify-self-end text-background/60 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:col-span-1"
                aria-hidden
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Belief() {
  return (
    <section className="border-b border-border" aria-label="A belief">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-primary-deep">
          A short belief
        </p>
        <blockquote className="font-display text-3xl font-bold leading-tight md:text-5xl">
          <span aria-hidden className="text-primary">“</span>
          Accessibility isn't a phase at the end of the project. It's the
          <span className="marker-underline"> first decision</span> — and every decision after that.
          <span aria-hidden className="text-primary">”</span>
        </blockquote>
        <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">— Maya</p>
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
            "radial-gradient(60% 70% at 20% 10%, var(--color-primary) 0%, transparent 60%), radial-gradient(50% 60% at 90% 90%, var(--color-highlight) 0%, transparent 60%), var(--color-background)",
        }}
      />
      <div className="mx-auto max-w-5xl px-6 py-28 text-center md:py-36">
        <h2 className="font-display text-5xl font-extrabold leading-[0.95] md:text-7xl">
          Got a project? <br />
          <span className="marker-warm">Let's build it well.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/80">
          Open to product design engagements, design system audits, and OSS collaborations.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:hello@mayadesigns.dev"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-base font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            <Mail className="size-5" aria-hidden /> hello@mayadesigns.dev
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-7 py-4 text-base font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            Book a 20-min intro <ArrowRight className="size-5" aria-hidden />
          </a>
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
