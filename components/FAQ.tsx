'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'How does Klu connect to my apps?',
    a: 'Klu uses official OAuth integrations to connect securely to your apps. No passwords stored — you simply authorize Klu in one click. Revoke access at any time from your dashboard.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. All data is encrypted at rest using AES-256 and in transit using TLS 1.3. We operate on a zero-knowledge architecture and are SOC 2 Type II compliant. Your data is never used to train our models.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most teams are up and running in under 5 minutes. Install the browser extension or desktop app, connect your first integration, and start searching immediately. No IT department required.',
  },
  {
    q: 'Can I use Klu across my whole team?',
    a: 'Yes! Klu is built for teams. On the Pro plan invite up to 10 users, share searches, and collaborate on findings. Enterprise plans support unlimited users with SSO and advanced access controls.',
  },
  {
    q: 'What happens if I disconnect an integration?',
    a: "When you disconnect an app, all data associated with that integration is immediately and permanently deleted from Klu's systems. Privacy is our core focus — you're always in full control.",
  },
];

export function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div
      className={`bg-[var(--card)] border rounded-xl mb-3 overflow-hidden transition-colors duration-300 ${
        isOpen ? 'border-[rgba(0,229,160,0.22)]' : 'border-[var(--border)]'
      }`}
    >
      <div
        className="p-5 px-6 text-[14.5px] font-semibold cursor-pointer flex justify-between items-center select-none"
        onClick={onClick}
      >
        {q}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-350 ${
            isOpen ? 'rotate-180 text-[var(--green)]' : 'text-[var(--muted)]'
          }`}
        />
      </div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-[13.5px] text-[var(--muted)] leading-[1.75]">{a}</div>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            ❓ FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.08 }}
            className="text-[clamp(30px,4vw,54px)] font-black tracking-[-2.5px] leading-[1.08]"
          >
            Frequently asked questions
          </motion.h2>
        </div>

        <div className="max-w-[720px] mx-auto mt-12">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.85, ease: 'easeOut', delay: i * 0.1 }}
            >
              <FAQItem
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
