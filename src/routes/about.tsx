import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Linkedin, Heart } from "lucide-react";

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
        Have you ever felt <span className="marker-underline">excluded</span> in a space?
      </h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/90">
        <p>
          Have you ever thought, <em>This space isn't for me</em>, simply because you didn't come from the right background or didn't feel technical enough to belong?
        </p>
        <p>
          That was me three years ago. I came from a background where technology felt like a distant world — a space you hear about but never think you can be part of. The idea of open source felt intimidating, and I didn't know where to begin.
        </p>
        <p>
          But I didn't give up. With support from communities like <strong>AsyncAPI</strong> and <strong>She Code Africa</strong>, I found a way in and discovered that diverse voices, lived experiences, and creative perspectives truly matter here.
        </p>
        <p>
          Hello, my name is <strong>Aishat Muibudeen</strong> (you can call me Maya).
        </p>
        <p>
          I volunteer as the <strong>Lead Design Maintainer</strong> and Code of Conduct team member at AsyncAPI, where I guide design decisions and visual identity across the website, brand, and conference repositories. I also help shape a safer, more welcoming contributor experience for all.
        </p>
        <p>
          I'm also a co-founder of <strong>OpenNest-Africa</strong>, a global community supporting beginners in open source — from writers and designers to developers or explorers. We provide mentorship, guidance, and real support to help people get started and feel seen and celebrated as they do.
        </p>
        <p>
          By sponsoring me, you're supporting my work, investing in the future of open source, and creating spaces where everyone feels like they belong.
        </p>
        <p>
          You're helping me continue to build the bridges I once needed — and now create for others.
        </p>
      </div>

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