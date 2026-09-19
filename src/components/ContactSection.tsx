import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SocialLinks } from '../types/portfolio';

interface ContactSectionProps {
  socialLinks: SocialLinks;
  isTransparentMode?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ socialLinks }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    senderName: '',
    senderContact: '',
    topic: 'Creative Collaboration',
    message: ''
  });

  const handleCopyEmail = () => {
    if (!socialLinks.email) return;
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.senderName || !formState.message) return;
    setFormSubmitted(true);
  };

  const configuredItems = [
    socialLinks.instagram && {
      name: 'Instagram',
      handle: '@startwithaadii',
      sublabel: 'Videos, Journey Reels & Direct DMs',
      href: socialLinks.instagram,
      highlight: true,
    },
    socialLinks.linkedin && {
      name: 'LinkedIn',
      handle: 'aditya-sharma',
      sublabel: 'Professional network & student projects',
      href: socialLinks.linkedin,
      highlight: false,
    },
    socialLinks.x && {
      name: 'X (Twitter)',
      handle: '@AdityaShar54906',
      sublabel: 'Thoughts, building updates & links',
      href: socialLinks.x,
      highlight: false,
    },
    socialLinks.email && {
      name: 'Email Inbox',
      handle: socialLinks.email,
      sublabel: 'Direct correspondence & inquiries',
      href: `mailto:${socialLinks.email}`,
      highlight: false,
      isEmail: true,
    },
    socialLinks.github && {
      name: 'GitHub',
      handle: socialLinks.github.replace('https://github.com/', ''),
      sublabel: 'Code repositories & open source',
      href: socialLinks.github,
      highlight: false,
    },
    socialLinks.youtube && {
      name: 'YouTube',
      handle: 'Aditya Sharma',
      sublabel: 'Longform video essays & tutorials',
      href: socialLinks.youtube,
      highlight: false,
    },
  ].filter(Boolean) as {
    name: string;
    handle: string;
    sublabel: string;
    href: string;
    highlight: boolean;
    isEmail?: boolean;
  }[];

  return (
    <section
      id="contact-section"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#101010] overflow-hidden border-t border-[#262626]"
      aria-label="Connect with Aditya Sharma"
    >
      {/* Top Laser Flow-Line Beam */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-[#262626]">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-flow-beam" />
      </div>

      {/* Dynamic Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-t from-blue-900/5 via-purple-900/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#262626] bg-[#161616] text-xs font-semibold text-[#969696] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[#F2F0EA]">CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-[#F2F0EA] leading-tight">
            HAVE AN IDEA?<br />
            LET&apos;S CONNECT.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#929292]">
            “I’m always interested in learning, building, and exploring new ideas.”
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Configured Social Links (6 cols) */}
          <div className="lg:col-span-6 space-y-3.5">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#969696] mb-2">
              Verified Channels:
            </h3>

            {configuredItems.map((item) => (
              <div
                key={item.name}
                className={`p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between group bg-[#161616] ${
                  item.highlight
                    ? 'border-pink-500/50 hover:border-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.15)]'
                    : 'border-[#262626] hover:border-[#383838]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-[#F2F0EA] group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h4>
                    {item.highlight && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#101010] text-pink-300 border border-pink-500/30">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#969696]">
                    {item.sublabel}
                  </p>
                  <span className="text-[11px] font-mono text-cyan-400">
                    {item.handle}
                  </span>
                </div>

                <div className="shrink-0 ml-2">
                  <a
                    href={item.href}
                    target={item.isEmail ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      item.highlight
                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white shadow-md shadow-pink-500/20'
                        : 'bg-[#101010] text-[#F2F0EA] hover:bg-[#202020] border border-[#262626]'
                    }`}
                  >
                    {item.highlight ? 'Message' : 'Open'}
                  </a>
                </div>
              </div>
            ))}

            {/* Direct Copy Banner */}
            {socialLinks.email && (
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-between text-xs text-[#969696]">
                <span className="truncate">Direct inbox: <strong className="text-[#F2F0EA]">{socialLinks.email}</strong></span>
                <button
                  onClick={handleCopyEmail}
                  className="font-semibold text-cyan-400 hover:text-cyan-300 ml-2 shrink-0 cursor-pointer"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            )}
          </div>

          {/* Direct Note / Message Form (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl border transition-all bg-[#161616] border-[#262626] shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg sm:text-xl font-bold font-display text-[#F2F0EA]">
                Send a Direct Message
              </h3>
              <span className="text-[10px] font-mono text-cyan-400">
                Direct to Aditya
              </span>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#101010] border border-emerald-500/30 text-center space-y-3"
              >
                <h4 className="text-lg font-bold text-[#F2F0EA]">Message Logged</h4>
                <p className="text-xs sm:text-sm text-[#969696] max-w-sm mx-auto">
                  Thank you for reaching out. You can also reach Aditya directly via email at <strong className="text-[#F2F0EA]">{socialLinks.email}</strong>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-[#161616] border border-[#262626] text-[#F2F0EA] hover:bg-[#202020] cursor-pointer"
                >
                  Send another note
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#969696] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.senderName}
                    onChange={(e) => setFormState({ ...formState, senderName: e.target.value })}
                    placeholder="Alex Chen"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#101010] border border-[#262626] text-[#F2F0EA] placeholder-[#969696]/60 focus:outline-none focus:border-cyan-500 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#969696] mb-1">Email or Social Handle</label>
                  <input
                    type="text"
                    value={formState.senderContact}
                    onChange={(e) => setFormState({ ...formState, senderContact: e.target.value })}
                    placeholder="alex@gmail.com or @alex"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#101010] border border-[#262626] text-[#F2F0EA] placeholder-[#969696]/60 focus:outline-none focus:border-cyan-500 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#969696] mb-1">Topic</label>
                  <select
                    value={formState.topic}
                    onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#101010] border border-[#262626] text-[#F2F0EA] focus:outline-none focus:border-cyan-500 text-xs sm:text-sm"
                  >
                    <option value="Creative Collaboration">Creative Collaboration</option>
                    <option value="Video Editing Project">Video Editing Project</option>
                    <option value="AI Experiment Discussion">AI Experiment Discussion</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#969696] mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hi Aditya, saw your creative flow and wanted to connect about..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#101010] border border-[#262626] text-[#F2F0EA] placeholder-[#969696]/60 focus:outline-none focus:border-cyan-500 text-xs sm:text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25 cursor-pointer"
                >
                  <span>Transmit Note</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
