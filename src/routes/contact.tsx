import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Linkedin, Github, Instagram, Calendar, Heart } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aishat Muibudeen (Maya)" },
      { name: "description", content: "Get in touch with Maya for product design and OSS collaborations." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const socials = [
    { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aishatmuibudeen/", color: "var(--color-cyan)" },
    { Icon: Github, label: "GitHub", href: "https://github.com/Mayaleeeee", color: "var(--color-yellow)" },
    { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/maya_ux_ui", color: "var(--color-coral)" },
  ];
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 pt-32">
      <Link to="/" className="text-sm text-primary-deep hover:underline">← Home</Link>
      <h1 className="mt-6 font-display text-5xl font-extrabold leading-tight md:text-6xl">
        Got a project? <span className="marker-underline">Let's build it well.</span>
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Open to product design engagements, design system audits, and open source collaborations.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="mailto:muibudeenaishat@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background border-2 border-foreground transition-transform hover:-translate-y-0.5"
        >
          <Mail className="size-4" /> muibudeenaishat@gmail.com
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold border-2 border-foreground transition-transform hover:-translate-y-0.5"
        >
          <Calendar className="size-4" /> Book a 20-min intro
        </a>
      </div>

      <div className="mt-12">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary-deep">Find me</p>
        <ul className="flex flex-wrap gap-4">
          {socials.map(({ Icon, label, href, color }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group inline-flex size-12 items-center justify-center rounded-full border-2 border-foreground bg-card transition-all hover:-translate-y-0.5"
                style={{ ['--hover-bg' as string]: color }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = color; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = ''; }}
              >
                <Icon className="size-5 text-foreground" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 rounded-3xl border-2 border-foreground bg-card p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-deep">Support</p>
        <h2 className="mt-2 font-display text-2xl font-bold">Sponsor my work on GitHub</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          If my open source and design work has helped you, consider sponsoring — it keeps the lights on.
        </p>
        <a
          href="https://github.com/sponsors/Mayaleeeee"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
        >
          <Heart className="size-4 text-[var(--color-pink)]" aria-hidden /> Sponsor on GitHub
        </a>
      </div>
    </main>
  );
}