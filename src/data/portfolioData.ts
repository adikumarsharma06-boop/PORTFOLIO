import { PortfolioData } from '../types/portfolio';
import fullBodyCreatorImg from '../assets/images/full_body_creator_cutout.png';
import creatiqImg from '../assets/images/creatiq_preview_1789398241634.jpg';
import stratgerImg from '../assets/images/stratger_preview_1789398261719.jpg';
import kayImg from '../assets/images/kay_preview_1789398275727.jpg';

export const initialPortfolioData: PortfolioData = {
  profile: {
    name: 'ADITYA SHARMA',
    primaryIdentity: 'Content Creator • Video Editor • Graphic Designer • AI Explorer • Student',
    subIdentities: [
      'CONTENT CREATOR',
      'VIDEO EDITOR',
      'GRAPHIC DESIGNER',
      'AI EXPLORER',
    ],
    coreBrand: 'Creating. Learning. Documenting the Journey.',
    statusBadge: 'Student & Creator • Documenting Every Step',
    characterImage: fullBodyCreatorImg,
    aboutEditorial: {
      headline: 'THE PERSON BEHIND THE SCREEN',
      lead: "I’m Aditya Sharma, a student and content creator interested in video editing, graphic design, AI, technology, and building things from ideas.",
      bodyParagraphs: [
        "I create videos to document what I’m learning, experimenting with, and discovering along my journey. Content creation is not something I see only as a hobby—it is a direction I genuinely want to develop as a long-term profession.",
        "I’m interested in understanding how creators work, how content connects with people, and how technology can make the creative process easier and more accessible.",
        "Alongside content creation, I explore AI tools and experiment with building simple digital products and tools that can help beginners and creators with their work.",
        "I’m still learning, and I’m not here to present a story of instant success. My journey is about learning skills, creating consistently, experimenting with ideas, making mistakes, improving, and documenting the process.",
        "My long-term goal is to become a successful creator while building useful AI-powered tools that can help beginners and make content creation easier for more people."
      ],
      highlightedKeywords: [
        'CONTENT CREATOR',
        'AI',
        'CREATIVITY',
        'BUILDING',
        'LEARNING',
        'EXPERIMENTING'
      ],
      honestNotes: "Grounded in authentic learning, consistent experimentation, and disciplined creative execution."
    }
  },

  skills: [
    {
      id: 'video-editor',
      title: 'VIDEO EDITOR',
      category: 'Motion & Storytelling',
      description: 'Creating and editing videos while improving storytelling, pacing, visuals, and presentation.',
      details: [
        'Crafting narrative flow that sustains attention and delivers real value',
        'Pacing cuts, audio ducking, sound design, and kinetic visual rhythm',
        'Experimenting with motion graphics, titles, and cinematic color grading',
        'Refining retention-focused intros and clean technical explanations'
      ],
      tools: ['Premiere Pro', 'DaVinci Resolve', 'CapCut', 'Audition'],
      angle: 270
    },
    {
      id: 'content-creator',
      title: 'CONTENT CREATOR',
      category: 'Media & Narrative',
      description: 'Creating content about ideas, experiments, learning, technology, AI, and the creator journey.',
      details: [
        'Documenting the raw learning process rather than faking overnight expertise',
        'Producing insightful long-form YouTube videos and punchy short-form clips',
        'Distilling complex technical or AI workflows into beginner-friendly explanations',
        'Building an audience through honesty, transparency, and creative consistency'
      ],
      tools: ['YouTube Studio', 'OBS Studio', 'Sony Alpha Workflow', 'Notion'],
      angle: 0
    },
    {
      id: 'graphic-designer',
      title: 'GRAPHIC DESIGNER',
      category: 'Visual Identity',
      description: 'Exploring thumbnails, branding, digital graphics, and visual communication.',
      details: [
        'Designing high-CTR YouTube thumbnails with clean visual hierarchy and contrast',
        'Crafting personal brand assets, typography systems, and color palettes',
        'Digital poster art, social media carousels, and minimalist graphic assets',
        'Balancing negative space with bold cinematic typographic statements'
      ],
      tools: ['Figma', 'Photoshop', 'Illustrator', 'Canva Pro'],
      angle: 90
    },
    {
      id: 'ai-tools-experiments',
      title: 'AI TOOLS & EXPERIMENTS',
      category: 'Applied Intelligence',
      description: 'Exploring AI tools and testing ways technology can make creative and digital work easier.',
      details: [
        'Testing modern LLMs, video AI models, voice synthesizers, and automation scripts',
        'Prototyping creator-focused AI micro-tools to automate repetitive editing steps',
        'Exploring prompt engineering for visual design and script ideation',
        'Investigating how beginners can harness AI without deep coding barriers'
      ],
      tools: ['Gemini API', 'Claude', 'Midjourney', 'Runway', 'Cursor', 'Python / TS'],
      angle: 180
    }
  ],

  journey: [
    {
      id: 'step-1',
      phase: 'START',
      subtitle: 'The Spark',
      quote: 'Curiosity about technology and creativity.',
      description: 'Curiosity about technology and creativity.',
      badge: 'Start'
    },
    {
      id: 'step-2',
      phase: 'LEARNING',
      subtitle: 'The Foundation',
      quote: 'Started exploring content creation, editing, design, and AI tools.',
      description: 'Started exploring content creation, editing, design, and AI tools.',
      badge: 'Learning'
    },
    {
      id: 'step-3',
      phase: 'BUILDING',
      subtitle: 'The Prototypes',
      quote: 'Began turning ideas into websites, applications, and AI experiments.',
      description: 'Began turning ideas into websites, applications, and AI experiments.',
      badge: 'Building'
    },
    {
      id: 'step-4',
      phase: 'CREATING',
      subtitle: 'The Documentation',
      quote: 'Started documenting ideas, experiments, and lessons through content.',
      description: 'Started documenting ideas, experiments, and lessons through content.',
      badge: 'Creating'
    },
    {
      id: 'step-5',
      phase: 'TODAY',
      subtitle: 'The Grind',
      quote: 'Continuing to learn, create, experiment, and improve.',
      description: 'Continuing to learn, create, experiment, and improve.',
      badge: 'Today'
    },
    {
      id: 'step-6',
      phase: 'FUTURE',
      subtitle: 'The North Star',
      quote: 'Build a meaningful creator career and useful tools for creators and beginners.',
      description: 'Build a meaningful creator career and useful tools for creators and beginners.',
      badge: 'Future'
    }
  ],

  vision: {
    mainStatement: "I DON'T JUST WANT TO CREATE CONTENT. I WANT TO BUILD THE TOOLS BEHIND IT.",
    supportingText: "I want to combine content creation and AI to build useful tools that help beginners understand technology, creators work more efficiently, and people turn their ideas into something real.",
    categories: [
      {
        id: 'creators',
        title: 'CREATORS',
        description: 'Tools that make creating easier.',
        iconName: 'Sparkles',
        focusAreas: [
          'Automated timeline markers & silence removal',
          'AI-assisted B-roll tagging and sound design sync',
          'Thumbnail ideation and visual contrast testing',
          'Creator project asset organizing pipelines'
        ]
      },
      {
        id: 'beginners',
        title: 'BEGINNERS',
        description: "Simple AI experiences that don't require advanced technical knowledge.",
        iconName: 'GraduationCap',
        focusAreas: [
          'Plain-language AI prompt templates',
          'Interactive roadmaps for learning creative software',
          'Zero-setup digital workspace starters',
          'Jargon-free guides to applied generative AI'
        ]
      },
      {
        id: 'creative-work',
        title: 'CREATIVE WORK',
        description: 'Editing, content planning, ideas, design, and productivity.',
        iconName: 'Film',
        focusAreas: [
          'Script-to-storyboard visual alignment',
          'Content backlog planning and hook testing',
          'Design system kits for video titles and overlays',
          'Frictionless idea capture to execution flows'
        ]
      }
    ]
  },

  projects: [
    {
      id: 'creatiq',
      name: 'CREATIQ',
      description: 'An AI-focused platform concept exploring how creators, students, entrepreneurs, freelancers, and businesses can use AI to create smarter and grow faster.',
      status: 'Building / Concept',
      tags: ['AI', 'STARTUP', 'PRODUCT', 'WEB'],
      image: creatiqImg,
      conceptNotes: 'An AI-focused platform concept exploring how creators, students, entrepreneurs, freelancers, and businesses can use AI to create smarter and grow faster.',
      liveUrl: 'https://creatiqai.netlify.app/',
      githubUrl: '',
      caseStudyUrl: ''
    },
    {
      id: 'stratger',
      name: 'STRATGER',
      description: 'An AI planning concept focused on helping people turn unclear goals into practical paths and action plans.',
      status: 'Concept / Building',
      tags: ['AI', 'PLANNING', 'PRODUCTIVITY'],
      image: stratgerImg,
      conceptNotes: 'An AI planning concept focused on helping people turn unclear goals into practical paths and action plans.',
      liveUrl: 'https://stratger.netlify.app/',
      githubUrl: '',
      caseStudyUrl: ''
    },
    {
      id: 'kay',
      name: 'KAY',
      description: 'A personal AI assistant concept exploring conversational AI, voice interaction, memory, and computer assistance.',
      status: 'Experiment / Concept',
      tags: ['AI', 'VOICE', 'ASSISTANT'],
      image: kayImg,
      conceptNotes: 'A personal AI assistant concept exploring conversational AI, voice interaction, memory, and computer assistance.',
      liveUrl: '',
      githubUrl: '',
      caseStudyUrl: ''
    },
    {
      id: 'ai-experiments',
      name: 'AI EXPERIMENTS',
      description: 'Small experiments exploring AI, websites, interfaces, automation, and digital products.',
      status: 'Active Experiments',
      tags: ['EXPERIMENTS', 'AI', 'TECHNOLOGY'],
      image: creatiqImg,
      conceptNotes: 'Small experiments exploring AI, websites, interfaces, automation, and digital products.',
      liveUrl: '',
      githubUrl: '',
      caseStudyUrl: ''
    }
  ],

  content: [],

  philosophy: {
    steps: ['LEARN', 'CREATE', 'SHARE', 'IMPROVE'],
    quote: 'I believe the best way to learn is to build, experiment, share the result, and learn from what happens next.'
  },

  currentFocus: {
    learning: [
      'Video editing',
      'Content strategy',
      'AI tools',
      'Design',
      'Product building'
    ],
    creating: [
      'YouTube content',
      'Short-form content',
      'Documentary-style content',
      'AI experiments'
    ],
    building: [
      'AI-powered tools and personal projects'
    ],
    currentGoal: 'Become a better creator by consistently creating, learning, and improving.'
  },

  socialLinks: {
    email: 'adikumarsharma06@gmail.com',
    instagram: 'https://www.instagram.com/startwithaadii?igsh=MWg0NmU3czkyOG1jYg==',
    linkedin: 'https://www.linkedin.com/in/aditya-sharma-a38a0a3a6?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    x: 'https://x.com/AdityaShar54906',
    youtube: '',
    github: ''
  }
};
