'use client';

import { motion } from 'motion/react';

export default function HowItWorks() {
  return (
    <section className="relative z-10 py-[110px] px-6">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.18)] rounded-full py-1 px-3.5 text-xs font-semibold text-[var(--green)] mb-5 justify-center"
          >
            📖 How it works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.08 }}
            className="text-[clamp(30px,4vw,54px)] font-black tracking-[-2.5px] leading-[1.08] max-w-[580px] mx-auto"
          >
            Up and running in <span className="text-[var(--green)]">under 5 minutes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.16 }}
            className="text-[15px] text-[var(--muted)] max-w-[520px] leading-[1.75] mx-auto mt-4"
          >
            No complex setup. No IT tickets. Connect your apps and start searching in minutes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-14">
          {[
            {
              num: '01',
              icon: '🔌',
              title: 'Connect your apps',
              desc: 'One-click integrations with 50+ apps including Slack, Notion, Gmail, Jira, Google Drive and more.',
            },
            {
              num: '02',
              icon: '⚡',
              title: 'Klu indexes everything',
              desc: 'Our AI engine scans and indexes all your content in seconds — files, messages, emails, and docs.',
            },
            {
              num: '03',
              icon: '🔍',
              title: 'Search & find instantly',
              desc: 'Press ⌘K anywhere. Type what you need. Klu shows you the right result in milliseconds.',
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: 14 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.18 }}
              className="bg-[var(--card)] border border-[var(--border)] rounded-2xl py-9 px-7 relative transition-all duration-350 hover:border-[rgba(0,229,160,0.22)] hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,160,0.4)] to-transparent opacity-0 transition-opacity duration-350 group-hover:opacity-100" />
              <div className="text-[64px] font-black text-[rgba(0,229,160,0.06)] tracking-[-3px] absolute top-2.5 right-4.5 leading-none">
                {step.num}
              </div>
              <div className="text-[32px] mb-4.5">{step.icon}</div>
              <div className="text-[17px] font-bold mb-2.5">{step.title}</div>
              <div className="text-[13.5px] text-[var(--muted)] leading-[1.75]">{step.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
