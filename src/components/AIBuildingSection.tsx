import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Wrench, FlaskConical } from 'lucide-react';

interface AIBuildingSectionProps {
  onScrollToProject?: (projectId: string) => void;
}

export const AIBuildingSection: React.FC<AIBuildingSectionProps> = ({ onScrollToProject }) => {
  const categories = [
    {
      id: 'ai-tools',
      tag: '01 / APPLIED AI',
      title: 'AI TOOLS',
      icon: Cpu,
      description: 'Exploring tools that can improve creative workflows.',
      connectedProject: 'creatiq',
      projectName: 'CREATIQ',
      accent: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/20'
    },
    {
      id: 'creator-tools',
      tag: '02 / ARCHITECTURE',
      title: 'CREATOR TOOLS',
      icon: Wrench,
      description: 'Exploring ways technology can help creators.',
      connectedProject: 'stratger',
      projectName: 'STRATGER',
      accent: 'border-blue-500/40 text-blue-400 bg-blue-950/20'
    },
    {
      id: 'experiments',
      tag: '03 / LAB TESTING',
      title: 'EXPERIMENTS',
      icon: FlaskConical,
      description: 'Building and testing ideas.',
      connectedProject: 'kay',
      projectName: 'KAY',
      accent: 'border-purple-500/40 text-purple-400 bg-purple-950/20'
    }
  ];

  const handleProjectClick = (projectId: string) => {
    if (onScrollToProject) {
      onScrollToProject(projectId);
    } else {
      const el = document.getElementById(`project-card-${projectId}`) || document.getElementById('projects-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="ai-building-section"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#101010] overflow-hidden border-t border-[#262626]"
      aria-label="AI and Technology Lab"
    >
      {/* Top Laser Flow-Line Beam */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-[#262626]">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-flow-beam" />
      </div>

      {/* Atmospheric Background Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-950/20 via-indigo-950/15 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#262626] bg-[#161616] text-xs font-semibold text-[#969696]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[#F2F0EA]">LAB &amp; TECHNOLOGY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display text-[#F2F0EA] leading-[1.05]">
            BEYOND CONTENT.
          </h2>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#161616] border border-[#262626] shadow-xl">
            <p className="text-xl sm:text-3xl font-extrabold font-display text-[#F2F0EA] tracking-tight leading-snug">
              “I’m interested in what happens when creativity meets AI.”
            </p>
            <p className="mt-3 text-xs sm:text-sm text-[#969696] leading-relaxed">
              Moving beyond just consuming tools to understanding the mechanics behind them: prototyping concept platforms, exploring practical automations, and designing digital utilities that empower creators from the ground up.
            </p>
          </div>
        </div>

        {/* Three Editorial Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 bg-[#161616] border border-[#262626] hover:border-cyan-400/60 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono tracking-widest text-[#969696]">
                      {cat.tag}
                    </span>
                    <div className={`p-2.5 rounded-2xl border ${cat.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black font-display text-[#F2F0EA] group-hover:text-cyan-300 transition-colors mb-3">
                    {cat.title}
                  </h3>

                  <p className="text-sm text-[#969696] leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Connected Project Link */}
                <div className="mt-8 pt-5 border-t border-[#262626]">
                  <button
                    onClick={() => handleProjectClick(cat.connectedProject)}
                    className="w-full inline-flex items-center justify-between text-xs font-mono font-semibold text-cyan-400 hover:text-white transition-colors group/btn cursor-pointer"
                  >
                    <span>CONNECTED TO {cat.projectName}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Connection Ribbon to Projects */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#161616] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-mono text-[#F2F0EA]">
              EXPLORE ACTIVE LAB CONCEPTS:
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {['CREATIQ', 'STRATGER', 'KAY'].map((proj) => (
              <button
                key={proj}
                onClick={() => handleProjectClick(proj.toLowerCase())}
                className="px-3 py-1.5 rounded-xl bg-[#101010] hover:bg-cyan-950/40 border border-[#262626] hover:border-cyan-500/50 text-xs font-mono text-[#969696] hover:text-[#F2F0EA] transition-all cursor-pointer"
              >
                {proj} →
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
