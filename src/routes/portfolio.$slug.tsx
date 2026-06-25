import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { portfolioProjects } from "@/components/portfolio/projects";

/**
 * Detail page for a single portfolio project. The structure is a
 * placeholder skeleton (problem, process, outcome, gallery) ready for
 * Maya to fill in real case-study content per project.
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

function ProjectDetailPage() {
  const project = Route.useLoaderData();

  return (
    <main className="mx-auto max-w-4xl px-6 py-24 pt-32">
      <Link to="/portfolio" className="text-sm text-primary-deep hover:underline">← Back to portfolio</Link>

      <header className="mt-6">
        <span
          className="inline-block rounded-full border-2 border-foreground px-3 py-1 text-xs font-semibold"
          style={{ background: project.color }}
        >
          {project.tag}
        </span>
        <h1 className="mt-4 font-display text-5xl font-extrabold leading-tight md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{project.blurb}</p>
      </header>

      <section className="mt-10 grid gap-4 rounded-3xl border-2 border-foreground bg-card p-8 sm:grid-cols-3">
        <ProjectMeta label="Role" value={project.role} />
        <ProjectMeta label="Timeline" value={project.timeline} />
        <ProjectMeta label="Tools" value={project.tools.join(", ")} />
      </section>

      <ProjectSection title="Problem">
        Placeholder — the user need, business context and constraints we set out to address.
      </ProjectSection>

      <ProjectSection title="Process">
        Placeholder — research, discovery, ideation, prototyping and validation steps that shaped the work.
      </ProjectSection>

      <ProjectSection title="Outcome">
        Placeholder — what shipped, measurable impact and what we learned.
      </ProjectSection>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold">Gallery</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="flex aspect-[4/3] items-center justify-center rounded-2xl border-2 border-dashed border-foreground/30 bg-secondary text-sm font-medium text-foreground/60"
            >
              Image placeholder
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

/** Small labelled metadata cell used in the project header. */
function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-deep">{label}</p>
      <p className="mt-2 text-base font-medium text-foreground">{value}</p>
    </div>
  );
}

/** Titled prose section used for problem / process / outcome blocks. */
function ProjectSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-foreground/85">{children}</p>
    </section>
  );
}