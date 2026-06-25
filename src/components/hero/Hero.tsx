import { ArrowRight, Download } from "lucide-react";
import { AvailabilityBadge } from "@/components/status/AvailabilityBadge";
import { FloatingPill } from "./FloatingPill";
import { leftHeroTags, rightHeroTags } from "./heroData";

const CV_URL = "https://drive.google.com/file/d/1E2Pbu9_9dukzk96Z7fL357P32qSDcvRj/view?usp=drive_link";

/**
 * Homepage hero. Order from top to bottom:
 * 1. Availability badge (pulsing dot)
 * 2. Name label
 * 3. Headline
 * 4. CTA buttons (View my work / Download CV)
 * Floating skill pills flank the headline on desktop.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border pt-24">
      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-16 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_minmax(0,auto)_1fr]">
          <div className="hidden flex-col gap-5 lg:flex">
            {leftHeroTags.map((p, i) => (
              <div key={p.label} className="flex" style={{ paddingLeft: `${i * 14}px` }}>
                <FloatingPill pill={p} delay={i * 0.4} />
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <AvailabilityBadge />
            </div>
            <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              Aishat Muibudeen (Maya) · Product Designer &amp; Open Source Community Lead · Nigeria
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Designing humane products and communities that{" "}
              <span className="marker-underline">people can trust</span>.
            </h1>
            <div className="relative z-20 mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground border-2 border-foreground transition-transform hover:-translate-y-0.5"
              >
                View my work <ArrowRight className="size-4" aria-hidden />
              </a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-7 py-3.5 text-base font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                <Download className="size-4" aria-hidden /> Download CV
              </a>
            </div>
          </div>

          <div className="hidden flex-col items-end gap-5 lg:flex">
            {rightHeroTags.map((p, i) => (
              <div key={p.label} className="flex" style={{ paddingRight: `${i * 14}px` }}>
                <FloatingPill pill={p} delay={i * 0.5 + 0.2} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3 lg:hidden">
          {[...leftHeroTags, ...rightHeroTags].map((p, i) => (
            <FloatingPill key={p.label} pill={p} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}