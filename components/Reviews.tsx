'use client';

import { motion } from 'motion/react';

export default function Reviews() {
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
          ❤️ Reviews
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.08 }}
          className="text-[clamp(30px,4vw,54px)] font-black tracking-[-2.5px] leading-[1.08] mb-4"
        >
          Don&apos;t just take our word for it
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.16 }}
          className="text-[15px] text-[var(--muted)] max-w-[520px] leading-[1.75] mx-auto"
        >
          Trusted by thousands of teams worldwide.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 text-left">
          {[
            {
              text: '"I can quickly find whatever information I need. I can now dive deep and interact with the team. I can perform any action without having to leave Klu. Supersonic tool."',
              initial: 'A',
              name: 'Andreas Kunert',
              role: 'Startup Entrepreneur',
              color: 'rgba(0,119,187,0.18)',
              textColor: '#4dbfff',
            },
            {
              text: '"My entire job used to involve switching between tools. With Klu all the content I need as a founder is quickly accessible. I can&apos;t imagine work without it."',
              initial: 'B',
              name: 'Brad Ruta',
              role: 'Startup Founder',
              color: 'rgba(255,97,84,0.18)',
              textColor: '#ff6154',
            },
            {
              text: '"Every day as a founder there is so much information that needs attention. Klu provides quick access to any key insights. It unquestionably increased our productivity."',
              initial: 'S',
              name: 'Sarah Chen',
              role: 'Technical Cofounder',
              color: 'rgba(0,229,160,0.18)',
              textColor: 'var(--green)',
            },
            {
              text: '"Klu made managing all company files a breeze. Slack, Figma and Notion have all our information and Klu surfaces any file faster — nothing is ever missing."',
              initial: 'H',
              name: 'Hannah Moore',
              role: 'Head of Marketing',
              color: 'rgba(124,58,237,0.18)',
              textColor: '#a78bfa',
            },
            {
              text: '"Klu is incredibly simple to use and saves me hours every week. The AI answers are shockingly accurate. Game-changer for our entire operations team."',
              initial: 'J',
              name: 'Jason Crabbe',
              role: 'Operations Lead',
              color: 'rgba(255,200,0,0.15)',
              textColor: '#fbbf24',
            },
            {
              text: '"We now have instant access to all our files and information. Sharing with colleagues has never been faster. It has unquestionably increased our team&apos;s productivity."',
              initial: 'K',
              name: 'Katrina Voeks',
              role: 'Product Manager',
              color: 'rgba(0,229,160,0.18)',
              textColor: 'var(--green)',
            },
          ].map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.1 }}
              className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-7 transition-all duration-350 hover:border-[rgba(0,229,160,0.15)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]"
            >
              <div className="text-[#fbbf24] text-[13px] mb-3.5 tracking-[1px]">★★★★★</div>
              <div className="text-[13.5px] text-[var(--muted)] leading-[1.75] mb-5.5">{rev.text}</div>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-extrabold text-base"
                  style={{ backgroundColor: rev.color, color: rev.textColor }}
                >
                  {rev.initial}
                </div>
                <div>
                  <div className="text-[13.5px] font-bold">{rev.name}</div>
                  <div className="text-[11.5px] text-[var(--dim)]">{rev.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
