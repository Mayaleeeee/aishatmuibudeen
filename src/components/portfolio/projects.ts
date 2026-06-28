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
  /** One-line description shown on the case study hero. */
  description: string;
  /** Three-up impact strip placeholders. */
  impact: { problem: string; whatIDid: string; impact: string };
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
    description:
      "Leading the end-to-end redesign of a developer tool used by thousands worldwide.",
    impact: {
      problem:
        "90+ open GitHub issues. Poor navigation. No design system. Contributors struggled to find their way.",
      whatIDid:
        "Led full UX audit. Built design system from scratch. Redesigned homepage and community pages. Mentored GSoC contributor.",
      impact:
        "WCAG 2.0 + AAA compliance achieved. Design system adopted sitewide. Contributor onboarding significantly improved.",
    },
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
    description:
      "Building the design foundation that lets a global contributor community build consistently.",
    impact: {
      problem:
        "No shared design language. Every contributor building slightly differently. Inconsistency across all AsyncAPI properties.",
      whatIDid:
        "Built colour tokens, typography scale and reusable components from scratch. Documented everything for contributors.",
      impact:
        "Design system adopted across AsyncAPI properties. Reduced inconsistency. Now used by contributors globally.",
    },
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
    description:
      "Grounding product decisions in real user evidence across six zones in Nigeria.",
    impact: {
      problem:
        "Product decisions being made without evidence from real users, especially users in Nigeria and across Africa.",
      whatIDid:
        "Conducted 14 in-depth user interviews across 6 zones in Nigeria. Ran usability testing with 24+ users.",
      impact:
        "Delivered research reports, personas and empathy maps that directly shaped product decisions for a global learning platform.",
    },
  },
];