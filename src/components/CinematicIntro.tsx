import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CinematicIntroProps {
  onComplete: () => void;
  name: string;
  subIdentities: string[];
  coreBrand: string;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({
  onComplete,
  name,
  subIdentities,
  coreBrand,
}) => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('aditya_intro_seen');
    if (hasSeen === 'true') {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setStep(1), 700);
    const t2 = setTimeout(() => setStep(2), 1600);
    const t3 = setTimeout(() => setStep(3), 2500);
    const t4 = setTimeout(() => {
      sessionStorage.setItem('aditya_intro_seen', 'true');
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('aditya_intro_seen', 'true');
    onComplete();
  };

  return (
    <motion.div
      id="cinematic-intro-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] text-[#F2F0EA] overflow-hidden select-none"
    >
      {/* Expanding point of light */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        initial={{ width: 4, height: 4, opacity: 0.9, filter: 'blur(2px)' }}
        animate={{
          width: step >= 1 ? 600 : 80,
          height: step >= 1 ? 600 : 80,
          opacity: step >= 1 ? 0.25 : 0.8,
          filter: step >= 1 ? 'blur(80px)' : 'blur(8px)',
        }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.7) 0%, rgba(168,85,247,0.3) 40%, rgba(8,8,8,0) 70%)',
        }}
      />

      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Content Container with subtle zoom-in */}
      <motion.div
        className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center"
        initial={{ scale: 0.96 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3.5, ease: 'easeOut' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: step >= 1 ? 0.6 : 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#262626] bg-[#161616] text-xs tracking-widest text-[#969696] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[#F2F0EA]">PORTFOLIO</span>
        </motion.div>

        {/* Name Reveal */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.h1
              id="intro-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display text-[#F2F0EA] drop-shadow-sm"
            >
              {name}
            </motion.h1>
          )}
        </AnimatePresence>

        {/* Sub-identities */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              id="intro-identities"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium tracking-widest text-[#969696]"
            >
              {subIdentities.map((item, idx) => (
                <React.Fragment key={item}>
                  <span className="text-[#F2F0EA]">{item}</span>
                  {idx < subIdentities.length - 1 && (
                    <span className="text-[#383838] select-none">•</span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Core Brand Statement */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              id="intro-brand-statement"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mt-6 sm:mt-8 pt-6 border-t border-[#262626] max-w-lg"
            >
              <p className="text-base sm:text-lg text-[#969696] italic font-light tracking-wide">
                “{coreBrand}”
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Skip Button */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          id="skip-intro-button"
          onClick={handleSkip}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-[#969696] hover:text-[#F2F0EA] bg-[#161616] hover:bg-[#202020] border border-[#262626] backdrop-blur transition-all cursor-pointer"
          aria-label="Skip introduction"
        >
          <span>Skip →</span>
        </button>
      </div>
    </motion.div>
  );
};
