'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-5 md:px-12 transition-all duration-400 border-b ${
        scrolled
          ? 'bg-[rgba(6,10,16,0.97)] border-white/5 shadow-[0_4px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl'
          : 'bg-[rgba(6,10,16,0.75)] border-[var(--border)] backdrop-blur-xl'
      }`}
    >
      <a href="#" className="flex items-center gap-2.5 font-extrabold text-[19px] tracking-[-0.5px] text-[var(--text)] no-underline">
        <div className="w-8 h-8 rounded-[9px] bg-gradient-to-br from-[var(--green)] to-[var(--blue)] flex items-center justify-center text-base shadow-[0_0_18px_rgba(0,229,160,0.3)]">
          <Search size={16} className="text-white" />
        </div>
        Klu
      </a>
      <ul className="hidden md:flex items-center gap-[30px] list-none text-[13.5px] text-[var(--muted)] font-medium">
        <li className="cursor-pointer transition-colors duration-200 hover:text-[var(--text)]">Product</li>
        <li className="cursor-pointer transition-colors duration-200 hover:text-[var(--text)]">Pricing</li>
        <li className="cursor-pointer transition-colors duration-200 hover:text-[var(--text)] flex items-center">
          Blog
          <span className="bg-[rgba(0,229,160,0.12)] text-[var(--green)] rounded px-1.5 py-[1px] text-[10px] font-bold ml-1">NEW</span>
        </li>
        <li className="cursor-pointer transition-colors duration-200 hover:text-[var(--text)]">Changelog</li>
        <li className="cursor-pointer transition-colors duration-200 hover:text-[var(--text)]">Docs</li>
      </ul>
      <div className="flex items-center gap-3">
        <button className="bg-transparent border border-[var(--border)] text-[var(--muted)] px-[18px] py-[7px] rounded-[9px] text-[13px] font-medium cursor-pointer transition-all duration-250 hover:border-[rgba(0,229,160,0.3)] hover:text-[var(--text)]">
          Log in
        </button>
        <button className="bg-[var(--green)] border-none text-[#060a10] px-5 py-2 rounded-[9px] text-[13px] font-bold cursor-pointer transition-all duration-300 relative overflow-hidden hover:bg-[#00ffb5] hover:shadow-[0_6px_24px_rgba(0,229,160,0.4)] hover:-translate-y-[1px]">
          Try for free &rarr;
        </button>
      </div>
    </nav>
  );
}
