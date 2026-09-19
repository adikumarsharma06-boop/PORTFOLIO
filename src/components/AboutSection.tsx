import React from 'react';
import { motion } from 'motion/react';
import { PortfolioData } from '../types/portfolio';
import { CreatorAnnotation } from './GraffitiMarks';

interface AboutSectionProps {
  editorial: PortfolioData['profile']['aboutEditorial'];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ editorial }) => {
  const highlightWords = [
    'CONTENT CREATOR',
    'content creator',
    'AI',
    'CREATIVITY',
    'creativity',
    'BUILDING',
    'building',
    'LEARNING',
    'learning',
    'EXPERIMENTING',
    'experimenting',
  ];

  const renderEditorialText = (text: string) => {
    const regex = new RegExp(`(${highlightWords.join('|')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, idx) => {
      const isMatch = highlightWords.some((w) => w.toLowerCase() === part.toLowerCase());
      if (!isMatch) return part;

      return (
        <span
          key={idx}
          className="inline-block font-extrabold text-[#F2F0EA] bg-cyan-950/60 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.2)] mx-0.5"
        >
          {part}
        </span>
      );
    });
  };

  return (
    <section
      id="about-section"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#080808] overflow-hidden border-t border-[rgba(255,255,255,0.10)]"
      aria-label="The Person Behind the Screen"
    >
      {/* Top Laser Flow-Line Beam */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-[rgba(255,255,255,0.10)]">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-flow-beam" />
      </div>

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] bg-gradient-to-b from-blue-600/10 via-purple-600/5 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[rgba(255,255,255,0.10)] bg-[#161616] text-xs font-semibold text-[#929292]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="tracking-wider uppercase font-mono text-[#F2F0EA]">STATEMENT // 02</span>
            </div>
            <CreatorAnnotation label="DOCUMENT" annotationType="marker" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight font-display text-[#F2F0EA] leading-[1.02]">
            THE PERSON BEHIND THE SCREEN
          </h2>

          <p className="text-xs sm:text-sm font-mono tracking-widest text-[#929292] uppercase">
            AUTHENTIC REALITY • STUDENT CREATOR • ZERO FABRICATED METRICS
          </p>
        </div>

        {/* Editorial Layout: Multi-column Asymmetric Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Editorial Text Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Primary Opening Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#161616] border border-[rgba(255,255,255,0.10)] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />
              
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-4">
                PRIMARY MANIFESTO
              </span>

              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F2F0EA] leading-relaxed font-display tracking-tight">
                {renderEditorialText(editorial.lead)}
              </p>
            </motion.div>

            {/* Sequential Editorial Paragraphs */}
            <div className="space-y-5">
              {editorial.bodyParagraphs.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 sm:p-8 rounded-3xl bg-[#101010] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.18)] transition-all"
                >
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#929292]">
                    <span className="text-cyan-400 font-bold uppercase tracking-wider">
                      PARAGRAPH 0{index + 1}
                    </span>
                    <span className="text-[#929292]">JOURNEY NOTES</span>
                  </div>

                  <p className="text-base sm:text-lg leading-relaxed text-[#929292] font-normal">
                    {renderEditorialText(paragraph)}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Sidebar: Key Thematic Anchors & Controlled Maximalist Notes (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Highlighted Visual Tags Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#161616] border border-[rgba(255,255,255,0.10)] space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#929292] uppercase block">
                CORE FOCUS THEMES
              </span>

              <div className="flex flex-wrap gap-2">
                {[
                  'CONTENT CREATOR',
                  'AI',
                  'CREATIVITY',
                  'BUILDING',
                  'LEARNING',
                  'EXPERIMENTING'
                ].map((word) => (
                  <span
                    key={word}
                    className="px-3 py-1.5 rounded-full font-mono text-xs font-bold bg-[#080808] border border-cyan-500/40 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                  >
                    #{word}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-[rgba(255,255,255,0.10)]">
                <p className="text-xs text-[#929292] leading-relaxed">
                  Every theme above is explored transparently through real student practice, video timelines, and code.
                </p>
              </div>
            </div>

            {/* Creator Discipline Callout */}
            <div className="p-6 rounded-3xl bg-[#101010] border border-[rgba(255,255,255,0.08)] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-lime-400 font-bold block">
                EDITORIAL INTEGRITY
              </span>
              <p className="text-xs sm:text-sm text-[#F2F0EA] font-semibold leading-relaxed">
                “My journey is about learning skills, creating consistently, experimenting with ideas, making mistakes, improving, and documenting the process.”
              </p>
              <p className="text-[11px] font-mono text-[#929292]">
                — ADITYA SHARMA
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
