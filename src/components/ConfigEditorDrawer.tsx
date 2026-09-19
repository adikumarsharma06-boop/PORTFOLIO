import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Save, Download, Copy, Check, RefreshCw, Image, Sparkles } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface ConfigEditorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onUpdateData: (newData: PortfolioData) => void;
  onResetData: () => void;
}

export const ConfigEditorDrawer: React.FC<ConfigEditorDrawerProps> = ({
  isOpen,
  onClose,
  data,
  onUpdateData,
  onResetData,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'social' | 'focus' | 'json'>('projects');
  const [copied, setCopied] = useState(false);
  const [charUrlInput, setCharUrlInput] = useState(data.profile.characterImage);
  const [projectsInput, setProjectsInput] = useState(data.projects);
  const [emailInput, setEmailInput] = useState(data.socialLinks.email || '');
  const [ytInput, setYtInput] = useState(data.socialLinks.youtube || '');
  const [instaInput, setInstaInput] = useState(data.socialLinks.instagram || '');
  const [linkedinInput, setLinkedinInput] = useState(data.socialLinks.linkedin || '');
  const [xInput, setXInput] = useState(data.socialLinks.x || '');
  const [githubInput, setGithubInput] = useState(data.socialLinks.github || '');
  const [goalInput, setGoalInput] = useState(data.currentFocus.currentGoal);

  const handleApplyChanges = () => {
    const updated: PortfolioData = {
      ...data,
      profile: {
        ...data.profile,
        characterImage: charUrlInput,
      },
      projects: projectsInput,
      currentFocus: {
        ...data.currentFocus,
        currentGoal: goalInput,
      },
      socialLinks: {
        ...data.socialLinks,
        email: emailInput.trim() ? emailInput.trim() : undefined,
        youtube: ytInput.trim() ? ytInput.trim() : undefined,
        instagram: instaInput.trim() ? instaInput.trim() : undefined,
        linkedin: linkedinInput.trim() ? linkedinInput.trim() : undefined,
        x: xInput.trim() ? xInput.trim() : undefined,
        github: githubInput.trim() ? githubInput.trim() : undefined,
      },
    };
    onUpdateData(updated);
    onClose();
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJson = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'aditya-portfolio-config.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-lg h-full bg-[#101010] border-l border-[#262626] flex flex-col justify-between shadow-2xl text-[#F2F0EA]"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#262626] flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CENTRAL DATA CONTROL</span>
              </div>
              <h2 className="text-xl font-bold font-display text-[#F2F0EA]">
                Portfolio Configuration
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#161616] border border-[#262626] text-[#969696] hover:text-[#F2F0EA] cursor-pointer"
              aria-label="Close configuration panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sub Navigation */}
          <div className="flex border-b border-[#262626] px-6 gap-2 pt-2 bg-[#0d0d0d] overflow-x-auto">
            {[
              { id: 'projects', label: 'Projects & Links' },
              { id: 'profile', label: 'Identity & Art' },
              { id: 'social', label: 'Social & Contact' },
              { id: 'focus', label: 'Current Goal' },
              { id: 'json', label: 'Raw Config' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`py-2 px-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === t.id
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-[#969696] hover:text-[#F2F0EA]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Content Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {activeTab === 'projects' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#161616] border border-[#262626]">
                  <span className="text-xs font-mono text-cyan-400 block mb-1">
                    PROJECT LIVE URLS & DEMOS
                  </span>
                  <p className="text-xs text-[#969696] mb-3">
                    Configure official live URLs for your selected work projects. Empty URLs will automatically hide the launch buttons.
                  </p>
                </div>

                {projectsInput.map((proj, pIdx) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-[#161616] border border-[#262626] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#F2F0EA] font-display">{proj.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0d0d0d] text-cyan-300 border border-[#262626]">
                        {proj.status}
                      </span>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#969696] mb-1">
                        LIVE DEMO / PROJECT URL
                      </label>
                      <input
                        type="url"
                        value={proj.liveUrl || ''}
                        onChange={(e) => {
                          const updatedProjects = [...projectsInput];
                          updatedProjects[pIdx] = { ...updatedProjects[pIdx], liveUrl: e.target.value };
                          setProjectsInput(updatedProjects);
                        }}
                        placeholder="https://..."
                        className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#262626] text-xs text-[#F2F0EA] focus:outline-none focus:border-cyan-500 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#969696] mb-1">
                        GITHUB URL (OPTIONAL)
                      </label>
                      <input
                        type="url"
                        value={proj.githubUrl || ''}
                        onChange={(e) => {
                          const updatedProjects = [...projectsInput];
                          updatedProjects[pIdx] = { ...updatedProjects[pIdx], githubUrl: e.target.value };
                          setProjectsInput(updatedProjects);
                        }}
                        placeholder="https://github.com/..."
                        className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#262626] text-xs text-[#F2F0EA] focus:outline-none focus:border-cyan-500 font-mono"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#161616] border border-[#262626]">
                  <span className="text-xs font-mono text-[#969696] block mb-1">
                    CREATOR CHARACTER ARTWORK
                  </span>
                  <p className="text-xs text-[#969696] mb-3">
                    Paste an image URL or keep the original stylized anime digital creator asset.
                  </p>
                  <input
                    type="text"
                    value={charUrlInput}
                    onChange={(e) => setCharUrlInput(e.target.value)}
                    placeholder="https://... or image data"
                    className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#262626] text-xs text-[#F2F0EA] focus:outline-none focus:border-cyan-500"
                  />
                  <div className="mt-3 flex items-center gap-3">
                    <img
                      src={charUrlInput}
                      alt="Preview"
                      className="w-12 h-12 rounded-lg object-cover border border-[#262626]"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[11px] text-[#969696]">Current character thumbnail preview</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#161616] border border-[#262626]">
                  <span className="text-xs font-mono text-[#969696] block mb-1">
                    CENTRAL CONFIGURATION INFO
                  </span>
                  <p className="text-xs text-[#969696] leading-relaxed">
                    All portfolio sections are driven by clean configuration state for seamless, pure flow editing.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'social' && (
              <div className="space-y-4">
                <p className="text-xs text-[#969696]">
                  Only configured links are displayed in the Contact and Navigation sections. Clear a field to hide that channel.
                </p>

                <div>
                  <label className="block text-xs font-mono text-[#969696] mb-1">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#262626] text-xs text-[#F2F0EA]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#969696] mb-1">
                    YOUTUBE CHANNEL URL
                  </label>
                  <input
                    type="url"
                    value={ytInput}
                    onChange={(e) => setYtInput(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#262626] text-xs text-[#F2F0EA]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#969696] mb-1">
                    INSTAGRAM URL (PRIMARY)
                  </label>
                  <input
                    type="url"
                    value={instaInput}
                    onChange={(e) => setInstaInput(e.target.value)}
                    placeholder="https://www.instagram.com/..."
                    className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#262626] text-xs text-[#F2F0EA]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#969696] mb-1">
                    LINKEDIN URL
                  </label>
                  <input
                    type="url"
                    value={linkedinInput}
                    onChange={(e) => setLinkedinInput(e.target.value)}
                    placeholder="https://www.linkedin.com/in/..."
                    className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#262626] text-xs text-[#F2F0EA]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#969696] mb-1">
                    X (TWITTER) URL
                  </label>
                  <input
                    type="url"
                    value={xInput}
                    onChange={(e) => setXInput(e.target.value)}
                    placeholder="https://x.com/..."
                    className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#262626] text-xs text-[#F2F0EA]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#969696] mb-1">
                    GITHUB URL
                  </label>
                  <input
                    type="url"
                    value={githubInput}
                    onChange={(e) => setGithubInput(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#262626] text-xs text-[#F2F0EA]"
                  />
                </div>
              </div>
            )}

            {activeTab === 'focus' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#969696] mb-1">
                    CURRENT PRINCIPAL GOAL STATEMENT
                  </label>
                  <textarea
                    rows={3}
                    value={goalInput}
                    onChange={(e) => setGoalInput(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#262626] text-xs text-[#F2F0EA] focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            )}

            {activeTab === 'json' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#969696]">Complete JSON Blueprint</span>
                  <div className="flex gap-2">
                    <button
                      onClick={handleCopyJson}
                      className="px-2.5 py-1 rounded bg-[#161616] hover:bg-[#202020] border border-[#262626] text-xs flex items-center gap-1 text-[#F2F0EA] cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy</span>
                    </button>
                    <button
                      onClick={handleDownloadJson}
                      className="px-2.5 py-1 rounded bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs flex items-center gap-1 text-white cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
                <pre className="p-4 rounded-xl bg-[#0d0d0d] border border-[#262626] text-[11px] font-mono text-[#969696] max-h-96 overflow-y-auto leading-tight">
                  {JSON.stringify(data, null, 2)}
                </pre>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="p-6 border-t border-[#262626] bg-[#0d0d0d] flex items-center justify-between gap-3">
            <button
              onClick={onResetData}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#969696] hover:text-[#F2F0EA] bg-[#161616] border border-[#262626] transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              onClick={handleApplyChanges}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Apply Changes</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
