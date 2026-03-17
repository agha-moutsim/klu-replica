'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const duration = 2200; // 2.2 seconds

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // ease out quad
        const easeProgress = progress * (2 - progress);
        setCount(Math.floor(easeProgress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-[50px] font-black tracking-[-2.5px] text-[var(--green)] leading-none">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative z-10 py-20 px-6 bg-gradient-to-b from-transparent via-[rgba(0,229,160,0.03)] to-transparent">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <Counter target={10000} suffix="+" />
            <div className="text-[13px] text-[var(--muted)] mt-1">Teams using Klu</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.08 }}
          >
            <Counter target={50} suffix="+" />
            <div className="text-[13px] text-[var(--muted)] mt-1">Integrations supported</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.16 }}
          >
            <Counter target={99} suffix="%" />
            <div className="text-[13px] text-[var(--muted)] mt-1">Uptime guaranteed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.24 }}
          >
            <Counter target={5} suffix=" min" />
            <div className="text-[13px] text-[var(--muted)] mt-1">To get started</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
