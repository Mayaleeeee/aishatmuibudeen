import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Small cyan dot that follows the cursor with a soft spring lag.
 * Desktop-only — hidden on touch / small screens via Tailwind. Pointer
 * events are disabled so it never blocks UI.
 */
export function CursorTrail() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 220, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 22, mass: 0.6 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 8);
      y.set(e.clientY - 8);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden size-4 rounded-full bg-primary mix-blend-multiply md:block"
      style={{ x: sx, y: sy }}
    />
  );
}