'use client';

import { motion } from 'motion/react';

export default function Platform() {
  return (
    <section className="relative z-10 py-[60px] px-6 text-center">
      <div className="max-w-[1120px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="text-[clamp(30px,4vw,54px)] font-black tracking-[-2.5px] leading-[1.08]"
        >
          🚀 Klu works <span className="text-[var(--green)]">everywhere</span> you work.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.08 }}
          className="flex gap-3 justify-center flex-wrap my-8"
        >
          {[
            { icon: '🌐', label: 'Chrome Extension' },
            { icon: '💻', label: 'Intel Mac' },
            { icon: '🍎', label: 'Apple Silicon' },
            { icon: '🪟', label: 'Windows' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/5 border border-[var(--border)] rounded-[10px] py-2.5 px-[18px] text-[13px] text-[var(--muted)] cursor-pointer transition-all duration-250 hover:border-[var(--bgreen)] hover:text-[var(--text)] hover:bg-[rgba(0,229,160,0.04)] hover:-translate-y-0.5"
            >
              <span>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
