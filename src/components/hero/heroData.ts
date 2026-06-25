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
  { label: "Accessibility", color: "var(--color-cyan)", rotate: -6 },
  { label: "Design Systems", color: "var(--color-yellow)", rotate: 4 },
  { label: "UX Research", color: "var(--color-coral)", rotate: -3 },
  { label: "WCAG AAA", color: "var(--color-purple)", rotate: 5 },
];

export const rightHeroTags: FloatingTag[] = [
  { label: "Open Source", color: "var(--color-mint)", rotate: 5 },
  { label: "Community Building", color: "var(--color-pink)", rotate: -4 },
  { label: "Figma", color: "var(--color-yellow)", rotate: 6 },
  { label: "Inclusive Design", color: "var(--color-purple)", rotate: -5 },
];