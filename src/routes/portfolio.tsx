import { createFileRoute, Link } from "@tanstack/react-router";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { portfolioProjects } from "@/components/portfolio/projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Aishat Muibudeen (Maya)" },
      { name: "description", content: "Selected product design, design systems, and open source work." },
    ],
  }),
  component: PortfolioPage,
});

/**
 * Portfolio landing — grid of all projects. Each card opens a dedicated
 * case-study page at /portfolio/$slug.
 */
function PortfolioPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24 pt-32">
      <Link to="/" className="text-sm text-primary-deep hover:underline">← Home</Link>
      <h1 className="mt-6 font-display text-5xl font-extrabold md:text-6xl">Portfolio</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Selected product design, design systems and open source work. Click any project to read the full case study.
      </p>
      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioProjects.map((project) => (
          <li key={project.slug}>
            <PortfolioCard project={project} />
          </li>
        ))}
      </ul>
    </main>
  );
}