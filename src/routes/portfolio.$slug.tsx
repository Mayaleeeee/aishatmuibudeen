import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Nav } from "@/components/nav/Nav";
import { Footer } from "@/components/footer/Footer";
import { portfolioProjects } from "@/components/portfolio/projects";

/**
 * Detail page for a single portfolio project. Structure follows the
 * brief: Hero · Overview · Problem · Process · Key Decisions · Outcome ·
 * Gallery. Sections are placeholders until Maya fills in real copy.
 */
export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = portfolioProjects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Aishat Muibudeen (Maya)` },
          { name: "description", content: loaderData.blurb },
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

const PLACEHOLDER = "Coming soon — full case study in progress 💜";

function ProjectDetailPage() {
  const project = Route.useLoaderData();
  const tags = project.tag.split(" · ");

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <Link to="/portfolio" className="text-sm text-primary-deep hover:underline">
          ← Back to portfolio
        </Link>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-6"
        >
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{project.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border-2 border-foreground bg-card px-3 py-1 text-xs font-semibold"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-4 rounded-3xl border-2 border-foreground bg-card p-8 sm:grid-cols-3">
            <MetaPair label="Role" value={project.role} />
            <MetaPair label="Timeline" value={project.timeline} />
            <MetaPair label="Tools" value={project.tools.join(", ")} />
          </div>
        </motion.header>

        <CaseSection title="Overview">{PLACEHOLDER}</CaseSection>
        <CaseSection title="The Problem">{PLACEHOLDER}</CaseSection>

        {/* Process — numbered timeline */}
        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold">My Process</h2>
          <ol className="mt-6 space-y-4">
            {[1, 2, 3, 4].map((n) => (
              <li
                key={n}
                className="flex items-start gap-4 rounded-2xl border-2 border-foreground bg-card p-5"
              >
                <span
                  aria-hidden
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-foreground font-display font-bold"
                  style={{ background: project.tint }}
                >
                  {n}
                </span>
                <p className="text-base text-foreground/85">{PLACEHOLDER}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Key Decisions */}
        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold">Key Decisions</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["Decision one", "Decision two", "Decision three"].map((title) => (
              <article
                key={title}
                className="rounded-2xl border-2 border-foreground bg-card p-5"
              >
                <h3 className="font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-foreground/80">{PLACEHOLDER}</p>
              </article>
            ))}
          </div>
        </section>

        <CaseSection title="Outcome">{PLACEHOLDER}</CaseSection>

        {/* Gallery */}
        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold">Image Gallery</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="shimmer aspect-[4/3] rounded-2xl border-2 border-foreground"
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function MetaPair({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-deep">{label}</p>
      <p className="mt-2 text-base font-medium text-foreground">{value}</p>
    </div>
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
      <p className="mt-4 text-base leading-relaxed text-foreground/85">{children}</p>
    </motion.section>
  );
}