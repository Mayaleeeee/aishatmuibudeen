/**
 * Source of truth for portfolio project metadata. Each project links to
 * its own detail page at /portfolio/$slug. Detailed case-study copy is
 * placeholder for now — Maya will fill in real content per project.
 */
export type PortfolioProject = {
  slug: string;
  title: string;
  tag: string;
  blurb: string;
  role: string;
  timeline: string;
  tools: string[];
  /** Saturated accent — used for tag chips/headers. */
  color: string;
  /** Soft pastel tint used as the card thumbnail background. */
  tint: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "asyncapi-website-redesign",
    title: "AsyncAPI Website Redesign",
    tag: "Product Design · Accessibility · Design Systems · Open Source",
    blurb:
      "Led the end-to-end redesign of the AsyncAPI website, used by thousands of developers worldwide. Ran a full UX audit, built a design system from scratch meeting WCAG 2.0 + AAA, and mentored a Google Summer of Code contributor to extend the work sitewide.",
    role: "Lead Product Designer",
    timeline: "2023 — 2025",
    tools: ["Figma", "Framer", "GitHub"],
    color: "var(--color-cyan)",
    tint: "oklch(0.965 0.035 205)",
  },
  {
    slug: "asyncapi-design-system",
    title: "AsyncAPI Design System",
    tag: "Design Systems · Accessibility · Open Source",
    blurb:
      "Built the AsyncAPI design system from the ground up — colour tokens, typography scale, reusable components and accessibility documentation. Now adopted across AsyncAPI properties and used by contributors globally.",
    role: "Lead Designer",
    timeline: "2023 — Present",
    tools: ["Figma", "GitHub"],
    color: "var(--color-yellow)",
    tint: "oklch(0.975 0.055 95)",
  },
  {
    slug: "oppia-ux-research",
    title: "Oppia UX Research",
    tag: "UX Research · Usability Testing · Inclusion",
    blurb:
      "Conducted in-depth interviews with 14 users across six zones in Nigeria and moderated usability testing with 24+ Oppia users. Delivered research reports, personas and empathy maps that shaped product decisions for a global learning platform.",
    role: "UX Researcher (Outreachy Intern)",
    timeline: "Dec 2022 — Mar 2023",
    tools: ["Maze", "Miro", "Google Forms"],
    color: "var(--color-coral)",
    tint: "oklch(0.955 0.04 38)",
  },
];