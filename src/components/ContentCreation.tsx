import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ContentItem } from '../types/portfolio';
import { getSafeLink } from '../lib/getSafeLink';
import { CreatorAnnotation } from './GraffitiMarks';
import { ExternalLink, Play, Sparkles } from 'lucide-react';

interface ContentCreationProps {
  contentList: ContentItem[];
  instagramUrl?: string;
}

export const ContentCreation: React.FC<ContentCreationProps> = ({ 
  contentList = [],
  instagramUrl = 'https://www.instagram.com/startwithaadii?igsh=MWg0NmU3czkyOG1jYg=='
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'AI',
    'CREATOR JOURNEY',
    'EXPERIMENTS',
    'DOCUMENTARY'
  ];

  const filteredContent = activeCategory === 'ALL'
    ? contentList
    : contentList.filter((c) => c.category?.toUpperCase() === activeCategory);

  const safeInstagram = getSafeLink(instagramUrl);

  return (
    <section
      id="content-section"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#101010] overflow-hidden border-t border-[rgba(255,255,255,0.10)]"
      aria-label="Content Creation Dispatch"
    >
      {/* Top Laser Flow-Line Beam */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-[rgba(255,255,255,0.10)]">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-pink-500 to-transparent shadow-[0_0_15px_#ec4899] animate-flow-beam-slow" />
      </div>

      {/* Atmospheric Background Ambient Light */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Background Kinetic Stream */}
      <div className="absolute inset-x-0 top-2/3 -translate-y-1/2 overflow-hidden pointer-events-none select-none opacity-5">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ repeat: Infinity, duration: 38, ease: 'linear' }}
          className="flex whitespace-nowrap gap-10 text-6xl sm:text-8xl font-black font-display text-transparent"
          style={{ WebkitTextStroke: '1px rgba(242, 240, 234, 0.2)' }}
        >
          {['STARTWITHAADII', 'DOCUMENTARY', 'RAW PROCESS', 'PACING', 'GRAPHIC DESIGN', 'EXPERIMENTS'].map((txt, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>{txt}</span>
              <span className="text-pink-400 text-3xl font-sans">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[rgba(255,255,255,0.10)] bg-[#161616] text-xs font-semibold text-[#929292]">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="text-[#F2F0EA] font-mono tracking-widest uppercase">DISPATCH // 04</span>
            </div>
            <CreatorAnnotation label="DOCUMENT" annotationType="marker" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight font-display text-[#F2F0EA] leading-[1.02]">
            I DOCUMENT THE JOURNEY.
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl text-[#F2F0EA] font-extrabold tracking-wide font-display italic">
            “Ideas. Experiments. Lessons. Reality.”
          </p>

          <p className="text-xs sm:text-sm text-[#929292] max-w-2xl leading-relaxed font-mono">
            Every release is anchored in honest learning, disciplined editing, and transparent creative discovery.
          </p>
        </div>

        {/* Primary Instagram Dispatch Banner */}
        <div className="relative rounded-3xl p-6 sm:p-10 mb-14 overflow-hidden transition-all duration-300 bg-[#161616] border border-[rgba(255,255,255,0.10)] hover:border-pink-500/50 shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#F2F0EA] tracking-tight">
                  @startwithaadii
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#101010] text-[#F2F0EA] border border-[rgba(255,255,255,0.15)]">
                  ACTIVE PUBLISHING
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#929292] max-w-2xl leading-relaxed">
                Reels, design workflows, and real-time creator experiments. Connect directly to view documented projects and creative discussions.
              </p>
            </div>

            {safeInstagram && (
              <a
                id="content-instagram-cta"
                href={safeInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest font-bold text-white bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 transition-all shadow-lg shadow-pink-500/25 hover:scale-105 shrink-0"
              >
                <span>OPEN @STARTWITHAADII</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

          </div>
        </div>

        {/* Editorial Category Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs font-mono uppercase text-[#929292] mr-2">CHANNELS:</span>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#161616] text-[#F2F0EA] border border-cyan-400 font-bold shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                    : 'bg-[#101010] text-[#929292] hover:text-[#F2F0EA] border border-[rgba(255,255,255,0.08)]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Content Items List / Configured YouTube Releases */}
        {filteredContent.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredContent.map((item, idx) => {
              const safeUrl = getSafeLink(item.url);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-3xl overflow-hidden bg-[#161616] border border-[rgba(255,255,255,0.10)] hover:border-pink-400/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative aspect-video w-full overflow-hidden bg-[#080808]">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-[#101010] to-[#161616]">
                          <Play className="w-10 h-10 text-pink-400/70" />
                        </div>
                      )}
                      
                      {item.category && (
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-[#080808]/80 text-pink-300 border border-pink-500/30 backdrop-blur-md">
                            {item.category}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Meta & Description */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold font-display text-[#F2F0EA] group-hover:text-pink-300 transition-colors">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-xs sm:text-sm text-[#929292] leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Watch Link */}
                  {safeUrl && (
                    <div className="p-6 pt-0 border-t border-[rgba(255,255,255,0.08)] mt-3">
                      <a
                        href={safeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-pink-400 hover:text-pink-300 pt-3 transition-colors"
                      >
                        <span>WATCH RELEASE</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Editorial Dispatch Placeholder when zero synthetic videos are configured */
          <div className="p-8 sm:p-12 rounded-3xl bg-[#161616] border border-[rgba(255,255,255,0.10)] text-center space-y-5 max-w-3xl mx-auto">
            <div className="inline-flex p-3 rounded-2xl bg-[#101010] border border-[rgba(255,255,255,0.10)] text-pink-400">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black font-display text-[#F2F0EA]">
                AUTHENTIC CONTENT DISPATCH
              </h3>
              <p className="text-sm text-[#929292] max-w-lg mx-auto leading-relaxed">
                In strict compliance with editorial guidelines, zero synthetic video views or fabricated counts are displayed. Real content releases and tutorials appear here as they are published.
              </p>
            </div>

            {safeInstagram && (
              <div className="pt-2">
                <a
                  href={safeInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs uppercase tracking-wider font-bold bg-[#101010] hover:bg-pink-950/40 text-pink-300 border border-pink-500/40 transition-all hover:border-pink-500"
                >
                  <span>FOLLOW RELEASES ON INSTAGRAM (@STARTWITHAADII)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
