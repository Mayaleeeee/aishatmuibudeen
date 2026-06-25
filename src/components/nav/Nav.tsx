import { Link } from "@tanstack/react-router";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Fixed top navigation for the homepage. Includes dark mode toggle and
 * a "Hire me →" CTA that smooth-scrolls to the #contact section.
 */
export function Nav() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const scrollToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span aria-hidden className="inline-block size-3 rounded-full bg-primary" />
          Maya
        </Link>
        <nav aria-label="Primary" className="hidden gap-8 text-sm font-medium md:flex">
          <Link className="hover:text-primary-deep" to="/about">About</Link>
          <Link className="hover:text-primary-deep" to="/portfolio">Portfolio</Link>
          <Link className="hover:text-primary-deep" to="/speaking">Speaking</Link>
          <Link className="hover:text-primary-deep" to="/writing">Writing</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setIsDark((d) => !d)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-secondary"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 border-2 border-foreground"
          >
            Hire me <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </header>
  );
}