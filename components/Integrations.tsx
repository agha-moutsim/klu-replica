'use client';

import { motion } from 'motion/react';

export default function Integrations() {
  return (
    <section className="relative z-10 py-[110px] px-6 text-center bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,229,160,0.055)_0%,transparent_55%)]">
      <div className="max-w-[1120px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.18)] rounded-full py-1 px-3.5 text-xs font-semibold text-[var(--green)] mb-5 justify-center"
        >
          🔌 Integrations
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.08 }}
          className="text-[clamp(30px,4vw,54px)] font-black tracking-[-2.5px] leading-[1.08] mb-4"
        >
          Get more meaning from <span className="text-[var(--green)]">your tools</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.16 }}
          className="text-[15px] text-[var(--muted)] max-w-[480px] leading-[1.75] mx-auto"
        >
          No more app-hopping. Klu gets you prepared. Our advanced search finds exactly what you need faster than ever.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.24 }}
          className="mt-7"
        >
          <button className="bg-[rgba(0,229,160,0.12)] border border-[rgba(0,229,160,0.25)] text-[var(--green)] py-2.5 px-6 rounded-[9px] text-[13px] font-bold cursor-pointer transition-all duration-300 hover:bg-[rgba(0,229,160,0.2)] hover:-translate-y-[1px]">
            View all 50+ integrations &rarr;
          </button>
        </motion.div>

        <div className="flex flex-wrap gap-3.5 justify-center max-w-[680px] mx-auto mt-12">
          {[
            '📧', '💬', '📁', '🗂️', '📊', '📝', '🔗', '☁️',
            '🐙', '📌', '🔔', '📅', '🎯', '⚡', '🖊️', '📤',
          ].map((icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, rotate: -18 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: i * 0.04, type: 'spring', bounce: 0.5 }}
              className="w-[58px] h-[58px] rounded-[15px] flex items-center justify-center text-[28px] bg-[var(--card)] border border-[var(--border)] cursor-pointer transition-all duration-350 hover:border-[var(--bgreen)] hover:scale-110 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
