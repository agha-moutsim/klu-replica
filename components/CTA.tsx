'use client';

import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="relative z-10 py-[110px] px-6">
      <div className="max-w-[1120px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="max-w-[760px] mx-auto bg-gradient-to-br from-[rgba(0,229,160,0.07)] to-[rgba(0,119,187,0.05)] border border-[rgba(0,229,160,0.22)] rounded-[28px] py-[72px] px-12 relative overflow-hidden text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.65, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[500px] h-[400px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse,rgba(0,229,160,0.14),transparent 65%)' }}
          />
          <div className="inline-flex items-center gap-2 bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.18)] rounded-full py-1 px-3.5 text-xs font-semibold text-[var(--green)] mb-5 justify-center">
            🚀 Get started today
          </div>
          <h2 className="text-[clamp(30px,4vw,54px)] font-black tracking-[-2px] leading-[1.08] mb-3.5">
            Ready to find anything,<br />
            <span className="text-[var(--green)]">instantly?</span>
          </h2>
          <p className="text-[15px] text-[var(--muted)] max-w-[400px] leading-[1.75] mx-auto mb-9">
            Join thousands of teams that have transformed how they work with Klu. No credit card required.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <button className="bg-[var(--green)] border-none text-[#060a10] py-3.5 px-[34px] rounded-xl text-[15px] font-bold cursor-pointer transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,229,160,0.4)]">
              <span className="relative z-10">Start for free &rarr;</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
            </button>
            <button className="bg-transparent border border-[var(--border)] text-[var(--muted)] py-3.5 px-7 rounded-xl text-[15px] font-medium cursor-pointer transition-all duration-300 hover:border-white/20 hover:text-[var(--text)]">
              Book a demo
            </button>
          </div>
          <div className="mt-5.5 text-[12.5px] text-[var(--dim)]">
            ✓ Free forever plan &nbsp;·&nbsp; ✓ 14-day Pro trial &nbsp;·&nbsp; ✓ No credit card
          </div>
        </motion.div>
      </div>
    </section>
  );
}
