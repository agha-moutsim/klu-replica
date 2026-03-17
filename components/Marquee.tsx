'use client';

import { motion } from 'motion/react';

const ITEMS = [
  { icon: '📧', label: 'Gmail' },
  { icon: '💬', label: 'Slack' },
  { icon: '📁', label: 'Google Drive' },
  { icon: '🗂️', label: 'Notion' },
  { icon: '📊', label: 'Jira' },
  { icon: '📝', label: 'Confluence' },
  { icon: '🔗', label: 'Linear' },
  { icon: '🐙', label: 'GitHub' },
  { icon: '☁️', label: 'Dropbox' },
  { icon: '📌', label: 'Asana' },
  { icon: '⚡', label: 'Zapier' },
  { icon: '📅', label: 'Calendar' },
];

export default function Marquee({ reverse = false, items = ITEMS }: { reverse?: boolean, items?: {icon: string, label: string}[] }) {
  return (
    <div className="overflow-hidden py-7 relative z-10 w-full">
      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 bg-[var(--card)] border border-[var(--border)] rounded-full py-2 px-5 text-[13px] text-[var(--muted)] whitespace-nowrap shrink-0"
          >
            <span>{item.icon}</span>
            {item.label}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
