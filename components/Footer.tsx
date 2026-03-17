'use client';

import { Search } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border)] pt-[72px] px-6 pb-10">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 font-extrabold text-xl tracking-[-0.5px] text-[var(--text)] no-underline mb-3.5">
              <div className="w-7 h-7 rounded-[9px] bg-gradient-to-br from-[var(--green)] to-[var(--blue)] flex items-center justify-center text-sm shadow-[0_0_18px_rgba(0,229,160,0.3)]">
                <Search size={14} className="text-white" />
              </div>
              Klu
            </a>
            <p className="text-[13px] text-[var(--dim)] leading-[1.7] max-w-[200px]">
              Find the right information. Instantly. Your AI-powered internal search engine.
            </p>
            <div className="flex gap-2.5 mt-5">
              <a href="#" className="w-[34px] h-[34px] rounded-lg border border-[var(--border)] flex items-center justify-center text-sm cursor-pointer text-[var(--muted)] transition-all duration-250 no-underline hover:border-[var(--bgreen)] hover:text-[var(--green)]">
                𝕏
              </a>
              <a href="#" className="w-[34px] h-[34px] rounded-lg border border-[var(--border)] flex items-center justify-center text-xs font-bold cursor-pointer text-[var(--muted)] transition-all duration-250 no-underline hover:border-[var(--bgreen)] hover:text-[var(--green)]">
                in
              </a>
              <a href="#" className="w-[34px] h-[34px] rounded-lg border border-[var(--border)] flex items-center justify-center text-sm cursor-pointer text-[var(--muted)] transition-all duration-250 no-underline hover:border-[var(--bgreen)] hover:text-[var(--green)]">
                🐙
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-[var(--dim)] mb-4.5">Company</h4>
            <ul className="list-none flex flex-col gap-2.5">
              <li><a href="#" className="text-[13.5px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]">About</a></li>
              <li><a href="#" className="text-[13.5px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]">Blog</a></li>
              <li><a href="#" className="text-[13.5px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]">Careers</a></li>
              <li><a href="#" className="text-[13.5px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-[var(--dim)] mb-4.5">Resources</h4>
            <ul className="list-none flex flex-col gap-2.5">
              <li><a href="#" className="text-[13.5px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]">Docs</a></li>
              <li><a href="#" className="text-[13.5px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]">Changelog</a></li>
              <li><a href="#" className="text-[13.5px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]">Status</a></li>
              <li><a href="#" className="text-[13.5px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-[var(--dim)] mb-4.5">Product</h4>
            <ul className="list-none flex flex-col gap-2.5">
              <li><a href="#" className="text-[13.5px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]">Pricing</a></li>
              <li><a href="#" className="text-[13.5px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]">Integrations</a></li>
              <li><a href="#" className="text-[13.5px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]">Security</a></li>
              <li><a href="#" className="text-[13.5px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]">Enterprise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-[var(--dim)] mb-4.5">Legal</h4>
            <ul className="list-none flex flex-col gap-2.5">
              <li><a href="#" className="text-[13.5px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]">Privacy</a></li>
              <li><a href="#" className="text-[13.5px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]">Terms</a></li>
              <li><a href="#" className="text-[13.5px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]">Cookies</a></li>
              <li><a href="#" className="text-[13.5px] text-[var(--muted)] no-underline transition-colors duration-200 hover:text-[var(--text)]">GDPR</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-7 border-t border-[var(--border)] text-[12.5px] text-[var(--dim)] gap-4">
          <span>© 2024 Klu Technologies, Inc. All rights reserved.</span>
          <span>Made with ❤️ for teams who care about finding fast.</span>
        </div>
      </div>
    </footer>
  );
}
