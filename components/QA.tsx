'use client';

import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export default function QA() {
  return (
    <section className="relative z-10 py-[110px] px-6 text-center">
      <div className="max-w-[1120px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.18)] rounded-full py-1 px-3.5 text-xs font-semibold text-[var(--green)] mb-5 justify-center"
        >
          🤖 Klu AI
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.08 }}
          className="text-[clamp(30px,4vw,54px)] font-black tracking-[-2.5px] leading-[1.08] max-w-[680px] mx-auto mb-4"
        >
          Simply ask a question and get an <span className="text-[var(--green)]">instant response</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.16 }}
          className="text-[15px] text-[var(--muted)] max-w-[520px] leading-[1.75] mx-auto mb-10"
        >
          Ask about your next meeting, flight, or launch date, and Klu AI provides an answer found directly in your data.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.24 }}
          className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl py-3.5 px-5 w-full max-w-[540px] mx-auto mb-6 cursor-text transition-all duration-300 hover:border-[rgba(0,229,160,0.3)] hover:shadow-[0_0_0_4px_rgba(0,229,160,0.06)]"
        >
          <Search className="text-[var(--dim)] w-4 h-4" />
          <span className="flex-1 text-[14.5px] text-[var(--muted)] text-left">When is my next meeting?</span>
          <span className="bg-white/5 border border-[var(--border)] rounded-md py-[3px] px-2 text-[11px] text-[var(--dim)] font-mono">
            ⌘ K
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.32 }}
          className="bg-[var(--card)] border border-[var(--border)] rounded-2xl max-w-[540px] mx-auto mb-8 p-5 text-left transition-all duration-350 hover:border-[rgba(0,229,160,0.2)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,160,0.4)] to-transparent opacity-0 transition-opacity duration-350 group-hover:opacity-100" />
          <div className="flex gap-2.5 items-start">
            <div className="w-7 h-7 bg-gradient-to-br from-[var(--green)] to-[var(--blue)] rounded-[7px] shrink-0 flex items-center justify-center text-sm">
              ✨
            </div>
            <div>
              <div className="text-xs font-bold text-[var(--green)] mb-1.5">Klu AI</div>
              <div className="text-[13.5px] text-[var(--muted)] leading-[1.7]">
                Your next meeting is <strong className="text-[var(--text)]">Design Review</strong> at <strong className="text-[var(--text)]">2:00 PM today</strong> with Sarah, Tom, and 3 others. — Google Calendar
              </div>
            </div>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.4 }}
          className="bg-[var(--green)] border-none text-[#060a10] py-3.5 px-[34px] rounded-xl text-[15px] font-bold cursor-pointer transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,229,160,0.4)]"
        >
          <span className="relative z-10">Try Klu AI for free &rarr;</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
        </motion.button>
      </div>
    </section>
  );
}
