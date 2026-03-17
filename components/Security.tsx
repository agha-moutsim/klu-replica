'use client';

import { motion } from 'motion/react';

export default function Security() {
  return (
    <section className="relative z-10 py-[110px] px-6">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.18)] rounded-full py-1 px-3.5 text-xs font-semibold text-[var(--green)] mb-5 justify-center"
          >
            🔒 Security
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.08 }}
            className="text-[clamp(30px,4vw,54px)] font-black tracking-[-2.5px] leading-[1.08]"
          >
            Your data is <span className="text-[var(--green)]">safe with us</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: '🔒',
              title: '✓ Only you',
              desc: "AI integrations connected to Klu are only visible to you. Even team members can't see your personal connections.",
            },
            {
              icon: '🔐',
              title: '🔒 All encrypted',
              desc: 'Data encrypted at rest with AES-256 and in transit with TLS 1.3. Zero-knowledge architecture for maximum privacy.',
            },
            {
              icon: '🛡️',
              title: '⚡ Disconnect anytime',
              desc: 'Revoke access instantly. When you disconnect an app, all associated data is permanently deleted from our systems.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.85, ease: 'easeOut', delay: i * 0.1 }}
              className="bg-[var(--card)] border border-[var(--border)] rounded-2xl py-8 px-7 relative overflow-hidden transition-all duration-300 group hover:-translate-y-1 hover:border-[rgba(0,229,160,0.15)]"
            >
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--green)] to-[var(--blue)] origin-left scale-x-0 transition-transform duration-400 group-hover:scale-x-100" />
              <div className="text-[28px] mb-3.5">{item.icon}</div>
              <div className="text-[15px] font-bold mb-2">{item.title}</div>
              <div className="text-[13px] text-[var(--muted)] leading-[1.7]">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
