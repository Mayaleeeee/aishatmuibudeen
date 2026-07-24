import { createElement } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { portfolioProjects, type PortfolioProject } from "@/components/portfolio/projects";

/**
 * Case-study page. Sections render only when the project has content for
 * them, so projects without long-form copy show a clean short page rather
 * than placeholders.
 */
export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const idx = portfolioProjects.findIndex((p) => p.slug === params.slug);
    if (idx === -1) throw notFound();
    const project = portfolioProjects[idx];
    const total = portfolioProjects.length;
    const next = portfolioProjects[(idx + 1) % total];
    const prev = portfolioProjects[(idx - 1 + total) % total];
    return { project, next, prev };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Aishat Muibudeen (Maya)` },
          { name: "description", content: loaderData.project.description },
        ]
      : [{ title: "Project — Aishat Muibudeen (Maya)" }],
  }),
  component: ProjectDetailPage,
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-6 py-24 pt-32">
      <h1 className="font-display text-4xl font-bold">Project not found</h1>
      <Link to="/portfolio" className="mt-4 inline-block text-primary-deep hover:underline">
        ← Back to portfolio
      </Link>
    </main>
  ),
});

function ProjectDetailPage() {
  const { project, next, prev } = Route.useLoaderData();
  const tags = project.tag.split(" · ");

  return (
    <>
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-32">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-deep hover:underline"
        >
          <ArrowLeft className="size-4" aria-hidden /> Back to Portfolio
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-8"
        >
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-xl text-muted-foreground">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t: string, i: number) => (
              <span
                key={t}
                className="rounded-full border-2 border-on-tint px-3 py-1 text-xs font-semibold text-on-tint"
                style={{ background: tagTint(i) }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <MetaPill label="Role" value={project.role} />
            <MetaPill label="Timeline" value={project.timeline} />
            <MetaPill label="Tools" value={project.tools.join(" · ")} />
          </div>

          {project.evidenceUrl && (
            <EvidenceLink url={project.evidenceUrl} label={project.evidenceLabel} />
          )}
        </motion.header>

        {project.cover && (
          <img
            src={project.cover}
            alt={`${project.title} — case study cover`}
            className="mt-10 w-full rounded-2xl border-2 border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_18px_40px_-18px_var(--color-primary)]"
          />
        )}

        <ImpactStrip project={project} />

        {!project.overview && (
          <section className="mt-16 rounded-3xl border-2 border-dashed border-border p-8 text-center">
            <p className="font-display text-xl font-bold">Full case study coming soon</p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              The summary above covers the essentials. I'm writing up the process, decisions
              and outcome in detail — check back shortly, or ask me about it directly.
            </p>
          </section>
        )}

        {project.overview && (
          <CaseSection title="Overview">
            <p className="max-w-3xl text-base leading-relaxed text-foreground/85">
              {project.overview}
            </p>
          </CaseSection>
        )}

        {project.problemDetail && (
          <CaseSection title="The Problem">
            <p className="max-w-3xl text-base leading-relaxed text-foreground/85">
              {project.problemDetail}
            </p>
            <SectionImages project={project} section="problem" />
          </CaseSection>
        )}

        {project.process && project.process.length > 0 && (
          <CaseSection title="My Process">
            <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {project.process.map((step, i) => (
                <li key={step.label} className="flex flex-col">
                  <span className="inline-flex size-10 items-center justify-center rounded-full border-2 border-foreground bg-primary font-display text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold">{step.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{step.body}</p>
                </li>
              ))}
            </ol>
            <SectionImages project={project} section="process" />
          </CaseSection>
        )}

        {project.decisions && project.decisions.length > 0 && (
          <CaseSection title="Key Decisions">
            <div className="grid gap-6 md:grid-cols-2">
              {project.decisions.map((d) => (
                <article
                  key={d.title}
                  className="rounded-3xl border-2 border-foreground bg-card p-6"
                >
                  <h3 className="font-display text-xl font-bold">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                    <span className="font-semibold text-primary-deep">Why I made this call: </span>
                    {d.why}
                  </p>
                </article>
              ))}
            </div>
            <SectionImages project={project} section="decisions" />
          </CaseSection>
        )}

        {(project.metrics?.length || project.outcome) && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-16"
            aria-label="Outcome"
          >
            <h2 className="font-display text-3xl font-bold">Outcome</h2>
            {project.metrics && project.metrics.length > 0 && (
              <div className="mt-6 grid gap-4 rounded-3xl bg-foreground p-6 text-background md:grid-cols-3 md:p-8">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-background/15 p-6 text-center"
                  >
                    <p className="font-display text-4xl font-extrabold text-primary md:text-5xl">
                      {m.stat}
                    </p>
                    <p className="mt-3 text-sm font-medium text-background/85">{m.label}</p>
                  </div>
                ))}
              </div>
            )}
            {project.outcome && (
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/85">
                {project.outcome}
              </p>
            )}
            <SectionImages project={project} section="outcome" />
            {project.evidenceUrl && (
              <EvidenceLink url={project.evidenceUrl} label={project.evidenceLabel} />
            )}
          </motion.section>
        )}
      </main>

      <ProjectNav prev={prev} next={next} />
    </>
  );
}

function tagTint(i: number) {
  const tints = [
    "oklch(0.965 0.035 205)",
    "oklch(0.975 0.055 95)",
    "oklch(0.955 0.04 38)",
    "oklch(0.96 0.045 160)",
    "oklch(0.96 0.04 300)",
  ];
  return tints[i % tints.length];
}

function Figure({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="group mt-10">
      <img
        src={src}
        alt={caption}
        loading="lazy"
        className="w-full rounded-2xl border-2 border-border bg-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_18px_40px_-18px_var(--color-primary)]"
      />
      <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

function SectionImages({
  project,
  section,
}: {
  project: PortfolioProject;
  section: "problem" | "process" | "decisions" | "outcome";
}) {
  const shots = (project.images ?? []).filter((i) => i.section === section);
  if (shots.length === 0) return null;
  return (
    <>
      {shots.map((i) => (
        <Figure key={i.src} src={i.src} caption={i.caption} />
      ))}
    </>
  );
}

function EvidenceLink({ url, label }: { url: string; label?: string }) {
  return createElement(
    "a",
    {
      href: url,
      target: "_blank",
      rel: "noreferrer",
      className:
        "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-deep hover:underline",
    },
    label ?? "View the source",
    createElement(ExternalLink, { className: "size-4", "aria-hidden": true }),
  );
}

function MetaPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-full border-2 border-foreground bg-card px-5 py-2">
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-deep">
        {label}
      </span>
      <span className="ml-2 text-sm font-semibold text-foreground">{value}</span>
    </div>
  );
}

function ImpactStrip({ project }: { project: PortfolioProject }) {
  const cols: { header: string; body: string }[] = [
    { header: "The Problem", body: project.impact.problem },
    { header: "What I Did", body: project.impact.whatIDid },
    { header: "The Impact", body: project.impact.impact },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-10 rounded-3xl border-2 border-foreground p-2"
      style={{ background: "oklch(0.965 0.035 205)" }}
      aria-label="Project impact summary"
    >
      <div className="grid gap-px overflow-hidden rounded-2xl bg-foreground/10 md:grid-cols-3">
        {cols.map((c) => (
          <div key={c.header} className="bg-card p-6 md:p-8">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary-deep">
              {c.header}
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground/85">{c.body}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function CaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-16"
    >
      <h2 className="font-display text-3xl font-bold">{title}</h2>
      <div className="mt-6">{children}</div>
    </motion.section>
  );
}

function ProjectNav({ prev, next }: { prev: PortfolioProject; next: PortfolioProject }) {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-5xl gap-4 px-6 py-12 md:grid-cols-2">
        <Link
          to="/portfolio/$slug"
          params={{ slug: prev.slug }}
          className="group flex flex-col gap-3 rounded-3xl border-2 border-on-tint p-8 transition-transform hover:-translate-y-1"
          style={{ background: "var(--color-mint)" }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-on-tint/80">
            <ArrowLeft className="size-4" aria-hidden /> Previous
          </span>
          <span className="font-display text-2xl font-extrabold text-on-tint md:text-3xl">
            {prev.title}
          </span>
        </Link>

        <Link
          to="/portfolio/$slug"
          params={{ slug: next.slug }}
          className="group flex flex-col gap-3 rounded-3xl border-2 border-on-tint p-8 transition-transform hover:-translate-y-1 md:items-end"
          style={{ background: "var(--color-cyan)" }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-on-tint/80">
            Next project <ArrowRight className="size-4" aria-hidden />
          </span>
          <span className="font-display text-2xl font-extrabold text-on-tint md:text-right md:text-3xl">
            {next.title}
          </span>
        </Link>
      </div>
    </section>
  );
}
