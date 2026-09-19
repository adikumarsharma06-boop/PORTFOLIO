import React from 'react';
import { motion } from 'motion/react';

interface CreatorPhilosophyProps {
  philosophy: {
    steps: string[];
    quote: string;
  };
  isTransparentMode?: boolean;
}

export const CreatorPhilosophy: React.FC<CreatorPhilosophyProps> = ({ philosophy }) => {
  return (
    <section
      id="philosophy-section"
      className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#101010] overflow-hidden border-t border-b border-[#262626]"
      aria-label="Creator Philosophy"
    >
      {/* Top Laser Flow-Line Beam */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-[#262626]">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-flow-beam" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-10 sm:space-y-12">
        
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#262626] bg-[#161616] text-xs font-semibold text-[#969696]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[#F2F0EA]">PHILOSOPHY</span>
        </div>

        {/* The 4-Step Loop: LEARN -> CREATE -> SHARE -> IMPROVE */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-5">
          {philosophy.steps.map((step, idx) => (
            <React.Fragment key={step}>
              {/* Step Pill */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="w-full md:w-auto px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl transition-all bg-[#161616] border border-[#262626] hover:border-cyan-400 hover:bg-[#1a1a1a] shadow-[0_0_15px_rgba(0,0,0,0.3)]"
              >
                <span className="text-[10px] font-mono text-cyan-400 block tracking-widest mb-1">
                  0{idx + 1}
                </span>
                <span className="text-xl sm:text-2xl font-black font-display tracking-wider text-[#F2F0EA]">
                  {step}
                </span>
              </motion.div>

              {/* Text Connector */}
              {idx < philosophy.steps.length - 1 && (
                <div className="flex items-center justify-center text-cyan-400 font-bold py-1 md:py-0 text-sm">
                  <span>→</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Quote Block */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#161616] border border-[#262626] shadow-[0_0_25px_rgba(0,0,0,0.3)]">
          <p className="text-xl sm:text-3xl font-extrabold font-display text-[#F2F0EA] max-w-2xl mx-auto leading-relaxed">
            “{philosophy.quote}”
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-cyan-400">
            <span>ADITYA SHARMA</span>
          </div>
        </div>

      </div>
    </section>
  );
};
