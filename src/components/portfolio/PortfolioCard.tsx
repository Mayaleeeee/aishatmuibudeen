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
        className="relative flex aspect-[4/3] items-end p-6"
        style={{ background: project.color }}
      >
        <div
          aria-hidden
          className="absolute inset-4 rounded-2xl border-2 border-dashed border-foreground/30 bg-background/30 flex items-center justify-center text-xs font-medium text-foreground/60"
        >
          Image placeholder
        </div>
        <span className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-foreground">
          {project.tag}
        </span>
        <ArrowUpRight
          className="absolute right-5 top-5 size-7 text-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-2xl font-bold leading-tight">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.blurb}</p>
        <span className="mt-auto inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary-deep">
          View case study →
        </span>
      </div>
    </Link>
  );
}