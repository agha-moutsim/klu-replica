'use client';

import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export default function InternalSearch() {
  return (
    <section className="relative z-10 py-[110px] px-6">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.18)] rounded-full py-1 px-3.5 text-xs font-semibold text-[var(--green)] mb-5">
              🔍 Internal Search
            </div>
            <h2 className="text-[clamp(30px,4vw,54px)] font-black tracking-[-2.5px] leading-[1.08] mb-4.5">
              Someone shared a file, but have <span className="text-[var(--green)]">no idea which app</span> it&apos;s on?
            </h2>
            <p className="text-[15px] text-[var(--muted)] max-w-[520px] leading-[1.75] mb-6">
              Simply type a keyword and Klu locates it — from documents, emails, conversations to customer files. Press{' '}
              <code className="bg-white/5 border border-[var(--border)] rounded-[5px] py-0.5 px-1.5 text-xs font-mono">
                ⌘+Space+K
              </code>{' '}
              and let Klu do the work.
            </p>
            <div className="flex gap-4 flex-wrap">
              <span className="text-[13px] text-[var(--muted)]">✅ Instant results</span>
              <span className="text-[13px] text-[var(--muted)]">✅ Across all apps</span>
              <span className="text-[13px] text-[var(--muted)]">✅ AI-powered</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="bg-[var(--card)] border border-[var(--border)] rounded-[18px] overflow-hidden"
          >
            <div className="flex items-center gap-1.5 py-3.5 px-[18px] border-b border-[var(--border)] bg-white/2">
              <div className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
              <div className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
              <div className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
            </div>
            <div className="flex items-center gap-2.5 m-4 py-2.5 px-3.5 bg-white/5 border border-white/10 rounded-[10px] text-[13px] text-[var(--muted)]">
              <Search className="w-4 h-4" />
              <span>Type a command or search...</span>
            </div>
            <div className="flex gap-2 mx-4 mb-4 flex-wrap">
              <div className="bg-[rgba(0,229,160,0.06)] border border-[rgba(0,229,160,0.3)] text-[var(--green)] rounded-[7px] py-1 px-3 text-[11.5px] cursor-pointer transition-all duration-200 flex items-center gap-1.5">
                🗂 Files
              </div>
              <div className="bg-white/5 border border-[var(--border)] rounded-[7px] py-1 px-3 text-[11.5px] text-[var(--dim)] cursor-pointer transition-all duration-200 flex items-center gap-1.5 hover:border-[rgba(0,229,160,0.3)] hover:text-[var(--green)] hover:bg-[rgba(0,229,160,0.06)]">
                📧 Emails
              </div>
              <div className="bg-white/5 border border-[var(--border)] rounded-[7px] py-1 px-3 text-[11.5px] text-[var(--dim)] cursor-pointer transition-all duration-200 flex items-center gap-1.5 hover:border-[rgba(0,229,160,0.3)] hover:text-[var(--green)] hover:bg-[rgba(0,229,160,0.06)]">
                💬 Slack
              </div>
              <div className="bg-white/5 border border-[var(--border)] rounded-[7px] py-1 px-3 text-[11.5px] text-[var(--dim)] cursor-pointer transition-all duration-200 flex items-center gap-1.5 hover:border-[rgba(0,229,160,0.3)] hover:text-[var(--green)] hover:bg-[rgba(0,229,160,0.06)]">
                📊 Jira
              </div>
              <div className="bg-white/5 border border-[var(--border)] rounded-[7px] py-1 px-3 text-[11.5px] text-[var(--dim)] cursor-pointer transition-all duration-200 flex items-center gap-1.5 hover:border-[rgba(0,229,160,0.3)] hover:text-[var(--green)] hover:bg-[rgba(0,229,160,0.06)]">
                ⚙ Actions
              </div>
            </div>

            <div className="mx-4 mb-2 flex items-center gap-3 p-3 rounded-[10px] bg-white/2 border border-[var(--border)] cursor-pointer transition-all duration-200 hover:border-[rgba(0,229,160,0.2)] hover:bg-[rgba(0,229,160,0.03)]">
              <div className="w-9 h-9 rounded-[9px] shrink-0 flex items-center justify-center text-[17px] bg-[rgba(0,119,187,0.12)]">🔗</div>
              <div>
                <div className="text-[12.5px] font-semibold mb-0.5">On actions</div>
                <div className="text-[11px] text-[var(--muted)]">Jump to actions in your extension</div>
              </div>
            </div>
            <div className="mx-4 mb-2 flex items-center gap-3 p-3 rounded-[10px] bg-white/2 border border-[var(--border)] cursor-pointer transition-all duration-200 hover:border-[rgba(0,229,160,0.2)] hover:bg-[rgba(0,229,160,0.03)]">
              <div className="w-9 h-9 rounded-[9px] shrink-0 flex items-center justify-center text-[17px] bg-[rgba(124,58,237,0.12)]">⚙</div>
              <div>
                <div className="text-[12.5px] font-semibold mb-0.5">Integrations</div>
                <div className="text-[11px] text-[var(--muted)]">Connect your favourite apps and tools</div>
              </div>
            </div>
            <div className="mx-4 mb-2 flex items-center gap-3 p-3 rounded-[10px] bg-white/2 border border-[var(--border)] cursor-pointer transition-all duration-200 hover:border-[rgba(0,229,160,0.2)] hover:bg-[rgba(0,229,160,0.03)]">
              <div className="w-9 h-9 rounded-[9px] shrink-0 flex items-center justify-center text-[17px] bg-[rgba(0,229,160,0.1)]">📄</div>
              <div>
                <div className="text-[12.5px] font-semibold mb-0.5">Q3 Report.pdf</div>
                <div className="text-[11px] text-[var(--muted)]">Google Drive · Shared by Sarah · 2d ago</div>
              </div>
            </div>

            <div className="p-4 border-t border-[var(--border)] mt-2 text-center">
              <button className="bg-[var(--green)] border-none text-[#060a10] w-full p-2.5 rounded-[9px] text-[13px] font-bold cursor-pointer transition-all duration-300 relative overflow-hidden hover:bg-[#00ffb5] hover:shadow-[0_6px_24px_rgba(0,229,160,0.4)] hover:-translate-y-[1px]">
                Sign up to get access
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
