import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aishat Muibudeen (Maya)" },
      { name: "description", content: "Get in touch with Maya for product design and OSS collaborations." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link to="/" className="text-sm text-primary-deep hover:underline">← Home</Link>
      <h1 className="mt-6 font-display text-5xl font-extrabold">Let's talk</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Open to product design engagements, design system audits, and OSS collaborations.
      </p>
      <a
        href="mailto:hello@mayadesigns.dev"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:-translate-y-0.5 transition-transform"
      >
        <Mail className="size-4" /> hello@mayadesigns.dev
      </a>
    </main>
  );
}