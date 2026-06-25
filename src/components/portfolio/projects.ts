/**
 * Source of truth for portfolio project metadata. Each project links to
 * its own detail page at /portfolio/$slug. Detailed copy (problem,
 * process, outcome) is filled in by Maya later.
 */
export type PortfolioProject = {
  slug: string;
  title: string;
  tag: string;
  blurb: string;
  role: string;
  timeline: string;
  tools: string[];
  color: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "asyncapi-website-redesign",
    title: "AsyncAPI Website Redesign",
    tag: "Product Design · Accessibility · Design Systems",
    blurb:
      "Led the end-to-end redesign of the AsyncAPI website, used by thousands of developers worldwide. Ran a full UX audit, built a design system from scratch meeting WCAG 2.0 + AAA, and mentored a Google Summer of Code contributor to extend the work sitewide.",
    role: "Lead Product Designer",
    timeline: "2023 – 2024",
    tools: ["Figma", "Design Tokens", "GitHub", "WCAG AAA"],
    color: "var(--color-cyan)",
  },
  {
    slug: "asyncapi-design-system",
    title: "AsyncAPI Design System",
    tag: "Design Systems · Accessibility · Open Source",
    blurb:
      "Built the AsyncAPI design system from the ground up, colour tokens, typography scale, reusable components and accessibility documentation. Now adopted across AsyncAPI properties and used by contributors globally.",
    role: "Design Systems Lead",
    timeline: "2023 – Present",
    tools: ["Figma", "Tokens Studio", "Storybook"],
    color: "var(--color-yellow)",
  },
  {
    slug: "oppia-ux-research",
    title: "Oppia UX Research",
    tag: "UX Research · Usability Testing · Inclusion",
    blurb:
      "Conducted in-depth interviews with 14 users across six zones in Nigeria and moderated usability testing with 24+ Oppia users. Delivered research reports, personas and empathy maps that shaped product decisions for a global learning platform.",
    role: "UX Researcher",
    timeline: "2022 – 2023",
    tools: ["Figma", "Notion", "Zoom", "Miro"],
    color: "var(--color-coral)",
  },
];
