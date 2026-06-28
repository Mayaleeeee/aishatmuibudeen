import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Nav } from "@/components/nav/Nav";
import { Footer } from "@/components/footer/Footer";
import { portfolioProjects, type PortfolioProject } from "@/components/portfolio/projects";

/**
 * Recruiter-friendly case-study page. Order:
 * Back link · Hero · Hero image · Impact strip · Overview · Problem ·
 * Process · Key Decisions · Metrics · Gallery · Next project.
 * Body text is placeholder — Maya fills in real copy per project.
 */
export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const idx = portfolioProjects.findIndex((p) => p.slug === params.slug);
    if (idx === -1) throw notFound();
    const project = portfolioProjects[idx];
    const next = portfolioProjects[(idx + 1) % portfolioProjects.length];
    return { project, next };
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

const TEXT = "[ Text placeholder ]";

function ProjectDetailPage() {
  const { project, next } = Route.useLoaderData();
  const tags = project.tag.split(" · ");

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-32">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-deep hover:underline"
        >
          <ArrowLeft className="size-4" aria-hidden /> Back to Portfolio
        </Link>

        {/* HERO */}
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
                className="rounded-full border-2 border-foreground px-3 py-1 text-xs font-semibold"
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
        </motion.header>

        {/* HERO IMAGE */}
        <ImagePlaceholder className="mt-10 h-[450px]" />

        {/* IMPACT STRIP */}
        <ImpactStrip project={project} />

        {/* OVERVIEW */}
        <CaseSection title="Overview">
          <p className="text-base leading-relaxed text-foreground/85">{TEXT}</p>
        </CaseSection>

        {/* PROBLEM */}
        <CaseSection title="The Problem">
          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-base leading-relaxed text-foreground/85">
              [ Text placeholder — 2-3 lines describing what was broken ]
            </p>
            <ImagePlaceholder className="h-64" label="Before-state image placeholder" />
          </div>
        </CaseSection>

        {/* PROCESS */}
        <ProcessTimeline />

        {/* KEY DECISIONS */}
        <CaseSection title="Key Decisions">
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2].map((n) => (
              <article
                key={n}
                className="rounded-3xl border-2 border-foreground bg-card p-6"
              >
                <h3 className="font-display text-xl font-bold">[ Decision title placeholder ]</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  <span className="font-semibold text-primary-deep">Why I made this call: </span>
                  [ Reasoning placeholder ]
                </p>
                <ImagePlaceholder className="mt-4 h-48" />
              </article>
            ))}
          </div>
        </CaseSection>

        {/* METRICS */}
        <MetricsBlock />

        {/* GALLERY */}
        <CaseSection title="Image Gallery">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <ImagePlaceholder key={i} className="aspect-[4/3]" />
            ))}
          </div>
        </CaseSection>
      </main>

      {/* NEXT PROJECT */}
      <NextProject next={next} />
      <Footer />
    </div>
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

function ImagePlaceholder({ className = "", label = "Image placeholder" }: { className?: string; label?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center rounded-2xl bg-secondary text-sm font-medium text-muted-foreground ${className}`}
    >
      [ {label} ]
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

function ProcessTimeline() {
  const steps = ["Discovery", "Audit", "Design", "Build", "Ship"];
  return (
    <CaseSection title="My Process">
      <div className="relative">
        <div aria-hidden className="absolute left-0 right-0 top-5 hidden h-0.5 bg-foreground/15 md:block" />
        <ol className="grid gap-6 md:grid-cols-5">
          {steps.map((label, i) => (
            <li key={label} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 inline-flex size-10 items-center justify-center rounded-full border-2 border-foreground bg-primary font-display text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-3 font-display text-base font-bold">{label}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                [ Step description placeholder ]
              </p>
            </li>
          ))}
        </ol>
      </div>
    </CaseSection>
  );
}

function MetricsBlock() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-16"
      aria-label="Metrics and impact"
    >
      <h2 className="font-display text-3xl font-bold">Metrics &amp; Impact</h2>
      <div className="mt-6 grid gap-4 rounded-3xl bg-foreground p-6 text-background md:grid-cols-3 md:p-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-background/15 p-6 text-center"
          >
            <p className="font-display text-4xl font-extrabold text-primary md:text-5xl">
              [ Stat ]
            </p>
            <p className="mt-3 text-sm font-medium text-background/85">
              [ Stat description placeholder ]
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-base leading-relaxed text-foreground/85">
        [ Outcome description placeholder — 2-3 lines ]
      </p>
    </motion.section>
  );
}

function NextProject({ next }: { next: PortfolioProject }) {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <Link
          to="/portfolio/$slug"
          params={{ slug: next.slug }}
          className="group flex flex-col items-start justify-between gap-6 rounded-3xl bg-foreground p-8 text-background transition-transform hover:-translate-y-1 md:flex-row md:items-center md:p-10"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Next project →
            </p>
            <h3 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">
              {next.title}
            </h3>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground border-2 border-background">
            View case study <ArrowRight className="size-4" aria-hidden />
          </span>
        </Link>
      </div>
    </section>
  );
}