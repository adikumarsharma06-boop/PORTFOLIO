import React, { useState } from 'react';
import { motion } from 'motion/react';
import { VisionCategory } from '../types/portfolio';

interface VisionSectionProps {
  vision: {
    mainStatement: string;
    supportingText: string;
    categories: VisionCategory[];
  };
  isTransparentMode?: boolean;
}

export const VisionSection: React.FC<VisionSectionProps> = ({ vision }) => {
  const [activeCategory, setActiveCategory] = useState<string>(vision.categories[0]?.id || 'creators');

  return (
    <section
      id="vision-section"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#101010] overflow-hidden"
      aria-label="Creator Vision & Tool Building"
    >
      {/* Laser Flow-Line Beam Across Section */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-[#262626]">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee] animate-flow-beam-slow" />
      </div>

      {/* Dynamic Background Light Cone */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-blue-600/5 via-purple-600/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Background Kinetic Stream */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none select-none opacity-5">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
          className="flex whitespace-nowrap gap-8 text-7xl font-black font-display text-transparent"
          style={{ WebkitTextStroke: '1px rgba(242, 240, 234, 0.2)' }}
        >
          {['CREATOR TOOLS', 'ECOSYSTEMS', 'AUTOMATION', 'WORKFLOWS', 'CREATIQ', 'STRATGER', 'KAY'].map((item, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-cyan-400 text-3xl font-sans">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Large Statement Section */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#262626] bg-[#161616] text-xs font-semibold text-[#969696]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[#F2F0EA]">VISION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-display text-[#F2F0EA] leading-tight">
            “I DON'T JUST WANT TO CREATE CONTENT. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              I WANT TO BUILD THE TOOLS BEHIND IT.
            </span>”
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#969696] leading-relaxed font-normal">
            “{vision.supportingText}”
          </p>
        </div>

        {/* The Three Visual Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {vision.categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;

            return (
              <motion.div
                key={cat.id}
                id={`vision-category-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`p-6 sm:p-7 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between bg-[#161616] ${
                  isActive 
                    ? 'border-cyan-400/80 shadow-[0_0_25px_rgba(6,182,212,0.25)]' 
                    : 'border-[#262626] hover:border-[#383838]'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs text-cyan-400 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight text-[#F2F0EA] mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-[#969696] mb-5">
                    {cat.description}
                  </p>

                  {/* Bullet / Focus Items */}
                  <div className="space-y-2 pt-3 border-t border-[#262626]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#969696] block">
                      Target Solutions:
                    </span>
                    {cat.focusAreas.map((area, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#969696] leading-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#262626] flex items-center justify-between text-xs text-[#969696]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">{cat.title}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
