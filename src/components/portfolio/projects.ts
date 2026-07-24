/**
 * Source of truth for portfolio project metadata. Each project links to
 * its own detail page at /portfolio/$slug. The first three entries are
 * featured on the homepage.
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
  /** Three-up impact strip. */
  impact: { problem: string; whatIDid: string; impact: string };
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "asyncapi-cli-redesign",
    title: "AsyncAPI CLI Redesign",
    tag: "Developer Experience · Interaction Design · Open Source",
    blurb:
      "Redesigned the UX of the AsyncAPI CLI — the terminal tool developers use to validate, convert and generate from AsyncAPI documents. Mapped every state across four command families, defined the message architecture the tool now runs on, and proposed changes to the command API itself that maintainers accepted and engineers shipped.",
    role: "Product Designer (AsyncAPI Bounty)",
    timeline: "Nov 2023 — May 2024",
    tools: ["Figma", "GitHub"],
    color: "var(--color-purple)",
    tint: "oklch(0.955 0.04 300)",
    description:
      "Designing for a screen with no layout: text and state are the entire interface.",
    impact: {
      problem:
        "Errors told users something failed but never what to do next. Output was inconsistent between commands and cluttered by default, leaving people stranded in failed states.",
      whatIDid:
        "Mapped every state across validate, convert, new and generate. Defined a message architecture — feedback, context, next action — and proposed changes to the command API itself.",
      impact:
        "Accepted by maintainers, implemented by engineers in #1214, and the work seeded AsyncAPI's Developer Experience working group.",
    },
  },
  {
    slug: "parallel-agent-supervision",
    title: "Parallel",
    tag: "Self-directed Concept · AI Agents · Interaction Design",
    blurb:
      "A concept for supervising multiple AI coding agents working at once on a single codebase. Built on one constraint: the developer's attention, not compute, is the scarce resource. Covers state legibility across concurrent agents, mid-task steering, and how agent work earns trust before it merges.",
    role: "Self-directed concept project",
    timeline: "2026",
    tools: ["Figma"],
    color: "var(--color-mint)",
    tint: "oklch(0.96 0.04 165)",
    description:
      "When four agents edit one codebase, what does the developer actually need to see?",
    impact: {
      problem:
        "IDEs assume one person editing one file in sequence. Run several agents and that model breaks — you can't tell what's in progress, what needs you, or what conflicts.",
      whatIDid:
        "Designed a supervision canvas, an interrupt model that re-scopes rather than restarts, a review surface built on verifiable evidence, and conflict handling that never auto-merges silently.",
      impact:
        "A self-directed exploration. Stated as falsifiable hypotheses with the tests that would prove them wrong, rather than as conclusions.",
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
