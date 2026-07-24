import { motion } from "motion/react";
import type { FloatingTag } from "./heroData";

/**
 * A single draggable, gently-floating pill used to surface Maya's
 * skills around the hero headline.
 */
export function FloatingPill({ pill, delay = 0 }: { pill: FloatingTag; delay?: number }) {
  return (
    <motion.button
      type="button"
      drag
      dragSnapToOrigin
      dragElastic={0.6}
      dragTransition={{ bounceStiffness: 220, bounceDamping: 14 }}
      animate={{ y: [0, -6, 0, 4, 0], rotate: [pill.rotate, pill.rotate + 1.5, pill.rotate] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={{ rotate: [pill.rotate, pill.rotate + 6, pill.rotate - 6, pill.rotate], transition: { duration: 0.5 } }}
      whileTap={{ scale: 1.08 }}
      initial={{ rotate: pill.rotate }}
      className="cursor-grab select-none rounded-full border-2 border-on-tint px-4 py-2 text-sm font-semibold text-on-tint shadow-[3px_3px_0_0_var(--color-on-tint)] active:cursor-grabbing"
      style={{ background: pill.color, touchAction: "none" }}
      aria-label={`${pill.label} — draggable tag`}
    >
      {pill.label}
    </motion.button>
  );
}
