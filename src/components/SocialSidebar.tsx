import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SocialLinks } from '../types/portfolio';

interface SocialSidebarProps {
  socialLinks: SocialLinks;
}

export const SocialSidebar: React.FC<SocialSidebarProps> = ({ socialLinks }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal floating sidebar after user begins scrolling past the top hero fold
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socials = [
    {
      id: 'sidebar-social-instagram',
      name: 'Instagram',
      letter: 'IG',
      handle: '@startwithaadii',
      url: socialLinks.instagram,
      hoverBorder: 'hover:border-pink-500/60',
      hoverGlow: 'hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]',
      accentBadge: 'bg-pink-500',
    },
    {
      id: 'sidebar-social-linkedin',
      name: 'LinkedIn',
      letter: 'IN',
      handle: 'Aditya Sharma',
      url: socialLinks.linkedin,
      hoverBorder: 'hover:border-sky-500/60',
      hoverGlow: 'hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]',
      accentBadge: 'bg-sky-500',
    },
    {
      id: 'sidebar-social-x',
      name: 'X',
      letter: 'X',
      handle: '@AdityaShar54906',
      url: socialLinks.x,
      hoverBorder: 'hover:border-slate-400/60',
      hoverGlow: 'hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]',
      accentBadge: 'bg-slate-300',
    },
  ].filter((item) => Boolean(item.url));

  if (socials.length === 0) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          id="floating-social-sidebar"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          aria-label="Social links"
          className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3"
        >
          {/* Subtle vertical connector line */}
          <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-slate-700/60" />

          {/* Minimal Floating Dock */}
          <div className="p-1.5 rounded-2xl bg-[#161616] backdrop-blur-xl border border-[#262626] shadow-2xl flex flex-col items-center gap-2">
            {socials.map((item) => (
              <a
                key={item.id}
                id={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open Aditya's ${item.name} profile`}
                className={`relative group w-9 h-9 rounded-xl flex items-center justify-center bg-[#101010] border border-[#262626] text-[#F2F0EA] transition-all duration-300 hover:scale-110 active:scale-95 hover:border-[#383838] font-mono text-xs font-bold ${item.hoverBorder} ${item.hoverGlow}`}
              >
                <span>{item.letter}</span>

                {/* Minimal Tooltip */}
                <div
                  role="tooltip"
                  className="pointer-events-none absolute left-full ml-3.5 px-3 py-1.5 rounded-lg bg-[#161616] border border-[#262626] text-xs font-semibold text-[#F2F0EA] shadow-xl opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap flex items-center gap-2 z-50"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${item.accentBadge}`} />
                  <span>{item.name}</span>
                  <span className="text-[10px] text-[#969696] font-mono">
                    {item.handle}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="w-[1px] h-8 bg-gradient-to-t from-transparent to-slate-700/60" />
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
