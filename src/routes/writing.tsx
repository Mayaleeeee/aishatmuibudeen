import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Aishat Muibudeen (Maya)" },
      { name: "description", content: "Essays and notes on design, accessibility, and open source." },
    ],
  }),
  component: WritingPage,
});

const articles = [
  { title: "Learning to Breathe Again: How I Took Back My Time", date: "May 2025", excerpt: "I didn't set out on a productivity journey. I was only trying to survive my to-do list.", href: "https://medium.com/@muibudeenaishat/learning-to-breathe-again-how-i-took-back-my-time-1c0b48117dfb", color: "var(--color-cyan)" },
  { title: "To the Ones Who Felt Left Out of Open Source, We Built This With You in Mind", date: "Apr 2025", excerpt: "Somehow, we're here. And we saved you a spot at OpenNest Africa!", href: "https://medium.com/@muibudeenaishat/to-the-ones-who-felt-left-out-of-open-source-we-built-this-with-you-in-mind-a2e1fda4f0c9", color: "var(--color-mint)" },
  { title: "Kogi NYSC Camping: A Nightmare Dressed Like a Daydream", date: "Jan 2025", excerpt: "A mix of dread and delight — inspired by Taylor Swift's Blank Space.", href: "https://medium.com/@muibudeenaishat/kogi-nysc-camping-a-nightmare-dressed-like-a-daydream-52f829a3f71b", color: "var(--color-coral)" },
  { title: "Designing in the Open Source: A Case Study on AsyncAPI Conf on Tour'23", date: "Jun 2024", excerpt: "Designing a website that captures the spirit of open source is both a challenge and a thrill.", href: "https://medium.com/@muibudeenaishat/designing-in-the-open-source-a-case-study-on-asyncapi-conf-on-tour23-7470a072f9ef", color: "var(--color-yellow)" },
  { title: "Contributing to Open Source as UX Researcher and Designer", date: "Aug 2023", excerpt: "Every software has a design system, regardless of whether it is free or not.", href: "https://medium.com/@muibudeenaishat/contributing-to-open-source-as-ux-researcher-and-designer-70a1af62af80", color: "var(--color-purple)" },
  { title: "March 2022–Dec 23 Outreachy Internship: A Tale of Progress and Triumph", date: "Apr 2023", excerpt: "My Outreachy Internship concluded successfully and I am overjoyed with my progress.", href: "https://medium.com/@muibudeenaishat/march-2022-dec-23-outreachy-internship-a-tale-of-progress-and-triumph-in-the-tech-field-62299dfbdea4", color: "var(--color-pink)" },
  { title: "My Work in Progress at Oppia", date: "Feb 2023", excerpt: "It's been an intensive number of weeks, and I can't believe I'm already halfway.", href: "https://medium.com/@muibudeenaishat/my-work-in-progress-at-oppia-85b690d28d72", color: "var(--color-cyan)" },
  { title: "My experience as an Outreachy Intern in a week at Oppia", date: "Dec 2022", excerpt: "Introduction to my Outreachy journey.", href: "https://medium.com/@muibudeenaishat/im-an-outreachy-intern-with-oppia-for-the-december-2022-to-march-2023-internship-round-4a860070b2f9", color: "var(--color-mint)" },
  { title: "She Code Africa (SCA) Hackfest with OSEQ 2022 Experience", date: "Nov 2022", excerpt: "A quick summary of our experiences during the SCA Hackfest 2022.", href: "https://medium.com/@muibudeenaishat/she-code-africa-sca-hackfest-with-oseq-2022-experience-3fd320d8836d", color: "var(--color-coral)" },
  { title: "My Tech Journey as a UX/UI Designer", date: "Sep 2022", excerpt: "Let your love overcome your fear.", href: "https://medium.com/@muibudeenaishat/my-tech-journey-as-a-ui-ux-designer-fb8a2b3dea70", color: "var(--color-yellow)" },
  { title: "How I won #SCA Laptop 2022", date: "Jun 2022", excerpt: "Hello! Here's how it happened.", href: "https://medium.com/@muibudeenaishat/how-i-won-sca-laptop-2022-15cdb746bdd7", color: "var(--color-purple)" },
];

function WritingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24 pt-32">
      <Link to="/" className="text-sm text-primary-deep hover:underline">← Home</Link>
      <h1 className="mt-6 font-display text-5xl font-extrabold md:text-6xl">Writing</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Notes on design, open source, community, and life — published on Medium.</p>
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {articles.map((a) => (
          <li key={a.title}>
            <a
              href={a.href}
              target="_blank"
              rel="noreferrer"
              className="lift-card group flex h-full flex-col rounded-3xl border-2 border-foreground bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <span
                  className="inline-block rounded-full border-2 border-foreground px-3 py-1 text-xs font-semibold"
                  style={{ background: a.color }}
                >
                  {a.date}
                </span>
                <ArrowUpRight className="size-5 text-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold leading-snug">{a.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
              <span className="mt-6 text-sm font-semibold text-primary-deep">Read on Medium →</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}