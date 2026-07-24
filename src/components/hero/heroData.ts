/**
 * Static data for the hero floating pill tags. Two coordinated groups
 * render on the left and right of the headline on desktop.
 */
export type FloatingTag = {
  label: string;
  color: string;
  rotate: number;
};

export const leftHeroTags: FloatingTag[] = [
  { label: "Developer Experience", color: "var(--color-cyan)", rotate: -6 },
  { label: "Design Systems", color: "var(--color-yellow)", rotate: 4 },
  { label: "Interaction Design", color: "var(--color-coral)", rotate: -3 },
  { label: "Accessibility", color: "var(--color-purple)", rotate: 5 },
];

export const rightHeroTags: FloatingTag[] = [
  { label: "CLIs & Terminal UX", color: "var(--color-mint)", rotate: 5 },
  { label: "Design Tokens", color: "var(--color-pink)", rotate: -4 },
  { label: "UX Research", color: "var(--color-yellow)", rotate: 6 },
  { label: "Open Source", color: "var(--color-purple)", rotate: -5 },
];
