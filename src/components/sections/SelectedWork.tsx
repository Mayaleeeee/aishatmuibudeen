import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { portfolioProjects } from "@/components/portfolio/projects";

/**
 * Homepage "Selected work" — shows the three featured projects and a
 * "View all work" CTA that leads to the full portfolio.
 */
export function SelectedWork() {
  const featured = portfolioProjects.slice(0, 3);

  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeader
          kicker="Portfolio"
          title="Selected work"
          lead="A few projects I've led recently — happy to walk through specifics on a call."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <Link
                to="/portfolio/$slug"
                params={{ slug: project.slug }}
                className="lift-card group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-foreground bg-card"
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
                    <div
                      aria-hidden
                      className="shimmer absolute inset-4 rounded-2xl"
                    />
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
                  <span className="mt-auto inline-flex w-fit items-center gap-1 rounded-full border-2 border-foreground bg-background px-4 py-2 text-sm font-semibold text-foreground">
                    View case study <ArrowRight className="size-4" aria-hidden />
                  </span>
                </div>
              </Link>
            </motion.div>
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
