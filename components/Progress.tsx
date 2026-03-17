'use client';

import { motion, useScroll, useSpring } from 'motion/react';

export default function Progress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--green)] to-[var(--blue)] z-[9999] shadow-[0_0_12px_rgba(0,229,160,0.55)] origin-left"
      style={{ scaleX }}
    />
  );
}
