'use client';

import { motion } from 'motion/react';

export default function Pricing() {
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
          💰 Pricing
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.08 }}
          className="text-[clamp(30px,4vw,54px)] font-black tracking-[-2.5px] leading-[1.08] mb-4"
        >
          Simple, transparent <span className="text-[var(--green)]">pricing</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.16 }}
          className="text-[15px] text-[var(--muted)] max-w-[520px] leading-[1.75] mx-auto"
        >
          No surprises. Start free. Upgrade when you need more power.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto mt-14">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0 }}
            className="bg-[var(--card)] border border-[var(--border)] rounded-[20px] p-9 text-left transition-all duration-350 relative overflow-hidden hover:border-[rgba(0,229,160,0.15)] hover:-translate-y-1"
          >
            <div className="text-[13px] font-bold text-[var(--muted)] uppercase tracking-[1.5px] mb-3">Starter</div>
            <div className="text-[46px] font-black tracking-[-2px] leading-none mb-1">
              $0<span className="text-[20px] font-medium text-[var(--muted)]">/mo</span>
            </div>
            <div className="text-xs text-[var(--dim)] mb-6">Free forever · No credit card</div>
            <div className="h-[1px] bg-[var(--border)] my-6" />
            <ul className="list-none flex flex-col gap-3">
              {['3 integrations', '1,000 searches/month', '1 user', '7-day history', 'Chrome extension'].map((feat, i) => (
                <li key={i} className="flex items-center gap-2.5 text-[13.5px] text-[var(--muted)]">
                  <span className="text-[var(--green)] text-sm shrink-0">✓</span>
                  {feat}
                </li>
              ))}
            </ul>
            <button className="w-full mt-8 p-3.5 rounded-[10px] text-sm font-bold cursor-pointer transition-all duration-300 bg-transparent border border-[var(--border)] text-[var(--text)] hover:border-[rgba(0,229,160,0.3)]">
              Get started free
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="bg-gradient-to-br from-[rgba(0,229,160,0.05)] to-[var(--card)] border border-[rgba(0,229,160,0.32)] rounded-[20px] p-9 text-left transition-all duration-350 relative overflow-hidden shadow-[0_0_0_1px_rgba(0,229,160,0.2),0_24px_60px_rgba(0,0,0,0.3)]"
          >
            <div className="absolute top-[18px] -right-[28px] bg-[var(--green)] text-[#060a10] text-[9px] font-extrabold tracking-[1.5px] py-1 px-9 rotate-45">
              POPULAR
            </div>
            <div className="text-[13px] font-bold text-[var(--muted)] uppercase tracking-[1.5px] mb-3">Pro</div>
            <div className="text-[46px] font-black tracking-[-2px] leading-none mb-1">
              $12<span className="text-[20px] font-medium text-[var(--muted)]">/mo</span>
            </div>
            <div className="text-xs text-[var(--dim)] mb-6">Per user, billed annually</div>
            <div className="h-[1px] bg-[var(--border)] my-6" />
            <ul className="list-none flex flex-col gap-3">
              {['Unlimited integrations', 'Unlimited searches', 'Up to 10 users', '90-day history', 'AI Q&A', 'Priority support'].map((feat, i) => (
                <li key={i} className="flex items-center gap-2.5 text-[13.5px] text-[var(--muted)]">
                  <span className="text-[var(--green)] text-sm shrink-0">✓</span>
                  {feat}
                </li>
              ))}
            </ul>
            <button className="w-full mt-8 p-3.5 rounded-[10px] text-sm font-bold cursor-pointer transition-all duration-300 bg-[var(--green)] border-none text-[#060a10] hover:bg-[#00ffb5] hover:shadow-[0_8px_28px_rgba(0,229,160,0.35)] hover:-translate-y-0.5">
              Start 14-day trial &rarr;
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="bg-[var(--card)] border border-[var(--border)] rounded-[20px] p-9 text-left transition-all duration-350 relative overflow-hidden hover:border-[rgba(0,229,160,0.15)] hover:-translate-y-1"
          >
            <div className="text-[13px] font-bold text-[var(--muted)] uppercase tracking-[1.5px] mb-3">Enterprise</div>
            <div className="text-[36px] font-black tracking-[-2px] leading-none mb-2">
              Custom
            </div>
            <div className="text-xs text-[var(--dim)] mb-6">Contact us for pricing</div>
            <div className="h-[1px] bg-[var(--border)] my-6" />
            <ul className="list-none flex flex-col gap-3">
              {['Everything in Pro', 'Unlimited users', 'SSO & SAML', 'Audit logs', 'SLA guarantee', 'Dedicated support'].map((feat, i) => (
                <li key={i} className="flex items-center gap-2.5 text-[13.5px] text-[var(--muted)]">
                  <span className="text-[var(--green)] text-sm shrink-0">✓</span>
                  {feat}
                </li>
              ))}
            </ul>
            <button className="w-full mt-8 p-3.5 rounded-[10px] text-sm font-bold cursor-pointer transition-all duration-300 bg-transparent border border-[var(--border)] text-[var(--text)] hover:border-[rgba(0,229,160,0.3)]">
              Talk to sales &rarr;
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
