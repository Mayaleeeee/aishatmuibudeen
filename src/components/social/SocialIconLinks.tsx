import { Github, Instagram, Linkedin } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

/**
 * Maya's social profiles rendered as icon-only buttons with hover colour
 * accents. Used in the site footer and anywhere else social links appear.
 */
type SocialLink = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  hoverColor: string;
};

const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aishatmuibudeen/",
    Icon: Linkedin,
    hoverColor: "var(--color-cyan)",
  },
  {
    label: "GitHub",
    href: "https://github.com/Mayaleeeee",
    Icon: Github,
    hoverColor: "var(--color-yellow)",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/maya_ux_ui",
    Icon: Instagram,
    hoverColor: "var(--color-coral)",
  },
];

export function SocialIconLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={"flex items-center gap-3 " + className}>
      {socialLinks.map(({ label, href, Icon, hoverColor }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="group inline-flex size-10 items-center justify-center rounded-full border-2 border-foreground bg-card transition-all hover:-translate-y-0.5"
            onMouseEnter={(event) => {
              (event.currentTarget as HTMLElement).style.background = hoverColor;
            }}
            onMouseLeave={(event) => {
              (event.currentTarget as HTMLElement).style.background = "";
            }}
          >
            <Icon className="size-5 text-foreground" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}