/**
 * Source of truth for portfolio project metadata. Each project links to
 * its own detail page at /portfolio/$slug. The first three entries are
 * featured on the homepage. Sections with no data are hidden on the
 * case study page rather than shown as placeholders.
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
  /** Long-form case study content. Omitted sections are hidden. */
  overview?: string;
  problemDetail?: string;
  process?: { label: string; body: string }[];
  decisions?: { title: string; why: string }[];
  metrics?: { stat: string; label: string }[];
  outcome?: string;
  evidenceLabel?: string;
  evidenceUrl?: string;
  /** 16:9 hero image at the top of the case study page. */
  cover?: string;
  /** 4:3 thumbnail for the portfolio card. */
  cardCover?: string;
  /** Inline images, placed after the named section. */
  images?: { src: string; caption: string; section: "problem" | "process" | "decisions" | "outcome" }[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "asyncapi-cli-redesign",
    title: "AsyncAPI CLI Redesign",
    tag: "Developer Experience · Interaction Design · Open Source",
    blurb:
      "Redesigned the UX of the AsyncAPI CLI — the terminal tool developers use to validate, convert, and generate from AsyncAPI documents. Mapped every state across four command families, defined the message architecture the tool now runs on, and proposed changes to the command API itself that maintainers accepted and engineers shipped.",
    role: "Technical Product Designer (AsyncAPI Bounty)",
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
        "Mapped every state across validate, convert, new, and generate. Defined a message architecture — feedback, context, next action — and proposed changes to the command API itself.",
      impact:
        "Accepted by maintainers, implemented by engineers in #1214, and the work seeded AsyncAPI's Developer Experience working group.",
    },
    overview:
      "The AsyncAPI CLI is how developers actually touch AsyncAPI day to day — validating documents, converting between spec versions, scaffolding new projects, generating code and models. It worked. Its output didn't. In late 2023 a maintainer opened an issue calling for better error messages and more consistent formatting, and assigned it to me as a design-led piece of work with no code required. What began as making the errors nicer turned into designing the language the whole tool speaks.",
    problemDetail:
      "A terminal gives a designer almost nothing to work with. No layout, no space, no colour hierarchy to lean on, no affordances. Output might be read by a person or piped straight into another program. Everything has to be carried by text and by state. The CLI's errors told people something had failed and then stopped — no cause, no next step, no route out of a bad state. Each command had drifted into its own conventions, so what you learned from one didn't transfer to the next. And genuinely useful advice was mixed into default output most people had already learned to skim past.",
    process: [
      {
        label: "Learn the medium",
        body: "Studied CLI design as its own discipline — usability heuristics applied to terminals, Laravel Prompts, Atlassian's CLI guidelines, and how to write an error someone can act on.",
      },
      {
        label: "Map every state",
        body: "Worked command by command through validate, convert, new and generate, enumerating every state each could reach — valid, invalid, with and without recommendations, missing input, version mismatch.",
      },
      {
        label: "Find the pattern",
        body: "Six states for validate alone, five for convert, more again for new and generate. The same three questions recurred in all of them, and that became the message architecture.",
      },
      {
        label: "Design in the open",
        body: "Posted weekly progress on the GitHub issue with screens attached, so maintainers could redirect me early instead of at the end. Emoji density and column alignment both came back as critique.",
      },
      {
        label: "Ship guidelines, not screens",
        body: "Delivered a specification engineers could apply to commands I had never drawn, rather than a folder of mockups. Implementation followed in a separate issue.",
      },
    ],
    decisions: [
      {
        title: "Recommendations behind a flag, not on by default",
        why: "Validate was surfacing advice nobody had asked for, so people learned to skim past all of it — including the errors that mattered. I proposed --show-recommendations, so default output stays scannable and advice appears when it's actually wanted. Quieting the interface was the readability fix.",
      },
      {
        title: "Change the command grammar, not just the words",
        why: "generate models and generate fromTemplate took their arguments in opposite orders. No amount of message design fixes a grammar you can't predict. I proposed reversing one so both share a single form, renaming the file argument to AsyncAPISource because it accepts a path or a URL, and making it optional. Maintainers accepted it — the interface problem lived in the API, so that's where the fix belonged.",
      },
    ],
    metrics: [
      { stat: "4", label: "command families redesigned end to end — validate, convert, new and generate" },
      { stat: "6", label: "distinct states designed for validate alone, before counting sub-states" },
      { stat: "4", label: "changes to the command API accepted by maintainers and shipped" },
    ],
    outcome:
      "The design was accepted in January 2024 and implemented by AsyncAPI's engineering maintainers a few months later, working from the specification rather than from pixels. The maintainers then moved the next round of work under a newly formed Developer Experience working group, with follow-up tasks split directly out of my recommendations. It was a paid bounty engagement with review deadlines and public weekly reporting — the entire process, including the critique I got wrong the first time, is on the record.",
    evidenceLabel: "Read the full process on GitHub — issue #872",
    evidenceUrl: "https://github.com/asyncapi/cli/issues/872",
    cover: "/case-studies/cover-16x9-cli.png",
    cardCover: "/case-studies/cover-4x3-cli.png",
    images: [
      {
        src: "/case-studies/1-dead-end-error.png",
        caption:
          "The state I started from. It reports an internal JavaScript exception rather than the user's mistake, points at no field or line, leaks file paths meant for maintainers, and offers nothing to do next.",
        section: "problem",
      },
      {
        src: "/case-studies/2-state-map.png",
        caption:
          "Twenty-nine distinct states across four command families. This is what turned the brief from a styling job into a systems problem — validate alone has six.",
        section: "process",
      },
      {
        src: "/case-studies/3-message-architecture.png",
        caption:
          "The architecture every response follows: feedback, context, next action. Shown as the anatomy of one response, then holding across three unrelated commands.",
        section: "process",
      },
      {
        src: "/case-studies/4-missing-information.png",
        caption:
          "The third response class. A missing argument doesn't fail — it names what's absent, teaches the correct form with a real example, then prompts inline with a sensible default.",
        section: "process",
      },
      {
        src: "/case-studies/5-command-api-changes.png",
        caption:
          "The four changes to the command surface itself, each argued as a UX decision rather than a coat of paint.",
        section: "decisions",
      },
      {
        src: "/case-studies/6-constraints-critique.png",
        caption:
          "What review pushed back on, and what I changed. Emoji density hurting scannability, ragged column alignment, and colour becoming noise when output is piped or read in CI.",
        section: "outcome",
      },
    ],
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
    overview:
      "A self-directed concept, not client work. Several companies are now building environments where multiple AI agents work on a codebase at the same time. Almost all of the design attention goes to the agents. Very little goes to the person supervising them. Parallel asks a narrower question: when four agents are editing one repository, what does the developer actually need to see, and when have they earned the right to be interrupted?",
    problemDetail:
      "Every IDE ever built assumes one person editing one file in sequence. Undo, diffs, the file tree, the cursor — all of it encodes a single actor moving through time. Run four agents and that model quietly breaks. You can't tell what's in progress versus finished, which decision is blocking the others, or whether two agents are about to collide in the same file. The bottleneck stops being compute and becomes attention: there is more happening than one person can hold in their head at once.",
    process: [
      {
        label: "Frame the constraint",
        body: "Started from a single line — the developer's attention is the scarce resource, not compute. Every decision after that had to answer to it.",
      },
      {
        label: "State the assumptions",
        body: "Wrote three hypotheses as falsifiable claims, each paired with what it would mean if I turned out to be wrong, rather than as principles to defend.",
      },
      {
        label: "Design the canvas",
        body: "Made concurrent agent state legible at a glance — colour and position carrying status before any word is read, with the queue of decisions as the primary object rather than the code.",
      },
      {
        label: "Design the failure",
        body: "Spent as much time on two agents colliding in one file as on the happy path, because that collision is the real cost of parallelism.",
      },
      {
        label: "Write the tests",
        body: "Defined three studies with developers running real agents on real repositories, each with the specific result that would change my mind.",
      },
    ],
    decisions: [
      {
        title: "Interrupt is a scope edit, not a kill switch",
        why: "Stopping an agent and starting over throws away finished work, which makes people reluctant to intervene at all. I designed interruption to preserve completed steps and re-plan from there, so steering costs less than restarting. If it turns out people restart anyway just to feel safe, the model is wrong and I would rebuild it.",
      },
      {
        title: "Conflicts block. They never auto-merge",
        why: "When two agents are both right about the same file, no heuristic should quietly pick a winner. The interface surfaces the collision before it lands and offers three routes — keep one, serialise them, or spawn an agent whose only job is to reconcile both intents. This does make the developer a bottleneck, which is the exact tension the product is trying to relieve. I kept that visible rather than hiding it.",
      },
    ],
    outcome:
      "Speculative work, and labelled that way throughout. The value isn't a validated design — it's a demonstration of how I reason about a problem where the conventions don't exist yet. Every claim is stated as a hypothesis with a kill criterion attached, so it can be argued with rather than admired.",
    cover: "/case-studies/parallel-cover-16x9.png",
    cardCover: "/case-studies/parallel-cover-4x3.png",
  },
  {
    slug: "asyncapi-design-system",
    title: "AsyncAPI Design System",
    tag: "Design Systems · Accessibility · Open Source",
    blurb:
      "Built the AsyncAPI design system from the ground up — colour tokens, typography scale, reusable components and accessibility documentation. Now adopted across AsyncAPI properties and used by contributors globally.",
    role: "Lead Technical Designer",
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
    tag: "Technical Product Design · Accessibility · Design Systems · Open Source",
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
