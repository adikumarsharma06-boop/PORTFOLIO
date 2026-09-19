import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types/portfolio';
import { getSafeLink } from '../lib/getSafeLink';
import { CreatorAnnotation } from './GraffitiMarks';
import { ExternalLink, Github, FileText, ArrowUpRight } from 'lucide-react';

interface ProjectsShowcaseProps {
  projects: ProjectItem[];
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getStatusBadgeStyle = (status: ProjectItem['status']) => {
    switch (status) {
      case 'Building / Concept':
        return 'border-cyan-500/40 text-cyan-300 bg-cyan-950/20';
      case 'Concept / Building':
        return 'border-indigo-500/40 text-indigo-300 bg-indigo-950/20';
      case 'Experiment / Concept':
        return 'border-purple-500/40 text-purple-300 bg-purple-950/20';
      case 'Active Experiments':
        return 'border-emerald-500/40 text-emerald-300 bg-emerald-950/20';
      default:
        return 'border-[rgba(255,255,255,0.15)] text-[#F2F0EA] bg-[#161616]';
    }
  };

  return (
    <section
      id="projects-section"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#080808] overflow-hidden border-t border-[rgba(255,255,255,0.10)]"
      aria-label="Selected Work and Projects"
    >
      {/* Top Laser Flow-Line Beam */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-[rgba(255,255,255,0.10)]">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-flow-beam" />
      </div>

      {/* Atmospheric Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[500px] bg-cyan-950/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[rgba(255,255,255,0.10)] bg-[#161616] text-xs font-semibold text-[#929292]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[#F2F0EA] font-mono tracking-widest uppercase">CATALOG // 03</span>
            </div>
            <CreatorAnnotation label="CREATE" annotationType="arrow" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight font-display text-[#F2F0EA] leading-[1.02]">
            SELECTED WORK
          </h2>

          <p className="text-xs sm:text-sm text-[#929292] font-mono uppercase tracking-widest">
            AI-FOCUSED PLATFORM CONCEPTS &bull; PRODUCTIVITY PROTOTYPES &bull; ZERO FABRICATED URLS
          </p>
        </div>

        {/* Large Editorial Project Presentations (Stack / Grid) */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((proj, idx) => {
            const projectNumber = `0${idx + 1}`;
            const safeLiveUrl = getSafeLink(proj.liveUrl);
            const safeGithubUrl = getSafeLink(proj.githubUrl);
            const safeCaseStudyUrl = getSafeLink(proj.caseStudyUrl);
            const hasAnyLink = safeLiveUrl || safeGithubUrl || safeCaseStudyUrl;

            return (
              <motion.div
                key={proj.id}
                id={`project-card-${proj.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-[#161616] border border-[rgba(255,255,255,0.10)] hover:border-cyan-400/50 shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left Column: Visual Presentation (6 Cols) */}
                  <div className="lg:col-span-6 relative aspect-video sm:aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#101010] min-h-[280px] sm:min-h-[340px]">
                    {safeLiveUrl ? (
                      <a
                        href={safeLiveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full relative cursor-pointer group/img"
                        title={`Open ${proj.name} live`}
                      >
                        <img
                          src={proj.image}
                          alt={`${proj.name} concept presentation`}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 opacity-90"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-4 py-2 rounded-full text-xs font-mono font-bold bg-cyan-400 text-black shadow-[0_0_20px_#22d3ee] flex items-center gap-2">
                            <span>OPEN {proj.name}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </a>
                    ) : (
                      <img
                        src={proj.image}
                        alt={`${proj.name} concept presentation`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80 pointer-events-none" />

                    {/* Editorial Project Number Pill */}
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#080808]/90 text-[#F2F0EA] border border-[rgba(255,255,255,0.15)] shadow-lg backdrop-blur-md">
                        PROJECT {projectNumber}
                      </span>
                    </div>

                    {/* Status badge on preview */}
                    <div className="absolute top-4 right-4 pointer-events-none">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold border backdrop-blur-md ${getStatusBadgeStyle(proj.status)}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        <span>{proj.status.toUpperCase()}</span>
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Editorial Details (6 Cols) */}
                  <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Sub-header meta */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono tracking-widest text-[#929292] uppercase">
                          CONCEPT PROTOTYPE // {proj.id.toUpperCase()}
                        </span>
                        <button
                          onClick={() => setSelectedProject(proj)}
                          className="text-xs font-mono text-cyan-400 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1"
                        >
                          <span>OVERVIEW</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Project Name & Link Indicator */}
                      {safeLiveUrl ? (
                        <a
                          href={safeLiveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/title inline-flex items-center gap-3"
                          title={`Open ${proj.name} live`}
                        >
                          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#F2F0EA] group-hover/title:text-cyan-300 transition-colors">
                            {proj.name}
                          </h3>
                          <ArrowUpRight className="w-6 h-6 text-cyan-400 opacity-70 group-hover/title:opacity-100 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all" />
                        </a>
                      ) : (
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#F2F0EA] group-hover:text-cyan-300 transition-colors">
                          {proj.name}
                        </h3>
                      )}

                      {/* Exact User Description */}
                      <div className="mt-4 p-5 rounded-2xl bg-[#101010] border border-[rgba(255,255,255,0.08)]">
                        <p className="text-sm sm:text-base text-[#F2F0EA] leading-relaxed font-normal">
                          “{proj.description}”
                        </p>
                      </div>

                      {/* Tags List */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-xl text-xs font-mono font-semibold bg-[#080808] border border-[rgba(255,255,255,0.10)] text-cyan-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons: Strictly follow the rule:
                        If liveURL is empty: hide LIVE DEMO.
                        If githubURL is empty: hide GITHUB.
                        If caseStudyURL is empty: hide CASE STUDY.
                    */}
                    <div className="pt-6 border-t border-[rgba(255,255,255,0.10)]">
                      {hasAnyLink ? (
                        <div className="flex flex-wrap items-center gap-3">
                          {safeLiveUrl && (
                            <a
                              href={safeLiveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all hover:scale-105"
                              title={`Open ${proj.name} (${safeLiveUrl})`}
                            >
                              <span>OPEN PROJECT</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}

                          {safeGithubUrl && (
                            <a
                              href={safeGithubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold bg-[#101010] hover:bg-[#080808] text-[#F2F0EA] border border-[rgba(255,255,255,0.15)] transition-all"
                            >
                              <Github className="w-3.5 h-3.5" />
                              <span>GITHUB</span>
                            </a>
                          )}

                          {safeCaseStudyUrl && (
                            <a
                              href={safeCaseStudyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold bg-[#101010] hover:bg-[#080808] text-cyan-300 border border-cyan-500/40 transition-all"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              <span>CASE STUDY</span>
                            </a>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center justify-between text-xs font-mono text-[#929292]">
                          <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                            <span>Active prototyping &bull; Links configured upon release</span>
                          </span>
                          <button
                            onClick={() => setSelectedProject(proj)}
                            className="text-cyan-400 hover:text-white transition-colors cursor-pointer"
                          >
                            Read Concept Notes →
                          </button>
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#161616] border border-[rgba(255,255,255,0.15)] p-6 sm:p-8 shadow-2xl text-[#F2F0EA]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 px-3 py-1 text-xs font-mono rounded-full bg-[#101010] text-[#929292] hover:text-[#F2F0EA] border border-[rgba(255,255,255,0.15)] cursor-pointer"
                aria-label="Close dialog"
              >
                CLOSE [ESC]
              </button>

              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold border ${getStatusBadgeStyle(selectedProject.status)}`}>
                  {selectedProject.status.toUpperCase()}
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-display text-[#F2F0EA] mt-2">
                  {selectedProject.name}
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#929292] leading-relaxed">
                <div className="p-5 rounded-2xl bg-[#101010] border border-cyan-500/30">
                  <p className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-bold mb-2">
                    Primary Objective:
                  </p>
                  <p className="text-sm sm:text-base text-[#F2F0EA] italic leading-relaxed">
                    “{selectedProject.description}”
                  </p>
                </div>

                {selectedProject.conceptNotes && (
                  <div className="p-4 rounded-2xl bg-[#101010] border border-[rgba(255,255,255,0.10)]">
                    <p className="font-mono text-xs text-[#929292] uppercase mb-1">Architecture Notes:</p>
                    <p className="text-[#F2F0EA] text-xs sm:text-sm leading-relaxed">{selectedProject.conceptNotes}</p>
                  </div>
                )}

                <div className="pt-4 border-t border-[rgba(255,255,255,0.10)]">
                  <p className="font-mono text-xs text-[#929292] uppercase tracking-wider mb-2">
                    Applied Taxonomy:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-[#101010] border border-[rgba(255,255,255,0.10)] text-cyan-300 font-mono text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {getSafeLink(selectedProject.liveUrl) && (
                  <div className="pt-4 border-t border-[rgba(255,255,255,0.10)] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#929292]">LIVE DEPLOYMENT:</span>
                    <a
                      href={getSafeLink(selectedProject.liveUrl)!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all hover:scale-105"
                    >
                      <span>OPEN PROJECT</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
