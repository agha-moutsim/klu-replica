'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('int-item') ||
        target.classList.contains('card') ||
        target.classList.contains('dchip') ||
        target.classList.contains('plat-btn')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-[9px] h-[9px] bg-[var(--green)] rounded-full pointer-events-none z-[8998] mix-blend-screen"
        animate={{
          x: mousePosition.x - (isHovering ? 9 : 4.5),
          y: mousePosition.y - (isHovering ? 9 : 4.5),
          width: isHovering ? 18 : 9,
          height: isHovering ? 18 : 9,
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-[34px] h-[34px] border-[1.5px] border-[rgba(0,229,160,0.45)] rounded-full pointer-events-none z-[8997]"
        animate={{
          x: mousePosition.x - (isHovering ? 26 : 17),
          y: mousePosition.y - (isHovering ? 26 : 17),
          width: isHovering ? 52 : 34,
          height: isHovering ? 52 : 34,
          borderColor: isHovering ? 'rgba(0,229,160,0.7)' : 'rgba(0,229,160,0.45)',
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}
