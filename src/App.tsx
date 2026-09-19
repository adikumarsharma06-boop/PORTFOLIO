import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'motion/react';
import { initialPortfolioData } from './data/portfolioData';
import { PortfolioData } from './types/portfolio';
import { CinematicIntro } from './components/CinematicIntro';
import { Navigation } from './components/Navigation';
import { HeroCharacter } from './components/HeroCharacter';
import { RingLightSkills } from './components/RingLightSkills';
import { AboutSection } from './components/AboutSection';
import { CreatorJourney } from './components/CreatorJourney';
import { VisionSection } from './components/VisionSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ContentCreation } from './components/ContentCreation';
import { AIBuildingSection } from './components/AIBuildingSection';
import { CreatorPhilosophy } from './components/CreatorPhilosophy';
import { CurrentlySection } from './components/CurrentlySection';
import { ContactSection } from './components/ContactSection';
import { FinalCinematicSection } from './components/FinalCinematicSection';
import { ConfigEditorDrawer } from './components/ConfigEditorDrawer';
import { SocialSidebar } from './components/SocialSidebar';
import { EnergyBeamConnector } from './components/EnergyBeamConnector';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [introCompleted, setIntroCompleted] = useState<boolean>(true);
  const [isAutoTourActive, setIsAutoTourActive] = useState<boolean>(false);
  const tourIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => {
    const saved = localStorage.getItem('aditya_portfolio_custom_data_v5');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const mergedProjects = initialPortfolioData.projects.map((initialProj) => {
          const savedProj = parsed.projects?.find((p: { id: string }) => p.id === initialProj.id);
          if (!savedProj) return initialProj;
          return {
            ...savedProj,
            liveUrl: (savedProj.liveUrl && savedProj.liveUrl.trim()) ? savedProj.liveUrl : initialProj.liveUrl,
            githubUrl: (savedProj.githubUrl && savedProj.githubUrl.trim()) ? savedProj.githubUrl : initialProj.githubUrl,
            caseStudyUrl: (savedProj.caseStudyUrl && savedProj.caseStudyUrl.trim()) ? savedProj.caseStudyUrl : initialProj.caseStudyUrl,
          };
        });

        const resolvedCharImage = (parsed.profile?.characterImage && 
          !parsed.profile.characterImage.includes('creator_character_') && 
          !parsed.profile.characterImage.includes('full_body_creator_1789556724367') &&
          !parsed.profile.characterImage.endsWith('.jpg'))
          ? parsed.profile.characterImage
          : initialPortfolioData.profile.characterImage;

        return {
          ...parsed,
          profile: {
            ...initialPortfolioData.profile,
            ...parsed.profile,
            characterImage: resolvedCharImage,
          },
          socialLinks: {
            ...initialPortfolioData.socialLinks,
            ...parsed.socialLinks,
          },
          projects: mergedProjects,
          content: parsed.content || initialPortfolioData.content,
        };
      } catch (e) {
        console.error('Failed to parse saved portfolio data', e);
      }
    }
    return initialPortfolioData;
  });

  const [isConfigDrawerOpen, setIsConfigDrawerOpen] = useState<boolean>(false);

  const handleNavigateToSkills = () => {
    const skillsElement = document.getElementById('skills-section');
    if (skillsElement) {
      skillsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUpdateData = (newData: PortfolioData) => {
    setPortfolioData(newData);
    localStorage.setItem('aditya_portfolio_custom_data_v3', JSON.stringify(newData));
  };

  const handleResetData = () => {
    setPortfolioData(initialPortfolioData);
    localStorage.removeItem('aditya_portfolio_custom_data_v3');
    localStorage.removeItem('aditya_portfolio_custom_data_v2');
    localStorage.removeItem('aditya_portfolio_custom_data');
  };

  // Auto-flow tour sequence across all sections
  useEffect(() => {
    if (!isAutoTourActive) {
      if (tourIntervalRef.current) {
        clearInterval(tourIntervalRef.current);
        tourIntervalRef.current = null;
      }
      return;
    }

    const sectionIds = [
      'hero-section',
      'skills-section',
      'about-section',
      'journey-section',
      'vision-section',
      'projects-section',
      'content-section',
      'ai-building-section',
      'philosophy-section',
      'currently-section',
      'contact-section',
      'final-cinematic-section'
    ];

    let currentIdx = 0;

    const scrollNext = () => {
      currentIdx = (currentIdx + 1) % sectionIds.length;
      const target = document.getElementById(sectionIds[currentIdx]);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    tourIntervalRef.current = setInterval(scrollNext, 5000);

    return () => {
      if (tourIntervalRef.current) {
        clearInterval(tourIntervalRef.current);
        tourIntervalRef.current = null;
      }
    };
  }, [isAutoTourActive]);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2F0EA] font-sans relative selection:bg-cyan-500/30 selection:text-[#F2F0EA]">
      {/* Desktop Subtle Custom Cursor */}
      <CustomCursor />

      {/* 01: Cinematic Intro Screen */}
      <AnimatePresence>
        {!introCompleted && (
          <CinematicIntro
            onComplete={() => setIntroCompleted(true)}
            name={portfolioData.profile.name}
            subIdentities={portfolioData.profile.subIdentities}
            coreBrand={portfolioData.profile.coreBrand}
          />
        )}
      </AnimatePresence>

      {/* Minimal Sticky Navigation (ADITYA | ABOUT, WORK, CONTENT, JOURNEY | CONTACT) */}
      <Navigation
        statusBadge={portfolioData.profile.statusBadge}
        onOpenConfigDrawer={() => setIsConfigDrawerOpen(true)}
      />

      {/* Discreet Fixed Social Sidebar */}
      <SocialSidebar socialLinks={portfolioData.socialLinks} />

      {/* Main Experience Flow */}
      <main id="main-content" className="relative z-10">
        
        {/* 02: Creator Character Hero */}
        <HeroCharacter
          name={portfolioData.profile.name}
          primaryIdentity={portfolioData.profile.primaryIdentity}
          coreBrand={portfolioData.profile.coreBrand}
          characterImage={portfolioData.profile.characterImage}
          onNavigateToSkills={handleNavigateToSkills}
        />

        {/* Downstream Transmission Beam: Hero -> Skills */}
        <EnergyBeamConnector
          label="SKILLS"
          targetId="skills-section"
        />

        {/* 03: Ring Light Skills Section */}
        <RingLightSkills
          skills={portfolioData.skills}
        />

        {/* Downstream Transmission Beam: Skills -> About */}
        <EnergyBeamConnector
          label="ABOUT"
          targetId="about-section"
        />

        {/* 04: About Section (The Person Behind the Screen) */}
        <AboutSection
          editorial={portfolioData.profile.aboutEditorial}
        />

        {/* Downstream Transmission Beam: About -> Journey */}
        <EnergyBeamConnector
          label="JOURNEY"
          targetId="journey-section"
        />

        {/* 05: Creator Journey (Visual Timeline) */}
        <CreatorJourney
          journeySteps={portfolioData.journey}
        />

        {/* Downstream Transmission Beam: Journey -> Vision */}
        <EnergyBeamConnector
          label="VISION"
          targetId="vision-section"
        />

        {/* 06: Vision Section (Tool Building) */}
        <VisionSection
          vision={portfolioData.vision}
        />

        {/* Downstream Transmission Beam: Vision -> Projects */}
        <EnergyBeamConnector
          label="PROJECTS"
          targetId="projects-section"
        />

        {/* 07: Projects Section (Selected Work) */}
        <ProjectsShowcase
          projects={portfolioData.projects}
        />

        {/* Downstream Transmission Beam: Projects -> Content */}
        <EnergyBeamConnector
          label="CONTENT"
          targetId="content-section"
        />

        {/* 08: Content Creation Section (I Document the Journey) */}
        <ContentCreation
          contentList={portfolioData.content}
          instagramUrl={portfolioData.socialLinks.instagram}
        />

        {/* Downstream Transmission Beam: Content -> Beyond Content / AI */}
        <EnergyBeamConnector
          label="BEYOND CONTENT"
          targetId="ai-building-section"
        />

        {/* 09: AI / Building Section (Beyond Content) */}
        <AIBuildingSection
          onScrollToProject={(id) => {
            const el = document.getElementById(`project-card-${id}`) || document.getElementById('projects-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Downstream Transmission Beam: AI -> Philosophy */}
        <EnergyBeamConnector
          label="PHILOSOPHY"
          targetId="philosophy-section"
        />

        {/* 10: Creator Philosophy */}
        <CreatorPhilosophy
          philosophy={portfolioData.philosophy}
        />

        {/* Downstream Transmission Beam: Philosophy -> Currently */}
        <EnergyBeamConnector
          label="CURRENT STATUS"
          targetId="currently-section"
        />

        {/* 11: What I'm Doing Currently (Live Dashboard) */}
        <CurrentlySection
          currentFocus={portfolioData.currentFocus}
          onUpdateFocus={(updated) => handleUpdateData({ ...portfolioData, currentFocus: updated })}
        />

        {/* Downstream Transmission Beam: Currently -> Contact */}
        <EnergyBeamConnector
          label="CONTACT"
          targetId="contact-section"
        />

        {/* 12: Contact Section */}
        <ContactSection
          socialLinks={portfolioData.socialLinks}
        />

        {/* 13: Final Cinematic Closer */}
        <FinalCinematicSection
          name={portfolioData.profile.name}
          characterImage={portfolioData.profile.characterImage}
          instagramUrl={portfolioData.socialLinks.instagram}
        />

      </main>

      {/* Central Configuration Drawer for Real Link & Content Editing */}
      <ConfigEditorDrawer
        isOpen={isConfigDrawerOpen}
        onClose={() => setIsConfigDrawerOpen(false)}
        data={portfolioData}
        onUpdateData={handleUpdateData}
        onResetData={handleResetData}
      />
    </div>
  );
}
