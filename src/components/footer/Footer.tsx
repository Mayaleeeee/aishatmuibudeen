import { SocialIconLinks } from "@/components/social/SocialIconLinks";

/**
 * Site footer. Icon-only social links with copyright.
 */
export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aishat Muibudeen. Designed &amp; built with care in Lagos.
        </p>
        <SocialIconLinks />
      </div>
    </footer>
  );
}