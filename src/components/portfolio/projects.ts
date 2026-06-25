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
    tag: "Case study",
    blurb: "Led the full redesign including design system, accessibility audit and GSoC mentorship.",
    role: "Lead Product Designer",
    timeline: "2023 – 2024",
    tools: ["Figma", "Design Tokens", "GitHub", "WCAG AAA"],
    color: "var(--color-cyan)",
  },
  {
    slug: "asyncapi-design-system",
    title: "AsyncAPI Design System",
    tag: "Design system",
    blurb: "Built the AsyncAPI design system from scratch — colour tokens, typography, components, WCAG AAA compliant.",
    role: "Design Systems Lead",
    timeline: "2023 – Present",
    tools: ["Figma", "Tokens Studio", "Storybook"],
    color: "var(--color-yellow)",
  },
  {
    slug: "ux-research-project",
    title: "UX Research Project",
    tag: "UX research",
    blurb: "Research, synthesis and insights that shaped real product decisions for an open source community.",
    role: "UX Researcher",
    timeline: "2024",
    tools: ["Dovetail", "Notion", "Figma"],
    color: "var(--color-coral)",
  },
  {
    slug: "opennest-africa-brand",
    title: "OpenNest Africa — Brand & Web",
    tag: "Branding",
    blurb: "Co-founded and shaped the visual identity, brand system and website for a beginner-friendly OSS community.",
    role: "Co-founder & Brand Designer",
    timeline: "2024 – Present",
    tools: ["Figma", "Illustrator", "Webflow"],
    color: "var(--color-mint)",
  },
];