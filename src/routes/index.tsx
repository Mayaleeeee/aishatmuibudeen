import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/sections/Services";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SupportLink } from "@/components/support/SupportLink";
import { Footer } from "@/components/footer/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aishat Muibudeen (Maya) — Product Designer & Open Source Lead" },
      {
        name: "description",
        content:
          "Product designer & open source community lead from Nigeria. Design systems, accessibility, and mentorship across AsyncAPI and beyond.",
      },
      { property: "og:title", content: "Aishat Muibudeen (Maya) — Product Designer" },
      {
        property: "og:description",
        content:
          "Design systems, accessibility, and open source mentorship. Selected work, talks, and writing.",
      },
    ],
  }),
  component: Index,
});

/**
 * Homepage — composes the small, focused section components that live
 * under src/components/. The page itself stays declarative.
 */
function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <SelectedWork />
        <ContactCTA />
      </main>
      <SupportLink />
      <Footer />
    </div>
  );
}
