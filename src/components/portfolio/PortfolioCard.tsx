import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "./projects";

/**
 * Clickable card for a single portfolio project. Navigates to the full
 * case study page when activated.
 */
export function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: project.slug }}
      className="lift-card group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-foreground bg-card"
    >
      <div
        className="relative flex aspect-[4/3] items-end border-b-2 border-on-tint p-6"
        style={{ background: project.cardCover ? undefined : project.tint }}
      >
        {project.cardCover ? (
          <img
            src={project.cardCover}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 size-full bg-secondary object-contain p-5"
          />
        ) : (
          <div aria-hidden className="shimmer absolute inset-4 rounded-2xl" />
        )}
        <span className="relative z-10 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
          {project.tag}
        </span>
        <ArrowUpRight
          className="absolute right-5 top-5 size-7 text-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-2xl font-bold leading-tight">{project.title}</h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.blurb}</p>
        <span className="mt-auto inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary-deep">
          View case study →
        </span>
      </div>
    </Link>
  );
}
