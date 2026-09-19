export interface SkillItem {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  tools: string[];
  angle: number; // position around the ring light in degrees
}

export interface JourneyStep {
  id: string;
  phase: string;
  subtitle: string;
  quote: string;
  description: string;
  badge: string;
}

export interface VisionCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  focusAreas: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  status: 'Building / Concept' | 'Concept / Building' | 'Experiment / Concept' | 'Active Experiments';
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  conceptNotes?: string;
}

export interface ContentItem {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  category: 'YouTube' | 'Short-form Content' | 'Documentary / Journey Content';
  dateAdded: string;
  topics: string[];
}

export interface CurrentlyItem {
  category: 'CURRENTLY LEARNING' | 'CURRENTLY CREATING' | 'CURRENTLY BUILDING';
  items: string[];
}

export interface SocialLinks {
  email?: string;
  youtube?: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
  x?: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    primaryIdentity: string;
    subIdentities: string[];
    coreBrand: string;
    statusBadge: string;
    characterImage: string;
    aboutEditorial: {
      headline: string;
      lead: string;
      bodyParagraphs: string[];
      highlightedKeywords: string[];
      honestNotes: string;
    };
  };
  skills: SkillItem[];
  journey: JourneyStep[];
  vision: {
    mainStatement: string;
    supportingText: string;
    categories: VisionCategory[];
  };
  projects: ProjectItem[];
  content: ContentItem[];
  philosophy: {
    steps: string[];
    quote: string;
  };
  currentFocus: {
    learning: string[];
    creating: string[];
    building: string[];
    currentGoal: string;
  };
  socialLinks: SocialLinks;
}
