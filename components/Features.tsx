'use client';

import { motion } from 'motion/react';

export default function Features() {
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
            ✨ Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.08 }}
            className="text-[clamp(30px,4vw,54px)] font-black tracking-[-2.5px] leading-[1.08]"
          >
            Everything your team needs
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: '🔍',
              title: '⭐ Smart Search',
              desc: 'AI and machine learning to provide hyper-relevant results based on your intent, not just keywords.',
            },
            {
              icon: '⚡',
              title: '⚡ Lightning-fast',
              desc: 'Search and scan through all your apps, files, and messages to find the exact information in milliseconds.',
            },
            {
              icon: '👥',
              title: '🤝 Team collaboration',
              desc: 'Share findings with your team to boost collaboration and productivity. Everyone stays aligned.',
            },
            {
              icon: '🤖',
              title: '🧠 AI Q&A',
              desc: 'Ask natural language questions and get answers synthesized from your actual company data instantly.',
            },
            {
              icon: '🔌',
              title: '🔌 50+ Integrations',
              desc: 'Connect all your favorite tools in one click. Gmail, Slack, Notion, Jira, GitHub and many more.',
            },
            {
              icon: '🔒',
              title: '🛡️ Enterprise Security',
              desc: 'AES-256 encryption, SSO, audit logs, and granular access controls built for enterprise compliance.',
            },
          ].map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.85, ease: 'easeOut', delay: i * 0.1 }}
              className="bg-[var(--card)] border border-[var(--border)] rounded-2xl py-7.5 px-6 relative overflow-hidden transition-all duration-350 hover:border-[rgba(0,229,160,0.2)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] group"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,160,0.4)] to-transparent opacity-0 transition-opacity duration-350 group-hover:opacity-100" />
              <div className="text-[26px] mb-4">{feat.icon}</div>
              <div className="text-[15px] font-bold mb-2">{feat.title}</div>
              <div className="text-[13px] text-[var(--muted)] leading-[1.7]">{feat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
