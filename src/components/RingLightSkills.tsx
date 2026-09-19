import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SkillItem } from '../types/portfolio';

interface RingLightSkillsProps {
  skills: SkillItem[];
}

export const RingLightSkills: React.FC<RingLightSkillsProps> = ({ skills }) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [rotation, setRotation] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('skills-section');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      setRotation(progress * 180);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentSkill = skills[selectedIdx] || skills[0];

  return (
    <section
      id="skills-section"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#101010] overflow-hidden border-t border-[rgba(255,255,255,0.10)]"
      aria-label="Creator Ring Light Skills Reveal"
    >
      {/* Top Laser Flow-Line Beam */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-[rgba(255,255,255,0.10)]">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-flow-beam" />
      </div>

      {/* Atmospheric Background Ambient Light */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-950/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.10)] bg-[#161616] text-xs font-semibold text-[#929292]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[#F2F0EA] font-mono uppercase tracking-widest">SKILL MATRIX</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight font-display text-[#F2F0EA]">
            UNDER THE STUDIO LIGHT
          </h2>
          
          <p className="text-xs sm:text-base text-[#929292] max-w-xl mx-auto font-mono">
            Interactive creator ring light reveal. Select or rotate to inspect core technical and storytelling capabilities.
          </p>
        </div>

        {/* Ring Light Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left / Center Stage: The Ring Light Rig (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Outer Pulsing Glow */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/30 via-sky-400/20 to-transparent blur-3xl animate-pulse" />

              {/* The Rotating Ring Body */}
              <motion.div
                className="relative w-full h-full rounded-full border-4 border-cyan-400/60 shadow-[0_0_40px_rgba(6,182,212,0.4)] flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                {/* Secondary inner ring edge */}
                <div className="absolute inset-2 rounded-full border border-cyan-300/30" />

                {/* 4 Peripheral Light Nodes on the Ring */}
                {skills.map((skill, idx) => {
                  const isSelected = selectedIdx === idx;
                  const angles = [0, 90, 180, 270];
                  const angle = angles[idx] || 0;
                  const rad = (angle * Math.PI) / 180;
                  const r = 46; // percentage radius
                  const x = 50 + r * Math.cos(rad);
                  const y = 50 + r * Math.sin(rad);

                  return (
                    <button
                      key={skill.id}
                      onClick={() => setSelectedIdx(idx)}
                      style={{ left: `${x}%`, top: `${y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-cyan-400 text-black font-bold shadow-[0_0_20px_#22d3ee] scale-125 z-20'
                          : 'bg-[#161616] text-[#929292] hover:text-[#F2F0EA] border border-cyan-500/40 hover:scale-110'
                      }`}
                      aria-label={`Select skill 0${idx + 1}`}
                    >
                      <span className="text-[11px] font-mono font-bold">0{idx + 1}</span>
                    </button>
                  );
                })}
              </motion.div>

              {/* Center Core: MY SKILLS */}
              <div className="absolute inset-16 sm:inset-20 rounded-full bg-[#080808] border border-[rgba(255,255,255,0.15)] flex flex-col items-center justify-center text-center p-4 shadow-2xl z-10">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse mb-1" />
                <span className="text-xs sm:text-sm font-black font-display tracking-widest text-[#F2F0EA]">
                  MY SKILLS
                </span>
                <span className="text-[10px] font-mono text-[#929292] mt-0.5">
                  0{selectedIdx + 1} / 04
                </span>
              </div>

            </div>

            {/* Sub-label under ring */}
            <div className="mt-6 text-center">
              <p className="text-xs font-mono text-[#929292] tracking-wider">
                ACTIVE FOCUS: <span className="text-cyan-400 font-semibold">{currentSkill.title}</span>
              </p>
            </div>
          </div>

          {/* Right Stage: Thin Editorial Line & Sequential Skills List (7 Cols) */}
          <div className="lg:col-span-7 space-y-4 relative">
            
            {/* Thin extending editorial line */}
            <div className="hidden lg:block absolute -left-8 top-12 bottom-12 w-[1px] bg-gradient-to-b from-cyan-400 via-cyan-400/40 to-transparent" />

            {skills.map((skill, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <motion.div
                  key={skill.id}
                  id={`skill-card-${idx + 1}`}
                  onClick={() => setSelectedIdx(idx)}
                  whileHover={{ x: 4 }}
                  className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#161616] border-2 border-cyan-400/70 shadow-[0_0_25px_rgba(6,182,212,0.15)]'
                      : 'bg-[#161616]/70 border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-mono font-bold tracking-widest ${isSelected ? 'text-cyan-400' : 'text-[#929292]'}`}>
                          0{idx + 1}
                        </span>
                        <h3 className={`text-xl sm:text-2xl font-black font-display tracking-tight transition-colors ${
                          isSelected ? 'text-[#F2F0EA]' : 'text-[#929292]'
                        }`}>
                          {skill.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#929292] leading-relaxed pt-1">
                        “{skill.description}”
                      </p>
                    </div>

                    {/* Subtle Visual Indicator */}
                    <div className="shrink-0 mt-1">
                      <div className={`w-3 h-3 rounded-full transition-all ${
                        isSelected
                          ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]'
                          : 'border border-[#929292] bg-transparent'
                      }`} />
                    </div>
                  </div>

                  {/* Expanded craft points when selected */}
                  <AnimatePresence>
                    {isSelected && skill.details && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.10)] space-y-2 overflow-hidden"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {skill.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2 text-xs text-[#929292]">
                              <span className="text-cyan-400 font-mono">→</span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>

                        {skill.tools && (
                          <div className="flex flex-wrap items-center gap-2 pt-2">
                            <span className="text-[10px] font-mono text-[#929292] uppercase">Tools:</span>
                            {skill.tools.map((t) => (
                              <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#080808] border border-[rgba(255,255,255,0.10)] text-[#F2F0EA]">
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};
