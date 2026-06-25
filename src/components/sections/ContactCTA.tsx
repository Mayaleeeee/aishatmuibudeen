import { Calendar, Linkedin } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/aishatmuibudeen/60min"; // Placeholder — Maya will replace with Calendly link.

/**
 * Closing CTA above the footer. Anchored as #contact so the nav
 * "Hire me →" link can smooth-scroll to it.
 */
export function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-24">
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
          Ready when <span className="marker-warm">you are.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/85 md:text-xl">
          I'm available for product design work, remote, hybrid, or open to relocation. If you're
          building products that need to be accessible, well-researched, and genuinely useful, I'd
          love to work with you.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/aishatmuibudeen/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-base font-semibold text-background border-2 border-foreground transition-transform hover:-translate-y-0.5"
          >
            <Linkedin className="size-4" aria-hidden /> Connect on LinkedIn
          </a>
          <a
            href={CALENDLY_URL}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground border-2 border-foreground transition-transform hover:-translate-y-0.5"
          >
            <Calendar className="size-4" aria-hidden /> Book a 20-min intro
          </a>
        </div>
      </div>
    </section>
  );
}
