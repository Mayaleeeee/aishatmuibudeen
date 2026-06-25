import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Linkedin, Heart } from "lucide-react";
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

function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 pt-32">
      <Link to="/" className="text-sm text-primary-deep hover:underline">← Home</Link>
      <h1 className="mt-6 font-display text-5xl font-extrabold leading-tight md:text-6xl">
        Designing for <span className="marker-underline">people</span>, systems &amp; community.
      </h1>

      <div className="mt-8">
        <AvailabilityBadge text="Open to new opportunities" />
      </div>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/90">
        <p>
          I'm a <strong>Product Designer</strong> with over 5 years of experience across UX, UI, web design and UX research, focused on creating accessible, user-centred digital products that align with business goals and stakeholder needs.
        </p>
        <p>
          A significant part of my work sits at the intersection of design, open source and developer communities. At <strong>AsyncAPI</strong> and <strong>OpenNest Africa</strong>, I've led design initiatives, contributed to design systems, mentored contributors, and collaborated with technical and non-technical stakeholders to improve usability, contributor experience and overall product outcomes. My work involves balancing user needs, engineering constraints and organisational goals to create scalable solutions.
        </p>
        <p>
          I'm especially interested in designing for complex systems where user needs, business priorities and technical constraints must come together — with a strong focus on accessibility, design systems and open-source collaboration.
        </p>
        <p>
          Outside of work, I enjoy reading, writing, watching films, travelling and spending time in nature.
        </p>
      </div>

      <section className="mt-14 rounded-3xl border-2 border-foreground bg-card p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-deep">Availability</p>
        <h2 className="mt-2 font-display text-3xl font-bold">Available for: Remote · Hybrid · Open to Relocation</h2>
        <div className="mt-5">
          <AvailabilityBadge text="Open to new opportunities" />
        </div>
      </section>

      <section className="mt-8 rounded-3xl border-2 border-foreground bg-card p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-deep">Languages</p>
        <h2 className="mt-2 font-display text-3xl font-bold">I speak &amp; work in</h2>
        <ul className="mt-5 grid gap-3 text-base sm:grid-cols-2">
          <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-[var(--color-cyan)]" /> English — Native / Fluent</li>
          <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-[var(--color-yellow)]" /> German — B2 (Goethe-Zertifikat B2)</li>
        </ul>
      </section>

      <section className="mt-14 rounded-3xl border-2 border-foreground bg-card p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-deep">Available for hire</p>
        <h2 className="mt-2 font-display text-3xl font-bold">I'm open to freelance & contract work in:</h2>
        <ul className="mt-5 grid gap-2 text-base sm:grid-cols-2">
          <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-[var(--color-cyan)]" /> Product & Brand Design</li>
          <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-[var(--color-yellow)]" /> UX Research</li>
          <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-[var(--color-coral)]" /> Community Management</li>
          <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-[var(--color-mint)]" /> Product Strategy</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:muibudeenaishat@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background border-2 border-foreground transition-transform hover:-translate-y-0.5"
          >
            <Mail className="size-4" /> muibudeenaishat@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/aishatmuibudeen/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            <Linkedin className="size-4" /> LinkedIn
          </a>
        </div>
      </section>

      <section className="mt-8 rounded-3xl border-2 border-foreground bg-card p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-deep">Support</p>
        <h2 className="mt-2 font-display text-3xl font-bold">Sponsor my work on GitHub</h2>
        <p className="mt-2 text-base text-muted-foreground">
          If my open source and design work has helped you, consider sponsoring — it directly supports more inclusive contributor experiences.
        </p>
        <a
          href="https://github.com/sponsors/Mayaleeeee"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
        >
          <Heart className="size-4 text-[var(--color-pink)]" aria-hidden /> Sponsor on GitHub
        </a>
      </section>
    </main>
  );
}