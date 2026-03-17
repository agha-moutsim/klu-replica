'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

const SEARCHES = [
  'Search anything across your apps...',
  'Q3 sales report from Google Drive...',
  'Design handoff from Figma...',
  'Sprint notes in Confluence...',
  'When is my next meeting?',
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [searchIndex, setSearchIndex] = useState(0);

  useEffect(() => {
    let currentText = '';
    let isDeleting = false;
    let charIndex = 0;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentString = SEARCHES[searchIndex];

      if (isDeleting) {
        currentText = currentString.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = currentString.substring(0, charIndex + 1);
        charIndex++;
      }

      setTypedText(currentText);

      let typeSpeed = 55;
      if (isDeleting) typeSpeed /= 2;

      if (!isDeleting && currentText === currentString) {
        typeSpeed = 2200;
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        setSearchIndex((prev) => (prev + 1) % SEARCHES.length);
        typeSpeed = 500;
      }

      timeout = setTimeout(type, typeSpeed);
    };

    timeout = setTimeout(type, 2100);

    return () => clearTimeout(timeout);
  }, [searchIndex]);

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[130px] pb-[90px] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,229,160,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,160,0.022) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%,black 0%,transparent 100%)',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%,black 0%,transparent 100%)',
        }}
      />
      <motion.div
        animate={{ opacity: [0.75, 1, 0.75], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute pointer-events-none rounded-full top-[-15%] left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
        style={{ background: 'radial-gradient(ellipse,rgba(0,229,160,0.1),transparent 68%)' }}
      />
      <div
        className="absolute pointer-events-none rounded-full top-[28%] left-[10%] w-[320px] h-[320px]"
        style={{ background: 'radial-gradient(ellipse,rgba(0,119,187,0.08),transparent 65%)' }}
      />
      <div
        className="absolute pointer-events-none rounded-full top-[22%] right-[8%] w-[280px] h-[280px]"
        style={{ background: 'radial-gradient(ellipse,rgba(124,58,237,0.07),transparent 65%)' }}
      />

      {/* Floating Icons */}
      {[
        { icon: '📧', top: '21%', left: '7%', delay: 0.9 },
        { icon: '🗂️', top: '37%', left: '4%', delay: 1.0 },
        { icon: '💬', top: '56%', left: '7%', delay: 1.1 },
        { icon: '📁', top: '72%', left: '10%', delay: 1.2 },
        { icon: '📊', top: '21%', right: '7%', delay: 1.3 },
        { icon: '📝', top: '37%', right: '4%', delay: 1.4 },
        { icon: '🔗', top: '56%', right: '7%', delay: 1.5 },
        { icon: '☁️', top: '72%', right: '10%', delay: 1.6 },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: -18 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: item.delay, type: 'spring', bounce: 0.5 }}
          className="absolute w-12 h-12 rounded-[13px] flex items-center justify-center text-[23px] border border-white/5 bg-white/5 backdrop-blur-md hidden md:flex"
          style={{ top: item.top, left: item.left, right: item.right }}
        >
          <motion.div
            animate={{
              y: [0, Math.sin(i * 1.4) * 15 + 8, 0],
              x: [0, Math.cos(i * 0.9) * 6, 0],
              rotate: [0, Math.sin(i) * 5, 0],
            }}
            transition={{
              duration: 2.8 + i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {item.icon}
          </motion.div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full py-[7px] px-[18px] text-[12.5px] text-[var(--muted)] mb-8"
      >
        <div className="w-[7px] h-[7px] rounded-full bg-[#ff6154] animate-[pdot_2s_ease-out_infinite]" />
        <span>
          🎉 Welcome to our <strong className="text-[var(--text)]">public beta</strong> — excited for you to try Klu!
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.45, ease: 'easeOut' }}
        className="text-[clamp(46px,7.5vw,92px)] font-black leading-[1.04] tracking-[-3.5px] mb-1"
      >
        Find the right information.<br />
        <span className="text-[var(--green)] block">Instantly.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }}
        className="text-[clamp(15px,1.4vw,17px)] text-[var(--muted)] max-w-[450px] mx-auto mt-5 mb-9 leading-[1.75]"
      >
        Connect all your apps for seamless, unified searching.<br />Your internal search engine, powered by AI.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.85, type: 'spring', bounce: 0.4 }}
        className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl py-3.5 px-5 w-full max-w-[540px] mx-auto mb-6.5 cursor-text transition-all duration-300 hover:border-[rgba(0,229,160,0.3)] hover:shadow-[0_0_0_4px_rgba(0,229,160,0.06)]"
      >
        <Search className="text-[var(--dim)] w-4 h-4" />
        <span className="flex-1 text-[14.5px] text-[var(--muted)] text-left h-[22px] overflow-hidden whitespace-nowrap">
          {typedText}
          <span className="animate-pulse">|</span>
        </span>
        <span className="bg-white/5 border border-[var(--border)] rounded-md py-[3px] px-2 text-[11px] text-[var(--dim)] font-mono">
          ⌘ K
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
        className="flex gap-3.5 justify-center items-center mb-16"
      >
        <button className="bg-[var(--green)] border-none text-[#060a10] py-3.5 px-[34px] rounded-xl text-[15px] font-bold cursor-pointer transition-all duration-300 relative overflow-hidden group hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,229,160,0.4)]">
          <span className="relative z-10">Start for free &rarr;</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
        </button>
        <button className="bg-transparent border border-[var(--border)] text-[var(--muted)] py-3.5 px-7 rounded-xl text-[15px] font-medium cursor-pointer transition-all duration-300 hover:border-white/20 hover:text-[var(--text)]">
          ▶ Watch demo
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.15, ease: 'easeOut' }}
        className="flex items-center gap-3.5 justify-center flex-wrap"
      >
        <span className="text-[12px] text-[var(--dim)] mr-1.5">Works with</span>
        {['📧', '💬', '📁', '🗂️', '📊', '📝', '🔗', '⚙️', '🐙'].map((icon, i) => (
          <div
            key={i}
            className="w-9 h-9 rounded-[10px] text-lg flex items-center justify-center bg-white/5 border border-[var(--border)] transition-all duration-300 cursor-default hover:border-[var(--bgreen)] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
          >
            {icon}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
