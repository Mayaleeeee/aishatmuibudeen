import { useState } from "react";

/**
 * Infinite-scroll marquee of organisations Maya has worked with or spoken at.
 * Sits directly below the navbar, above the hero. Tries to load each org's
 * real logo from its official site; falls back to a clean text pill on error.
 * Greyscale at 60% opacity by default, full colour on hover.
 */
type Org = { name: string; src?: string };

const orgs: Org[] = [
  { name: "AsyncAPI Initiative", src: "https://www.asyncapi.com/img/logos/asyncapi-logo-light.svg" },
  { name: "Oppia Foundation", src: "https://oppia.org/assets/images/logo/transparent_logo.png" },
  { name: "OpenNest Africa" },
  { name: "She Code Africa", src: "https://shecodeafrica.org/static/media/sca-logo.7f0db8e4.svg" },
  { name: "KodeCamp" },
  { name: "OpenForum Academy", src: "https://openforumacademy.org/wp-content/uploads/2023/04/OFA-Logo.svg" },
  { name: "Google Summer of Code", src: "https://summerofcode.withgoogle.com/favicon.ico" },
  { name: "PyLadies", src: "https://pyladies.com/assets/images/pylady_geek_avatar.png" },
];

function OrgLogo({ org }: { org: Org }) {
  const [errored, setErrored] = useState(false);
  const showImg = org.src && !errored;
  return (
    <div className="flex h-12 shrink-0 items-center px-2">
      {showImg ? (
        <img
          src={org.src}
          alt={org.name}
          loading="lazy"
          onError={() => setErrored(true)}
          className="h-10 w-auto max-w-[160px] object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
        />
      ) : (
        <span className="rounded-full border border-border bg-card px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-foreground/60 opacity-80 transition hover:opacity-100 hover:text-foreground">
          {org.name}
        </span>
      )}
    </div>
  );
}

export function LogosStrip() {
  return (
    <section
      aria-label="Organisations Maya has worked with and spoken at"
      className="border-y border-border bg-background pt-20"
    >
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Organisations I've worked with &amp; spoken at
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex w-max gap-12 md:gap-16">
            {[...orgs, ...orgs].map((o, i) => (
              <OrgLogo key={`${o.name}-${i}`} org={o} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}