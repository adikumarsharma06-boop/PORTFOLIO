import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PortfolioData } from '../types/portfolio';
import { CreatorAnnotation } from './GraffitiMarks';
import { BookOpen, Video, Cpu, Target, Edit3, Plus, Trash2 } from 'lucide-react';

interface CurrentlySectionProps {
  currentFocus: PortfolioData['currentFocus'];
  onUpdateFocus?: (updated: PortfolioData['currentFocus']) => void;
}

export const CurrentlySection: React.FC<CurrentlySectionProps> = ({ 
  currentFocus,
  onUpdateFocus
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'learning' | 'creating' | 'building'>('all');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [focusState, setFocusState] = useState(currentFocus);

  const handleGoalChange = (val: string) => {
    const updated = { ...focusState, currentGoal: val };
    setFocusState(updated);
    if (onUpdateFocus) onUpdateFocus(updated);
  };

  const handleAddItem = (category: 'learning' | 'creating' | 'building') => {
    const text = prompt(`Enter new item for CURRENTLY ${category.toUpperCase()}:`);
    if (text && text.trim()) {
      const updated = {
        ...focusState,
        [category]: [...focusState[category], text.trim()]
      };
      setFocusState(updated);
      if (onUpdateFocus) onUpdateFocus(updated);
    }
  };

  const handleRemoveItem = (category: 'learning' | 'creating' | 'building', index: number) => {
    const updated = {
      ...focusState,
      [category]: focusState[category].filter((_, i) => i !== index)
    };
    setFocusState(updated);
    if (onUpdateFocus) onUpdateFocus(updated);
  };

  return (
    <section
      id="currently-section"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#080808] overflow-hidden border-t border-[rgba(255,255,255,0.10)]"
      aria-label="Currently Active Pursuits and Dashboard"
    >
      {/* Top Laser Flow-Line Beam */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-[rgba(255,255,255,0.10)]">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-flow-beam" />
      </div>

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[500px] bg-blue-950/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[rgba(255,255,255,0.10)] bg-[#161616] text-xs font-semibold text-[#929292]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[#F2F0EA] font-mono tracking-widest uppercase">LIVE DASHBOARD // 05</span>
              </div>
              <CreatorAnnotation label="EXPERIMENT" annotationType="marker" />
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight font-display text-[#F2F0EA] leading-[1.02]">
              CURRENT STATUS
            </h2>

            <p className="text-xs sm:text-sm text-[#929292] font-mono uppercase tracking-widest">
              DAILY INPUTS &bull; CREATIVE SESSIONS &bull; ONGOING OBJECTIVES
            </p>
          </div>

          {/* Quick Edit Mode Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                isEditing
                  ? 'bg-cyan-400 text-black font-bold shadow-[0_0_15px_#22d3ee]'
                  : 'bg-[#161616] text-[#929292] hover:text-[#F2F0EA] border border-[rgba(255,255,255,0.10)]'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'DONE EDITING' : 'EDIT ITEMS'}</span>
            </button>
          </div>
        </div>

        {/* Dashboard Grid (3 Columns: Learning, Creating, Building) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          {/* 01: CURRENTLY LEARNING */}
          <motion.div
            id="currently-learning-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-[#161616] border border-[rgba(255,255,255,0.10)] flex flex-col justify-between shadow-2xl hover:border-cyan-400/40 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  INPUT MATRIX // 01
                </span>
                <div className="p-2 rounded-xl bg-[#101010] border border-[rgba(255,255,255,0.10)] text-cyan-300">
                  <BookOpen className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl font-black font-display text-[#F2F0EA] mb-6">
                CURRENTLY LEARNING
              </h3>

              <ul className="space-y-3">
                {focusState.learning.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#101010] border border-[rgba(255,255,255,0.06)] text-sm text-[#F2F0EA]">
                    <span className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </span>
                    {isEditing && (
                      <button
                        onClick={() => handleRemoveItem('learning', idx)}
                        className="text-red-400 hover:text-red-300 p-1 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {isEditing && (
              <button
                onClick={() => handleAddItem('learning')}
                className="mt-6 w-full py-2.5 rounded-xl bg-[#101010] border border-dashed border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/20 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>ADD LEARNING ITEM</span>
              </button>
            )}
          </motion.div>

          {/* 02: CURRENTLY CREATING */}
          <motion.div
            id="currently-creating-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#161616] border border-[rgba(255,255,255,0.10)] flex flex-col justify-between shadow-2xl hover:border-pink-400/40 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-widest">
                  OUTPUT CHANNEL // 02
                </span>
                <div className="p-2 rounded-xl bg-[#101010] border border-[rgba(255,255,255,0.10)] text-pink-300">
                  <Video className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl font-black font-display text-[#F2F0EA] mb-6">
                CURRENTLY CREATING
              </h3>

              <ul className="space-y-3">
                {focusState.creating.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#101010] border border-[rgba(255,255,255,0.06)] text-sm text-[#F2F0EA]">
                    <span className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                      <span>{item}</span>
                    </span>
                    {isEditing && (
                      <button
                        onClick={() => handleRemoveItem('creating', idx)}
                        className="text-red-400 hover:text-red-300 p-1 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {isEditing && (
              <button
                onClick={() => handleAddItem('creating')}
                className="mt-6 w-full py-2.5 rounded-xl bg-[#101010] border border-dashed border-pink-500/40 text-pink-300 hover:bg-pink-950/20 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>ADD CREATING ITEM</span>
              </button>
            )}
          </motion.div>

          {/* 03: CURRENTLY BUILDING */}
          <motion.div
            id="currently-building-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#161616] border border-[rgba(255,255,255,0.10)] flex flex-col justify-between shadow-2xl hover:border-indigo-400/40 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">
                  LAB SYSTEMS // 03
                </span>
                <div className="p-2 rounded-xl bg-[#101010] border border-[rgba(255,255,255,0.10)] text-indigo-300">
                  <Cpu className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl font-black font-display text-[#F2F0EA] mb-6">
                CURRENTLY BUILDING
              </h3>

              <ul className="space-y-3">
                {focusState.building.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#101010] border border-[rgba(255,255,255,0.06)] text-sm text-[#F2F0EA]">
                    <span className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>{item}</span>
                    </span>
                    {isEditing && (
                      <button
                        onClick={() => handleRemoveItem('building', idx)}
                        className="text-red-400 hover:text-red-300 p-1 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {isEditing && (
              <button
                onClick={() => handleAddItem('building')}
                className="mt-6 w-full py-2.5 rounded-xl bg-[#101010] border border-dashed border-indigo-500/40 text-indigo-300 hover:bg-indigo-950/20 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>ADD BUILDING ITEM</span>
              </button>
            )}
          </motion.div>

        </div>

        {/* CURRENT GOAL BANNER */}
        <motion.div
          id="currently-goal-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl bg-[#161616] border border-[rgba(255,255,255,0.10)] relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#101010] text-cyan-400 border border-[rgba(255,255,255,0.10)]">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                CURRENT GOAL
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#929292]">PRIMARY DISCIPLINE</span>
          </div>

          {isEditing ? (
            <input
              type="text"
              value={focusState.currentGoal}
              onChange={(e) => handleGoalChange(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#101010] border border-cyan-400 text-[#F2F0EA] font-display text-xl font-bold"
            />
          ) : (
            <p className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-[#F2F0EA] tracking-tight leading-snug">
              “{focusState.currentGoal}”
            </p>
          )}

          <p className="mt-3 text-xs sm:text-sm text-[#929292] font-mono">
            Measured by daily consistency and transparent documentation rather than vanity milestones.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
