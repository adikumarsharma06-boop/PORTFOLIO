import React, { useState } from 'react';
import { motion } from 'motion/react';
import { JourneyStep } from '../types/portfolio';

interface CreatorJourneyProps {
  journeySteps: JourneyStep[];
  isTransparentMode?: boolean;
}

export const CreatorJourney: React.FC<CreatorJourneyProps> = ({ journeySteps }) => {
  const [activeStepId, setActiveStepId] = useState<string>(journeySteps[4]?.id || 'step-5');

  return (
    <section
      id="journey-section"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#101010] overflow-hidden border-t border-[#262626]"
      aria-label="Aditya Sharma Creator Journey Timeline"
    >
      {/* Top Laser Flow-Line Beam */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-[#262626]">
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_15px_#a855f7] animate-flow-beam" />
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#262626] bg-[#161616] text-xs font-semibold text-[#969696]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[#F2F0EA]">TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-[#F2F0EA]">
            THIS IS ONLY THE BEGINNING.
          </h2>
          <p className="text-xs sm:text-base text-[#969696] max-w-xl mx-auto">
            From initial curiosity to daily creation and future tool building.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Central Glowing Spine */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 sm:-translate-x-1/2 bg-gradient-to-b from-[#262626] via-sky-400/40 to-[#262626] shadow-[0_0_10px_rgba(56,189,248,0.3)]" />

          <div className="space-y-8 sm:space-y-12">
            {journeySteps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeStepId === step.id;
              const isToday = step.phase === 'TODAY';
              const isFuture = step.phase === 'FUTURE';

              return (
                <div
                  key={step.id}
                  id={`timeline-step-${step.phase.toLowerCase()}`}
                  onClick={() => setActiveStepId(step.id)}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group cursor-pointer`}
                >
                  {/* Central Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-5 z-20 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                        isToday
                          ? 'bg-blue-600 border-white shadow-[0_0_18px_#38bdf8]'
                          : isFuture
                          ? 'bg-purple-900 border-purple-400'
                          : isActive
                          ? 'bg-blue-500 border-white shadow-md'
                          : 'bg-[#161616] border-[#383838] group-hover:border-blue-400'
                      }`}
                    >
                      <span className="text-[10px] font-bold text-white font-mono">
                        0{index + 1}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content Card (Left or Right) */}
                  <div className="w-full sm:w-1/2 pl-11 sm:pl-0 sm:px-8">
                    <motion.div
                      whileHover={{ y: -3 }}
                      className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 border bg-[#161616] ${
                        isActive
                          ? 'border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                          : 'border-[#262626] hover:border-[#383838]'
                      }`}
                    >
                      {/* Badge & Phase */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase font-mono bg-[#101010] border border-[#262626] text-[#F2F0EA]">
                          {step.phase}
                        </span>
                        <span className="text-[11px] font-medium text-[#969696]">
                          {step.subtitle}
                        </span>
                      </div>

                      {/* Primary Exact Quote */}
                      <p className="text-sm sm:text-base font-bold text-[#F2F0EA] tracking-tight leading-snug">
                        “{step.quote}”
                      </p>

                      {/* Description Narrative */}
                      <p className="mt-2.5 text-xs sm:text-sm text-[#969696] leading-relaxed">
                        {step.description}
                      </p>

                      {/* Interactive Step Footer */}
                      <div className="mt-3.5 pt-2.5 border-t border-[#262626] flex items-center justify-between text-xs text-[#969696]">
                        <span className="font-mono text-[10px]">{step.badge}</span>
                        {isToday && (
                          <span className="text-emerald-400 font-semibold flex items-center gap-1 text-[11px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
