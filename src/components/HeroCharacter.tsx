import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { HandDrawnArrow, HandDrawnUnderline, CreatorAnnotation } from './GraffitiMarks';

interface HeroCharacterProps {
  name: string;
  primaryIdentity: string;
  coreBrand: string;
  characterImage: string;
  onNavigateToSkills: () => void;
}

export const HeroCharacter: React.FC<HeroCharacterProps> = ({
  name,
  coreBrand,
  characterImage,
  onNavigateToSkills,
}) => {
  // Parallax mouse coordinates (-0.5 to 0.5)
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mediaMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaMotion.matches);
    const motionListener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaMotion.addEventListener('change', motionListener);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      mediaMotion.removeEventListener('change', motionListener);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion || isMobile) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Cinematic easing curve
  const cinematicEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      ref={heroRef}
      id="hero-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen h-[100svh] max-h-[100svh] overflow-hidden bg-[#050608] text-[#F2F0EA] flex flex-col justify-between select-none"
      aria-label="Aditya Sharma — Cinematic Creator Hero"
    >
      {/* ============================================================
          02 — BACKGROUND & DARK CREATOR STUDIO ENVIRONMENT
          ============================================================ */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-500 ease-out"
        style={{
          transform: !prefersReducedMotion && !isMobile 
            ? `translate3d(${mousePos.x * 8}px, ${mousePos.y * 8}px, 0)`
            : 'none'
        }}
      >
        {/* Extremely subtle studio texture & grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.035]" />
        
        {/* Atmospheric soft blue rim & key lighting */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[900px] h-[50vh] bg-radial from-cyan-900/15 via-blue-950/10 to-transparent blur-[140px]" />
        <div className="absolute top-[60%] left-[20%] w-[350px] h-[350px] bg-cyan-950/10 blur-[100px]" />
        <div className="absolute top-[60%] right-[20%] w-[350px] h-[350px] bg-blue-950/10 blur-[100px]" />

        {/* Studio Environment: Subtle Timeline & Workstation Geometry (low contrast, dark) */}
        <div className="absolute inset-x-0 bottom-0 h-44 opacity-10 flex flex-col justify-end space-y-2 px-8 sm:px-16">
          <div className="flex items-center gap-3 text-[10px] font-mono text-cyan-400/80">
            <span>TIMELINE // 00:01:24:18</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[#929292]">4K 24FPS • PRORES LOG</span>
          </div>
          {/* Audio/Video Track Lanes */}
          <div className="w-full h-3 rounded bg-[#0d0f14] border border-white/5 flex items-center px-2 gap-1 overflow-hidden">
            <div className="w-24 h-1.5 rounded bg-cyan-500/40" />
            <div className="w-48 h-1.5 rounded bg-blue-500/30" />
            <div className="w-32 h-1.5 rounded bg-indigo-500/30" />
            <div className="w-16 h-1.5 rounded bg-cyan-400/50" />
            <div className="w-64 h-1.5 rounded bg-white/10" />
          </div>
          <div className="w-full h-3 rounded bg-[#0d0f14] border border-white/5 flex items-center px-2 gap-1 overflow-hidden">
            <div className="w-40 h-1.5 rounded bg-cyan-400/20" />
            <div className="w-28 h-1.5 rounded bg-cyan-300/30" />
            <div className="w-52 h-1.5 rounded bg-blue-400/20" />
            <div className="w-20 h-1.5 rounded bg-indigo-400/30" />
          </div>
        </div>

        {/* Viewfinder brackets in four corners */}
        <div className="absolute top-16 left-6 text-white/20 font-mono text-xs hidden sm:block">┌</div>
        <div className="absolute top-16 right-6 text-white/20 font-mono text-xs hidden sm:block">┐</div>
        <div className="absolute bottom-12 left-6 text-white/20 font-mono text-xs hidden sm:block">└</div>
        <div className="absolute bottom-12 right-6 text-white/20 font-mono text-xs hidden sm:block">┘</div>

        {/* Center camera target reticle */}
        <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none opacity-15 hidden sm:block">
          <div className="absolute inset-0 border border-cyan-400/40 rounded-full" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-cyan-400/40" />
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-cyan-400/40" />
        </div>
      </div>

      {/* ============================================================
          TOP BAR METADATA (09, 10, 11, 12)
          Sequence: 0.5s fade in
          ============================================================ */}
      <motion.header
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.5, ease: cinematicEase }}
        className="relative z-30 pt-4 sm:pt-6 px-4 sm:px-8 md:px-12 flex items-start justify-between gap-4 w-full"
      >
        {/* 10 — TOP LEFT METADATA */}
        <div className="flex flex-col text-left">
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.28em] text-[#F2F0EA]/90 uppercase leading-tight">
            PORTFOLIO
          </span>
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#929292] leading-tight">
            OFFICIAL
          </span>
        </div>

        {/* 11 — TOP CENTER */}
        <div className="text-center px-2 flex-1 max-w-xl hidden sm:block">
          <span className="text-[10px] md:text-xs font-mono tracking-[0.22em] text-[#F2F0EA]/85 uppercase font-medium">
            {coreBrand}
          </span>
        </div>

        {/* 12 — TOP RIGHT IDENTITY */}
        <div className="flex flex-col text-right text-[9px] sm:text-[10px] font-mono tracking-[0.16em] text-[#929292] uppercase leading-tight space-y-0.5">
          <span className="text-[#F2F0EA]/90 font-bold">CONTENT CREATOR</span>
          <span>VIDEO EDITOR</span>
          <span>GRAPHIC DESIGNER</span>
          <span className="text-cyan-400/90 font-medium">AI EXPLORER</span>
          <span>STUDENT</span>
        </div>
      </motion.header>

      {/* ============================================================
          03 & 04 — MASSIVE BACKGROUND TYPOGRAPHY (BEHIND CHARACTER)
          Sequence: 0.3s fade in
          Opacity: 25–45%
          ============================================================ */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 0.85 } : { opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 1.0, delay: prefersReducedMotion ? 0 : 0.3, ease: cinematicEase }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: !prefersReducedMotion && !isMobile 
            ? `translate3d(${mousePos.x * 14}px, ${mousePos.y * 10}px, 0)`
            : 'none'
        }}
      >
        <div className="w-full text-center px-2 sm:px-4 flex flex-col items-center justify-center -translate-y-4 sm:-translate-y-2">
          {/* Top Line: ADITYA */}
          <h1 className="text-[17vw] sm:text-[15.5vw] md:text-[14vw] lg:text-[13vw] font-black leading-[0.82] tracking-tight uppercase font-display select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F0EFEA] to-white/60 drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            ADITYA
          </h1>
          {/* Bottom Line: SHARMA */}
          <h1 className="text-[17vw] sm:text-[15.5vw] md:text-[14vw] lg:text-[13vw] font-black leading-[0.82] tracking-tight uppercase font-display select-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2DFD2] to-white/50 [-webkit-text-stroke:1.2px_rgba(255,255,255,0.7)] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            SHARMA
          </h1>
        </div>
      </motion.div>

      {/* ============================================================
          13 — LEFT EDITORIAL PANEL & 14 — RIGHT CREATOR TYPOGRAPHY
          Layered behind/alongside the character
          ============================================================ */}
      <div 
        className="absolute inset-x-4 sm:inset-x-8 md:inset-x-12 top-[22%] sm:top-[28%] bottom-[16%] z-15 flex items-center justify-between pointer-events-none transition-transform duration-500 ease-out"
        style={{
          transform: !prefersReducedMotion && !isMobile 
            ? `translate3d(${mousePos.x * 18}px, ${mousePos.y * 12}px, 0)`
            : 'none'
        }}
      >
        {/* 13 — LEFT EDITORIAL PANEL */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: prefersReducedMotion ? 0 : 0.6, ease: cinematicEase }}
          className="flex flex-col items-start space-y-3 pointer-events-none select-none max-w-[130px]"
        >
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono tracking-[0.24em] text-cyan-400 font-bold block uppercase">
              CREATOR
            </span>
            <span className="text-[10px] font-mono tracking-[0.24em] text-[#929292] block uppercase">
              STUDY — 01
            </span>
          </div>
          
          {/* Thin blue accent line */}
          <div className="w-8 h-[1px] bg-cyan-400/80 shadow-[0_0_8px_#22d3ee]" />

          <div className="space-y-1.5 text-[9px] font-mono tracking-[0.22em] text-[#F2F0EA]/75 uppercase pt-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>CONTENT</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>EDIT</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span>DESIGN</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
              <span>AI</span>
            </div>
          </div>
        </motion.div>

        {/* 14 — RIGHT CREATOR TYPOGRAPHY */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0.22 } : { opacity: 0 }}
          animate={{ opacity: 0.22 }}
          transition={{ duration: 1.1, delay: prefersReducedMotion ? 0 : 0.6, ease: cinematicEase }}
          className="hidden md:flex flex-col items-end text-right select-none pointer-events-none"
        >
          <span className="text-4xl lg:text-6xl xl:text-7xl font-black font-display tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.22)] uppercase leading-[0.88]">
            CONTENT
          </span>
          <span className="text-4xl lg:text-6xl xl:text-7xl font-black font-display tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(34,211,238,0.35)] uppercase leading-[0.88]">
            CREATOR
          </span>
        </motion.div>
      </div>

      {/* ============================================================
          05, 07, 08, 18, 19, 20, 21 — CREATOR CHARACTER (FULL BODY)
          - Full Body from head to sneakers/feet
          - Central Foreground, overlapping typography
          - Entrance Animation: translateY(100%) -> translateY(0) (0.7s to 1.8s)
          - cubic-bezier(0.16, 1, 0.3, 1)
          - Opacity 0 -> 1
          - Subtle blue rim light & seamless blend into #050608
          ============================================================ */}
      <div 
        className="absolute inset-x-0 bottom-0 top-[10%] sm:top-[8%] z-20 flex items-end justify-center pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: !prefersReducedMotion && !isMobile 
            ? `translate3d(${mousePos.x * 24}px, ${mousePos.y * 16}px, 0)`
            : 'none'
        }}
      >
        <motion.div
          initial={prefersReducedMotion ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 1.7,
            delay: prefersReducedMotion ? 0 : 0.7,
            ease: cinematicEase,
          }}
          className="relative h-full max-h-[72vh] sm:max-h-[78vh] md:max-h-[84vh] lg:max-h-[88vh] flex items-end justify-center"
        >
          {/* Subtle blue rim-light contour aura behind character */}
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[440px] h-[520px] bg-gradient-to-tr from-cyan-500/25 via-blue-600/15 to-transparent blur-[75px] rounded-full pointer-events-none" />

          {/* Idle breathing float motion wrapper after entrance */}
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, -5, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: prefersReducedMotion ? 0 : 2.5,
            }}
            className="relative h-full flex items-end justify-center"
          >
            {/* Full-Body Anime Creator Character Image (Transparent Cutout, Complete Head to Shoes) */}
            <img
              id="creator-character-avatar"
              src={characterImage}
              alt="Aditya Sharma — Full-Body Digital Content Creator Illustration"
              className="h-full w-auto object-contain object-bottom select-none pointer-events-auto"
              style={{
                filter: 'drop-shadow(0 20px 35px rgba(0,0,0,0.9)) drop-shadow(0 0 35px rgba(34,211,238,0.18))',
              }}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ============================================================
          15 — GRAFFITI ANNOTATIONS (FOREGROUND DETAILS)
          Sequence: finishes appearing at 2.0s
          ============================================================ */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 2.0, ease: cinematicEase }}
        className="absolute inset-0 z-25 pointer-events-none transition-transform duration-500 ease-out"
        style={{
          transform: !prefersReducedMotion && !isMobile 
            ? `translate3d(${mousePos.x * 30}px, ${mousePos.y * 22}px, 0)`
            : 'none'
        }}
      >
        {/* Annotation 1: DREAM // PLAN // CREATE (Upper Left / mid area) */}
        <div className="absolute top-[28%] sm:top-[26%] left-[8%] sm:left-[16%] md:left-[22%] hidden sm:block">
          <div className="flex flex-col items-start gap-1">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.25em] text-cyan-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-cyan-400/20 shadow-[0_0_12px_rgba(34,211,238,0.25)]">
              DREAM // PLAN // CREATE
            </span>
            <HandDrawnUnderline className="w-24 sm:w-28 h-2 text-cyan-400/80 -mt-1" />
          </div>
        </div>

        {/* Annotation 2: IDEAS → VIDEOS → IMPACT (Right side near character) */}
        <div className="absolute top-[38%] sm:top-[36%] right-[6%] sm:right-[14%] md:right-[20%] hidden sm:block">
          <div className="flex items-center gap-2 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm border border-cyan-400/25 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-cyan-300">
              IDEAS → VIDEOS → IMPACT
            </span>
            <HandDrawnArrow className="w-8 h-4 text-cyan-400 -rotate-12" />
          </div>
        </div>

        {/* Annotation 3: CREATE • EDIT • EXPERIMENT • DOCUMENT (Lower Left / center) */}
        <div className="absolute bottom-[16%] sm:bottom-[14%] left-[6%] sm:left-[12%] md:left-[18%]">
          <div className="flex items-center gap-2">
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#F2F0EA]/80 bg-black/70 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
              CREATE • EDIT • EXPERIMENT • DOCUMENT
            </span>
          </div>
        </div>
      </motion.div>

      {/* ============================================================
          BOTTOM BAR: 16 (METADATA) & 17 (SCROLL INDICATOR)
          Sequence: 0.5s fade in
          ============================================================ */}
      <motion.footer
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.5, ease: cinematicEase }}
        className="relative z-30 pb-4 sm:pb-6 px-4 sm:px-8 md:px-12 flex items-end justify-between w-full"
      >
        {/* 16 — SMALL PERSONAL METADATA (NO YEAR) */}
        <div className="flex flex-col text-left text-[9px] sm:text-[10px] font-mono tracking-[0.22em] text-[#929292] uppercase leading-relaxed">
          <span className="text-[#F2F0EA]/80 font-semibold">KOLKATA, INDIA</span>
          <span>CREATOR // BUILDER</span>
        </div>

        {/* Mobile core brand line centered */}
        <div className="sm:hidden text-center px-2">
          <span className="text-[8px] font-mono tracking-wider text-[#929292] uppercase">
            CREATING. LEARNING.
          </span>
        </div>

        {/* 17 — BOTTOM RIGHT: SCROLL INDICATOR */}
        <button
          onClick={onNavigateToSkills}
          className="group flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#F2F0EA]/80 hover:text-cyan-400 transition-colors cursor-pointer"
          aria-label="Scroll to exploration sections"
        >
          <span className="font-semibold uppercase">SCROLL</span>
          <span className="text-cyan-400 transform group-hover:translate-y-1 transition-transform">
            ↓
          </span>
        </button>
      </motion.footer>
    </section>
  );
};
