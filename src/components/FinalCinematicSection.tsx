import React from 'react';
import { motion } from 'motion/react';
import { getSafeLink } from '../lib/getSafeLink';
import { CreatorAnnotation } from './GraffitiMarks';
import { ArrowUp } from 'lucide-react';

interface FinalCinematicSectionProps {
  name: string;
  characterImage: string;
  instagramUrl?: string;
}

export const FinalCinematicSection: React.FC<FinalCinematicSectionProps> = ({
  name = 'ADITYA SHARMA',
  characterImage,
  instagramUrl = 'https://www.instagram.com/startwithaadii?igsh=MWg0NmU3czkyOG1jYg=='
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const safeInstagram = getSafeLink(instagramUrl);

  return (
    <footer
      id="final-cinematic-section"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#080808] overflow-hidden text-center flex flex-col items-center justify-center border-t border-[rgba(255,255,255,0.10)]"
      aria-label="Final Cinematic Statement"
    >
      {/* Top Laser Flow-Line Beam */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-[rgba(255,255,255,0.10)]">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-flow-beam" />
      </div>

      {/* Atmospheric Background Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-950/20 via-blue-950/20 to-transparent blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-10 flex flex-col items-center">
        
        {/* Original transparent creator character at smaller full-body scale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-44 sm:h-52 w-auto flex items-end justify-center"
        >
          {/* Subtle blue ambient pedestal glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-cyan-500/20 blur-xl rounded-full pointer-events-none" />
          
          <img
            src={characterImage}
            alt="Aditya Sharma Original Creator Character"
            className="h-full w-auto object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
            style={{
              filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.9)) drop-shadow(0 0 20px rgba(34,211,238,0.2))',
            }}
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Display: THE JOURNEY IS STILL BEING WRITTEN. */}
        <div className="space-y-6 max-w-3xl">
          <div className="flex items-center justify-center gap-2">
            <CreatorAnnotation label="CREATE" annotationType="marker" />
            <CreatorAnnotation label="DOCUMENT" annotationType="underline" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-[#F2F0EA] leading-tight">
            “THE JOURNEY IS STILL BEING WRITTEN.”
          </h2>

          <div className="pt-3 space-y-2">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#F2F0EA] tracking-wider font-display">
              {name.toUpperCase()}
            </h3>

            <p className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#929292] flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span className="text-[#F2F0EA]">CONTENT CREATOR</span>
              <span className="text-cyan-400">&bull;</span>
              <span>BUILDER</span>
              <span className="text-cyan-400">&bull;</span>
              <span className="text-cyan-300">AI EXPLORER</span>
            </p>
          </div>
        </div>

        {/* Action Buttons: WATCH MY CONTENT / EXPLORE MY WORK / CONNECT */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
          <button
            id="final-cta-watch-content"
            onClick={() => scrollTo('content-section')}
            className="px-6 py-3.5 rounded-full text-xs font-mono tracking-widest uppercase font-bold text-[#F2F0EA] bg-[#161616] border border-[rgba(255,255,255,0.15)] hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-xl cursor-pointer"
          >
            WATCH MY CONTENT
          </button>

          <button
            id="final-cta-explore-work"
            onClick={() => scrollTo('projects-section')}
            className="px-6 py-3.5 rounded-full text-xs font-mono tracking-widest uppercase font-bold text-[#F2F0EA] bg-[#161616] border border-[rgba(255,255,255,0.15)] hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-xl cursor-pointer"
          >
            EXPLORE MY WORK
          </button>

          {safeInstagram && (
            <a
              id="final-cta-connect"
              href={safeInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full text-xs font-mono tracking-widest uppercase font-bold text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-105"
              title="Connect with Aditya Sharma"
            >
              CONNECT
            </a>
          )}
        </div>

        {/* Scroll Back to Top & Subtle Fade-out Transition */}
        <div className="pt-12 flex flex-col items-center gap-3">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#161616] border border-[rgba(255,255,255,0.10)] text-[#929292] hover:text-[#F2F0EA] hover:border-cyan-400/50 transition-colors cursor-pointer"
            aria-label="Scroll to top of page"
            title="Return to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
          <span className="text-[10px] font-mono tracking-widest text-[#929292] uppercase">
            RETURN TO SUMMIT
          </span>
        </div>

        {/* Subtle Fade-Out Bottom Gradient */}
        <div className="w-full h-16 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      </div>
    </footer>
  );
};
