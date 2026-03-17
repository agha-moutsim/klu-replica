'use client';

import { motion } from 'motion/react';

export default function TeamWorkspace() {
  return (
    <section className="relative z-10 py-[110px] px-6 bg-gradient-to-b from-transparent via-[rgba(0,229,160,0.022)] to-transparent">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="bg-[var(--card)] border border-[var(--border)] rounded-[18px] overflow-hidden order-2 md:order-1"
          >
            <div className="grid grid-cols-[190px_1fr] min-h-[360px]">
              <div className="border-r border-[var(--border)] py-4 bg-white/1.5">
                <div className="py-2.5 px-[18px] text-[12.5px] text-[var(--muted)] cursor-pointer transition-all duration-200 border-l-2 border-transparent flex items-center gap-2 hover:bg-white/3 hover:text-[var(--text)]">
                  🏠 Overview
                </div>
                <div className="py-2.5 px-[18px] text-[12.5px] text-[var(--muted)] cursor-pointer transition-all duration-200 border-l-2 border-transparent flex items-center gap-2 hover:bg-white/3 hover:text-[var(--text)]">
                  📁 Dashboards
                </div>
                <div className="py-2.5 px-[18px] text-[12.5px] text-[var(--green)] cursor-pointer transition-all duration-200 border-l-2 border-[var(--green)] bg-[rgba(0,229,160,0.06)] flex items-center gap-2">
                  🔍 Klu Search
                </div>
                <div className="py-2.5 px-[18px] text-[12.5px] text-[var(--muted)] cursor-pointer transition-all duration-200 border-l-2 border-transparent flex items-center gap-2 hover:bg-white/3 hover:text-[var(--text)]">
                  📄 Projects
                </div>
                <div className="py-2.5 px-[18px] text-[12.5px] text-[var(--muted)] cursor-pointer transition-all duration-200 border-l-2 border-transparent flex items-center gap-2 hover:bg-white/3 hover:text-[var(--text)]">
                  👥 Team
                </div>
                <div className="py-2.5 px-[18px] text-[12.5px] text-[var(--muted)] cursor-pointer transition-all duration-200 border-l-2 border-transparent flex items-center gap-2 hover:bg-white/3 hover:text-[var(--text)]">
                  ⚙ Settings
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold text-[var(--muted)] mb-3.5">Recent Activity</div>
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-3 py-2.5 px-1.5 border-b border-white/5 text-[11.5px] items-center rounded-md">
                  <span className="text-[var(--dim)] font-semibold text-[11px]">Name</span>
                  <span className="text-[var(--dim)] font-semibold text-[11px]">Type</span>
                  <span className="text-[var(--dim)] font-semibold text-[11px]">Date</span>
                  <span className="text-[var(--dim)] font-semibold text-[11px]">Status</span>
                </div>
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-3 py-2.5 px-1.5 border-b border-white/5 text-[11.5px] items-center transition-colors duration-200 rounded-md hover:bg-[rgba(0,229,160,0.04)]">
                  <span className="text-[var(--text)] font-medium">Q3 Report.pdf</span>
                  <span><span className="inline-block py-0.5 px-2.5 rounded-[5px] text-[10.5px] font-semibold bg-[rgba(0,119,187,0.12)] text-[#4dbfff]">PDF</span></span>
                  <span className="text-[var(--dim)] text-[11px]">Mar 12</span>
                  <span><span className="inline-block py-0.5 px-2.5 rounded-[5px] text-[10.5px] font-semibold bg-[rgba(0,229,160,0.12)] text-[var(--green)]">Shared</span></span>
                </div>
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-3 py-2.5 px-1.5 border-b border-white/5 text-[11.5px] items-center transition-colors duration-200 rounded-md hover:bg-[rgba(0,229,160,0.04)]">
                  <span className="text-[var(--text)] font-medium">Design v4.fig</span>
                  <span><span className="inline-block py-0.5 px-2.5 rounded-[5px] text-[10.5px] font-semibold bg-[rgba(255,160,0,0.12)] text-[#ffaa00]">Figma</span></span>
                  <span className="text-[var(--dim)] text-[11px]">Mar 10</span>
                  <span><span className="inline-block py-0.5 px-2.5 rounded-[5px] text-[10.5px] font-semibold bg-[rgba(0,229,160,0.12)] text-[var(--green)]">Active</span></span>
                </div>
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-3 py-2.5 px-1.5 border-b border-white/5 text-[11.5px] items-center transition-colors duration-200 rounded-md hover:bg-[rgba(0,229,160,0.04)]">
                  <span className="text-[var(--text)] font-medium">Sprint Plan</span>
                  <span><span className="inline-block py-0.5 px-2.5 rounded-[5px] text-[10.5px] font-semibold bg-[rgba(124,58,237,0.12)] text-[#a78bfa]">Notion</span></span>
                  <span className="text-[var(--dim)] text-[11px]">Mar 8</span>
                  <span><span className="inline-block py-0.5 px-2.5 rounded-[5px] text-[10.5px] font-semibold bg-[rgba(255,160,0,0.12)] text-[#ffaa00]">Review</span></span>
                </div>
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-3 py-2.5 px-1.5 border-b border-white/5 text-[11.5px] items-center transition-colors duration-200 rounded-md hover:bg-[rgba(0,229,160,0.04)]">
                  <span className="text-[var(--text)] font-medium">Marketing Deck</span>
                  <span><span className="inline-block py-0.5 px-2.5 rounded-[5px] text-[10.5px] font-semibold bg-[rgba(0,119,187,0.12)] text-[#4dbfff]">PPT</span></span>
                  <span className="text-[var(--dim)] text-[11px]">Mar 7</span>
                  <span><span className="inline-block py-0.5 px-2.5 rounded-[5px] text-[10.5px] font-semibold bg-[rgba(0,229,160,0.12)] text-[var(--green)]">Done</span></span>
                </div>
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-3 py-2.5 px-1.5 border-b border-white/5 text-[11.5px] items-center transition-colors duration-200 rounded-md hover:bg-[rgba(0,229,160,0.04)]">
                  <span className="text-[var(--text)] font-medium">CRM Export</span>
                  <span><span className="inline-block py-0.5 px-2.5 rounded-[5px] text-[10.5px] font-semibold bg-[rgba(0,229,160,0.12)] text-[var(--green)]">Excel</span></span>
                  <span className="text-[var(--dim)] text-[11px]">Mar 5</span>
                  <span><span className="inline-block py-0.5 px-2.5 rounded-[5px] text-[10.5px] font-semibold bg-[rgba(255,160,0,0.12)] text-[#ffaa00]">Active</span></span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.18)] rounded-full py-1 px-3.5 text-xs font-semibold text-[var(--green)] mb-5">
              🙌 Team Workspace
            </div>
            <h2 className="text-[clamp(30px,4vw,54px)] font-black tracking-[-2.5px] leading-[1.08] mb-4.5">
              Have you ever asked a teammate to <span className="text-[var(--green)]">resend a file</span> because you lost it?
            </h2>
            <p className="text-[15px] text-[var(--muted)] max-w-[520px] leading-[1.75] mb-6">
              Now you can search the entire team workspace in one place. With Klu, save and organize information ensuring your team never loses any data again.
            </p>
            <button className="bg-[var(--green)] border-none text-[#060a10] py-3 px-7 rounded-[9px] text-sm font-bold cursor-pointer transition-all duration-300 relative overflow-hidden hover:bg-[#00ffb5] hover:shadow-[0_6px_24px_rgba(0,229,160,0.4)] hover:-translate-y-[1px]">
              Explore team features &rarr;
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
