'use client';
// Clean deployment - removed old static files

import { useState, useEffect } from 'react';
import { Mail, Linkedin, Calendar, ExternalLink, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [carouselPositions, setCarouselPositions] = useState({
    aiEthics: 0,
    business: 0,
    projectManagement: 0,
    technicalSkills: 0
  });

  useEffect(() => {
    
    // Random glitch effects - optimized for performance
    const glitchInterval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }
    }, 5000 + Math.random() * 10000);

    return () => clearInterval(glitchInterval);
  }, []);

  const timelineItems = [
    {
      date: "AUG 2019",
      title: "Begin Associates Degree",
      subtitle: "Front Range Community College",
      description: "Entered Colorado Early Colleges and tested out of all but 2 high school classes. Began concurrent enrollment at Front Range Community College.",
      skills: [],
      skillsLabel: "",
      color: "from-cyan-400 to-blue-500"
    },
    {
      date: "MAR 2021 - AUG 2021", 
      title: "Warehouse Technician",
      subtitle: "Paradigm",
      description: "Worked on a team to clean and repair ankle monitor chargers. First exposure to a professional environment.",
      skills: ["Procedural tasks", "Warehouse safety", "Time management"],
      skillsLabel: "Skills gained",
      color: "from-green-400 to-emerald-500"
    },
    {
      date: "AUG 2021 - SEPT 2021",
      title: "Direct Sales", 
      subtitle: "Ion Solar",
      description: "Performed direct sales in residential areas. Used sales skills to collect qualifying information on the property and set up appointments for residents to meet with our closers.",
      skills: ["Door-to-door sales", "Developing warm leads", "Managing customer confrontation"],
      skillsLabel: "Skills gained",
      color: "from-orange-400 to-red-500"
    },
    {
      date: "MAR 2022 - JUNE 2022",
      title: "Customer Service Representative",
      subtitle: "UPS Store", 
      description: "Acted as the primary point of interaction for customers shipping and receiving packages. First experience developing lasting relationships with customers.",
      skills: ["Cash handling", "Opening and closing", "Nurturing client relationships"],
      skillsLabel: "Skills gained",
      color: "from-red-400 to-pink-500"
    },
    {
      date: "AUG 2022 - JULY 2023",
      title: "Entrepreneurship experiments",
      subtitle: "Self-initiated projects",
      description: "Ranging from attempts at developing personal brands, online stores, digital services, and a moderately profitable car detailing business, this was the year I learned the most about the business world.",
      skills: ["Self initiative", "Deep research", "Small business operations"],
      skillsLabel: "Skills gained",
      color: "from-purple-400 to-violet-500"
    },
    {
      date: "May 2023",
      title: "Complete Associates Degree", 
      subtitle: "Front Range Community College",
      description: "Graduated Front Range Community College with a specialization in business, 4.59 GPA, and 77 transferable college credits.",
      skills: ["Small Business Operation", "Small Business Ownership", "Ownership & Foundations of Business"],
      skillsLabel: "Certificates earned",
      color: "from-blue-400 to-indigo-500"
    },
    {
      date: "AUG 2023",
      title: "Begin Bachelor's Degree",
      subtitle: "University of Colorado Boulder", 
      description: "Was accepted to the Leeds School of Business before changing departments and major to Philosophy after the first week.",
      skills: [],
      skillsLabel: "",
      color: "from-indigo-400 to-purple-500"
    },
    {
      date: "AUG 2023 - JAN 2025",
      title: "Taekwondo Club Leadership",
      subtitle: "University of Colorado Boulder",
      description: "Joined the University of Colorado Boulder Taekwondo club sports team. Competed on the team when they got 2nd place at Nationals.",
      skills: ["Athlete", "Captain", "Vice President"],
      skillsLabel: "Positions held",
      color: "from-yellow-400 to-orange-500"
    },
    {
      date: "AUG 2024 - DEC 2024", 
      title: "Game Master",
      subtitle: "Boulder Escape Room",
      description: "Functioned as Game Master for the Boulder Escape Room. Duties included: welcoming guests and explaining rules, monitoring teams during games, and providing hints as needed.",
      skills: ["Problem solving", "Game operations", "Employee training"],
      skillsLabel: "Skills gained",
      color: "from-green-400 to-teal-500"
    },
    {
      date: "AUG 2024 - MAY 2025",
      title: "Dock Assistant",
      subtitle: "University of Colorado Boulder",
      description: "Assisted the loading dock manager in the biotechnology building for the University of Colorado Boulder. Became the secondary point of contact for researchers for shipping questions.",
      skills: ["Chemical safety", "Information retrieval", "Lab resource routing"],
      skillsLabel: "Skills gained",
      color: "from-teal-400 to-cyan-500"
    },
    {
      date: "MAY 2025",
      title: "Complete Bachelor's Degree",
      subtitle: "University of Colorado Boulder",
      description: "Graduated from the University of Colorado Boulder school of Arts and Sciences with a Bachelor's Degree in Philosophy and a 3.38 GPA.",
      skills: ["AI ethics", "Epistemology", "Philosophy of mind"],
      skillsLabel: "Philosophical emphasis",
      color: "from-purple-400 to-pink-500"
    },
    {
      date: "MAY 2025 - Present", 
      title: "The Next Chapter",
      subtitle: "TBD...",
      description: "I am now furthering my skills through certification courses and external personal study into the AI field and broader business operations.",
      skills: ["AI for Business", "Google Data Analytics", "Google Project Management", "Google Cloud Data Analytics", "Security, Compliance, and Governance for AI Solutions", "Practical Deep Learning"],
      skillsLabel: "Certifications in progress",
      color: "from-pink-400 to-purple-500"
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Certificate data structure - raw data before sorting
  const rawCertificateData = {
    aiEthics: [
      { name: "Ethics and AI: A Philosophical Guide to Responsible Use", institution: "Northeastern University", image: "/certificates/ethics-ai.png", inProgress: false },
      { name: "AI, Empathy & Ethics", institution: "UC Santa Cruz", image: "/certificates/ai-empathy.png", inProgress: false },
      { name: "Introduction to Responsible AI", institution: "Google Cloud", image: "/certificates/responsible-ai-intro.png", inProgress: false },
      { name: "Introduction to Security in the World of AI", institution: "Google Cloud", image: "/certificates/security-ai-intro.png", inProgress: false },
      { name: "Responsible AI for Developers: Fairness & Bias", institution: "Google Cloud", image: null, inProgress: true },
      { name: "Data Ethics, AI and Responsible Innovation", institution: "University of Edinburgh", image: null, inProgress: true },
      { name: "AI Strategy & Governance", institution: "University of Pennsylvania", image: null, inProgress: true },
      { name: "AI: Ethics & Societal Challenges", institution: "Lund University", image: null, inProgress: true },
      { name: "Big Data, AI, and Ethics", institution: "UC Davis", image: null, inProgress: true }
    ],
    business: [
      { name: "The Economics of AI", institution: "University of Virginia", image: null, inProgress: true },
      { name: "AI for Business", institution: "University of Pennsylvania", image: null, inProgress: true },
      { name: "AI, Business, & The Future of Work", institution: "Lund University", image: null, inProgress: true },
      { name: "Specialization in Business", institution: "Front Range Community College", image: "/certificates/business-specialization.JPG", inProgress: false },
      { name: "Foundations of Business", institution: "Front Range Community College", image: "/certificates/foundations-business.JPG", inProgress: false },
      { name: "Small Business Operations", institution: "Front Range Community College", image: "/certificates/small-business-operations.JPG", inProgress: false },
      { name: "Small Business Ownership", institution: "Front Range Community College", image: "/certificates/small-business-ownership.JPG", inProgress: false }
    ],
    projectManagement: [
      { name: "Project Management Fundamentals", institution: "Google", image: null, inProgress: true },
      { name: "AI Product Manager Specialization", institution: "Microsoft", image: null, inProgress: true },
      { name: "AI Product Management Specialization", institution: "Duke", image: null, inProgress: true }
    ],
    technicalSkills: [
      { name: "AI Agents and Agentic AI in Python Specialization", institution: "Vanderbilt University", image: null, inProgress: true },
      { name: "Professional Data Analytics", institution: "Google", image: null, inProgress: true },
      { name: "Professional Cloud Data Analytics", institution: "Google Cloud", image: null, inProgress: true },
      { name: "Practical Deep Learning for Coders", institution: "fast.ai", image: null, inProgress: true }
    ]
  };

  // Function to sort certificates: files first, then in progress
  const sortCertificates = (certificates) => {
    return [...certificates].sort((a, b) => {
      // If one has an image and the other doesn't, prioritize the one with image
      if (a.image && !b.image) return -1;
      if (!a.image && b.image) return 1;
      // If both have images or both don't have images, maintain original order
      return 0;
    });
  };

  // Sorted certificate data - certificates with files appear first
  const certificateData = {
    aiEthics: sortCertificates(rawCertificateData.aiEthics),
    business: sortCertificates(rawCertificateData.business),
    projectManagement: sortCertificates(rawCertificateData.projectManagement),
    technicalSkills: sortCertificates(rawCertificateData.technicalSkills)
  };

  const handleCarouselNext = (section) => {
    setCarouselPositions(prev => ({
      ...prev,
      [section]: (prev[section] + 1) % certificateData[section].length
    }));
  };

  const handleCarouselPrev = (section) => {
    setCarouselPositions(prev => ({
      ...prev,
      [section]: prev[section] === 0 ? certificateData[section].length - 1 : prev[section] - 1
    }));
  };

  const renderCertificateCard = (section, colorClass) => {
    const certificates = certificateData[section];
    const currentIndex = carouselPositions[section];
    const certificate = certificates[currentIndex];
    
    return (
      <div className={`cyber-border bg-gray-900/50 p-6 md:p-8 border border-${colorClass}-400/30 hover:border-${colorClass}-400 hover:neon-glow transition-all relative overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br from-${colorClass}-400/5 to-purple-400/5`}></div>
        <div className="relative z-10 text-center">
          {certificate.image ? (
            <div className={`w-full h-64 md:h-80 rounded-xl overflow-hidden mb-4 relative border-2 border-${colorClass}-400/30`}>
              <img 
                src={certificate.image}
                alt={certificate.name}
                className="w-full h-full object-cover"
                width={400}
                height={320}
                loading="lazy"
                decoding="async"
              />
              <div className={`absolute inset-0 bg-gradient-to-br from-${colorClass}-400/10 via-purple-600/5 to-pink-400/10`}></div>
            </div>
          ) : (
            <div className="mb-4">
              <div className="text-lg md:text-xl font-bold cyber-body text-cyan-100 mb-4 break-words px-2">
                {certificate.name.toUpperCase().replace(/ /g, '_')}
              </div>
              <div className={`text-sm md:text-base cyber-body text-${colorClass}-400 break-words px-2`}>
                {certificate.institution.toUpperCase().replace(/ /g, '_')}
              </div>
              {certificate.inProgress && (
                <div className="text-sm text-cyan-300 mt-2 tracking-wider">IN PROGRESS</div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-cyan-100 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="cyber-grid h-full w-full opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 rotate-45 floating opacity-30"></div>
        <div className="absolute top-60 right-32 w-24 h-24 border border-pink-400 floating opacity-30" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-40 w-40 h-40 border border-purple-400 rotate-12 floating opacity-30" style={{animationDelay: '4s'}}></div>
        
        {/* Scan Lines */}
        <div className="absolute inset-0 scan-lines pointer-events-none"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-cyan-400/30">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold cyber-font neon-text text-cyan-400">
              <span className={`${glitchActive ? 'glitch' : ''}`} data-text="MICAH.EXE">
                MICAH.EXE
              </span>
            </div>
            <div className="hidden md:flex space-x-8 cyber-body">
              {['HOME', 'WHO_AM_I', 'PAPERS', 'DEGREES', 'CERTIFICATIONS', 'JOURNEY', 'CONNECT'].map((item, index) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(['hero', 'about', 'papers', 'degrees', 'certifications', 'journey', 'contact'][index])} 
                  className="text-cyan-100 hover:text-cyan-400 transition-colors font-medium tracking-wider relative group break-normal"
                >
                  <span className="relative z-10 break-all">{item}</span>
                  <span className="absolute inset-0 bg-cyan-400/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold cyber-font break-normal">
                  <span className={`bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text ${glitchActive ? 'glitch' : ''}`} 
                        data-text="MICAH PROBST">
                    MICAH PROBST
                  </span>
                </h1>
                <div className="text-lg md:text-xl lg:text-2xl cyber-body font-light break-normal">
                  <span className="text-cyan-400 neon-text break-all">PHILOSOPHY_GRADUATE</span>
                  <span className="text-pink-300 mx-2">|</span>
                  <span className="text-purple-400 neon-text break-all">CRITICAL_THINKER</span>
                  <span className="text-pink-300 mx-2">|</span>
                  <span className="text-cyan-400 neon-text whitespace-nowrap">PEOPLE_PERSON</span>
                </div>
              </div>
              
              <div className="relative cyber-border bg-gray-900/50 p-6 border border-cyan-400/30">
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>
                
                <p className="text-lg cyber-body leading-relaxed text-cyan-100">
                  My name is <strong>Micah Probst</strong>, a recent graduate of the University of Colorado Boulder with a <strong>Bachelor's Degree in Philosophy</strong> and <strong>multiple business certifications </strong> 
                  acquired during my associates degree. I've done all this at <strong>19</strong>, and I'm not stopping. My current focus is on
                  certifications in <strong>project management, deep learning, data analytics, and AI governance,</strong> and my goal is to apply my analytical and organizational
                  skills to help create a more efficient and responsibly AI-powered future of work.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full border-4 border-cyan-400 shadow-2xl overflow-hidden relative animate-border-pulse" style={{boxShadow: '0 0 40px rgba(0, 255, 255, 0.3), 0 0 80px rgba(0, 255, 255, 0.1)'}}>
                  <img 
                    src="/images/hero-profile.jpg" 
                    alt="Micah Probst - Portfolio Photo"
                    className="w-full h-full object-cover"
                    style={{filter: 'contrast(1.1) brightness(1.05) saturate(1.1)'}}
                    width={320}
                    height={320}
                    decoding="async"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 via-purple-600/8 to-pink-400/8"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded animate-cyber-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded animate-cyber-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Am I Section */}
      <section id="about" className="py-20 bg-gray-900/30 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold cyber-font mb-8 neon-text text-cyan-400 break-normal">
            <span className={`${glitchActive ? 'glitch' : ''}`} data-text="WHO_AM_I?">WHO_AM_I?</span>
          </h2>
          <h3 className="text-2xl font-semibold cyber-body mb-12 text-purple-400 break-normal">
            EARLY_ADOPTER <span className="text-pink-300">|</span> ETHICALLY_DEVOTED <span className="text-pink-300">|</span> COMPLEXITY_INTERPRETER
          </h3>
          
          {/* Video Player */}
          <div className="max-w-4xl mx-auto mb-12 relative">
            <div className="cyber-border bg-gradient-to-b from-blue-900/30 via-green-900/30 to-green-600/30 rounded-2xl overflow-hidden relative shadow-lg border border-cyan-400/30">
              <video 
                className="w-full aspect-video object-contain"
                controls
                loading="lazy"
                poster="/images/video-thumb.png"
                preload="metadata"
              >
                <source src="/videos/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Papers Section */}
      <section id="papers" className="py-12 md:py-20 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center cyber-font mb-8 md:mb-16 neon-text text-orange-400 break-normal">
            <span className={`${glitchActive ? 'glitch' : ''}`} data-text="PAPERS.DOC">PAPERS.DOC</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            {/* Beyond Binary Understanding Paper */}
            <a 
              href="/documents/beyond-binary-understanding.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative cursor-pointer block"
            >
              <div className="cyber-border bg-gray-900/50 p-4 md:p-5 border border-cyan-400/30 hover:border-cyan-400 transition-all hover:neon-glow max-w-sm mx-auto">
                <div className="w-full h-80 md:h-[26rem] rounded-xl overflow-hidden mb-3 md:mb-4 relative border-2 border-cyan-400/30 bg-white aspect-[8.5/11]">
                  <img 
                    src="/images/beyond-binary-understanding-thumb.jpg"
                    alt="Beyond Binary Understanding - First Page"
                    className="w-full h-full object-contain bg-white"
                    width={400}
                    height={518}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center" style={{display: 'none'}}>
                    <div className="text-gray-600 text-center">
                      <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                      <p className="text-xs md:text-sm font-medium">PDF Preview</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-600/5 to-pink-400/10"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-base md:text-lg font-bold cyber-body text-cyan-100 group-hover:text-cyan-400 transition-colors break-all leading-tight mb-2">
                    BEYOND_BINARY_UNDERSTANDING
                  </h3>
                  <p className="text-xs md:text-sm cyber-body text-cyan-300/80 leading-relaxed">
                    Explores how artificial intelligence stacks up to traditional philosophical notions of understanding, and proposes a more nuanced expansion of our concept of understanding.
                  </p>
                </div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-l-2 border-t-2 border-cyan-400 group-hover:border-orange-400 transition-colors"></div>
              <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 border-r-2 border-t-2 border-cyan-400 group-hover:border-orange-400 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 border-l-2 border-b-2 border-cyan-400 group-hover:border-orange-400 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-r-2 border-b-2 border-cyan-400 group-hover:border-orange-400 transition-colors"></div>
            </a>
            
            {/* AI Sycophancy Paper */}
            <a 
              href="/documents/ai-sycophancy-epistemic-vice.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative cursor-pointer block"
            >
              <div className="cyber-border bg-gray-900/50 p-4 md:p-5 border border-cyan-400/30 hover:border-cyan-400 transition-all hover:neon-glow max-w-sm mx-auto">
                <div className="w-full h-80 md:h-[26rem] rounded-xl overflow-hidden mb-3 md:mb-4 relative border-2 border-cyan-400/30 bg-white aspect-[8.5/11]">
                  <img 
                    src="/images/ai-sycophancy-epistemic-vice-thumb.jpg"
                    alt="AI Sycophancy Epistemic Vice - First Page"
                    className="w-full h-full object-contain bg-white"
                    width={400}
                    height={518}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center" style={{display: 'none'}}>
                    <div className="text-gray-600 text-center">
                      <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                      <p className="text-xs md:text-sm font-medium">PDF Preview</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-600/5 to-pink-400/10"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-base md:text-lg font-bold cyber-body text-cyan-100 group-hover:text-cyan-400 transition-colors break-all leading-tight mb-2">
                    AI_SYCOPHANCY_EPISTEMIC_VICE
                  </h3>
                  <p className="text-xs md:text-sm cyber-body text-cyan-300/80 leading-relaxed">
                    Examines how AI systems can develop sycophantic behaviors from a technical perspective, and discusses the broader implications of AI sycophancy.
                  </p>
                </div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-l-2 border-t-2 border-cyan-400 group-hover:border-orange-400 transition-colors"></div>
              <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 border-r-2 border-t-2 border-cyan-400 group-hover:border-orange-400 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 border-l-2 border-b-2 border-cyan-400 group-hover:border-orange-400 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-r-2 border-b-2 border-cyan-400 group-hover:border-orange-400 transition-colors"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="degrees" className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center cyber-font mb-16 neon-text text-yellow-400">
            <span className={`${glitchActive ? 'glitch' : ''}`} data-text="DEGREES.DB">DEGREES.DB</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 max-w-7xl mx-auto">
            {[
              {
                title: "Bachelor's of Philosophy",
                image: "/certificates/bachelors-philosophy.jpg",
                alt: "Bachelor's of Philosophy Certificate"
              },
              {
                title: "Associates of Arts",
                image: "/certificates/associates-arts.JPG",
                alt: "Associates of Arts Certificate"
              }
            ].map((cert, index) => (
              <a 
                key={index} 
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative cursor-pointer block"
              >
                <div className="cyber-border bg-gray-900/50 p-4 md:p-6 border border-cyan-400/30 hover:border-cyan-400 transition-all hover:neon-glow">
                  <div className="w-full aspect-[5/4] rounded-lg overflow-hidden mb-4 relative border-2 border-cyan-400/30 bg-white">
                    <img 
                      src={cert.image}
                      alt={cert.alt}
                      className="w-full h-full object-cover"
                      width={500}
                      height={400}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-600/5 to-pink-400/10"></div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-center cyber-body text-cyan-100 group-hover:text-cyan-400 transition-colors break-all">
                    {cert.title.toUpperCase().replace(/'/g, '').replace(/ /g, '_')}
                  </h3>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400 group-hover:border-yellow-400 transition-colors"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400 group-hover:border-yellow-400 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400 group-hover:border-yellow-400 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400 group-hover:border-yellow-400 transition-colors"></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Working On Section */}
      <section id="certifications" className="py-20 bg-gray-900/30 relative z-10">
        <div className="w-full">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center cyber-font mb-16 neon-text text-green-400">
            <span className={`${glitchActive ? 'glitch' : ''}`} data-text="CERTIFICATION.CSV">CERTIFICATION.CSV</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[2.5%] w-full mx-auto" style={{paddingLeft: '5%', paddingRight: '5%'}}>
            {/* AI Ethics Section */}
            <div className="space-y-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold cyber-font text-center neon-text text-cyan-400 mb-6">
                AI_ETHICS
              </h3>
              <div className="relative">
{(() => {
                  const currentCert = certificateData.aiEthics[carouselPositions.aiEthics];
                  return (
                    <div className="cyber-border bg-gray-900/50 pt-4 md:pt-6 lg:pt-8 px-8 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16 border border-cyan-400/30 hover:border-cyan-400 transition-all hover:neon-glow">
                      {/* Certificate Image */}
                      <div className="w-full h-auto rounded-lg overflow-hidden mb-3 relative border-2 border-cyan-400/30 bg-black">
                        {currentCert.image ? (
                          <a 
                            href={currentCert.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block cursor-pointer hover:opacity-90 transition-opacity duration-200"
                            title="Click to view full size certificate"
                          >
                            <img 
                              src={currentCert.image}
                              alt={currentCert.name}
                              className="w-full h-auto object-contain"
                              loading="lazy"
                              decoding="async"
                              style={{
                                imageRendering: 'crisp-edges',
                                imageRendering: '-webkit-optimize-contrast',
                                imageRendering: 'optimize-contrast',
                                maxWidth: 'none',
                                filter: 'contrast(1.1) brightness(1.05)'
                              }}
                            />
                          </a>
                        ) : (
                          /* Enhanced Cyberpunk "In Progress" Graphic */
                          <div className="w-full aspect-[16/9] flex flex-col items-center justify-center relative overflow-hidden">
                            {/* Animated background layers */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-600/5 to-pink-400/10"></div>
                            
                            {/* Moving grid pattern */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                              <div 
                                className="w-full h-full bg-cyan-400/20"
                                style={{
                                  backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                                  backgroundSize: '20px 20px',
                                  animation: 'grid-move 10s linear infinite'
                                }}
                              ></div>
                            </div>
                            
                            {/* Sliding bars */}
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse" style={{top: '30%', animation: 'slide-horizontal 3s ease-in-out infinite'}}></div>
                              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" style={{top: '70%', animation: 'slide-horizontal 4s ease-in-out infinite reverse'}}></div>
                            </div>
                            
                            <div className="relative z-10 text-center">
                              <div className="text-cyan-400 text-lg md:text-xl font-bold cyber-font mb-2 animate-pulse">
                                [ IN PROGRESS ]
                              </div>
                              <div className="flex items-center justify-center space-x-1">
                                <div className="w-2 h-2 bg-cyan-400 rounded animate-ping"></div>
                                <div className="w-2 h-2 bg-cyan-400 rounded animate-ping" style={{animationDelay: '0.5s'}}></div>
                                <div className="w-2 h-2 bg-cyan-400 rounded animate-ping" style={{animationDelay: '1s'}}></div>
                              </div>
                              <div className="text-cyan-400/60 text-sm cyber-body mt-2 tracking-widest animate-pulse">
                                PROCESSING...
                              </div>
                            </div>
                            
                            {/* Enhanced scan lines effect */}
                            <div className="absolute inset-0 opacity-15 pointer-events-none">
                              <div 
                                className="w-full h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent bg-repeat-y" 
                                style={{
                                  backgroundSize: '100% 4px',
                                  animation: 'scan-lines 2s linear infinite'
                                }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Certificate Name */}
                      <h4 className="text-sm md:text-base lg:text-lg font-bold text-center cyber-body text-cyan-100 group-hover:text-cyan-400 transition-colors break-words mb-2">
                        {currentCert.name.toUpperCase().replace(/[^A-Z0-9\s]/g, '')}
                      </h4>
                      {/* Issuing Institution */}
                      <p className="text-xs md:text-sm lg:text-base text-center cyber-body text-cyan-400 break-words">
                        {currentCert.institution.toUpperCase().replace(/[^A-Z0-9\s]/g, '')}
                      </p>
                    </div>
                  );
                })()}
                <button 
                  onClick={() => handleCarouselPrev('aiEthics')}
                  className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-cyan-400/20 hover:bg-cyan-400/40 p-1 rounded border border-cyan-400/30 hover:border-cyan-400 transition-all"
                >
                  <ChevronLeft size={16} className="text-cyan-400" />
                </button>
                <button 
                  onClick={() => handleCarouselNext('aiEthics')}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-cyan-400/20 hover:bg-cyan-400/40 p-1 rounded border border-cyan-400/30 hover:border-cyan-400 transition-all"
                >
                  <ChevronRight size={16} className="text-cyan-400" />
                </button>
              </div>
            </div>

            {/* Business Section */}
            <div className="space-y-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold cyber-font text-center neon-text text-orange-400 mb-6">
                BUSINESS
              </h3>
              <div className="relative">
{(() => {
                  const currentCert = certificateData.business[carouselPositions.business];
                  return (
                    <div className="cyber-border bg-gray-900/50 pt-4 md:pt-6 lg:pt-8 px-8 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16 border border-orange-400/30 hover:border-orange-400 transition-all hover:neon-glow">
                      {/* Certificate Image */}
                      <div className="w-full h-auto rounded-lg overflow-hidden mb-3 relative border-2 border-orange-400/30 bg-black">
                        {currentCert.image ? (
                          <a 
                            href={currentCert.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block cursor-pointer hover:opacity-90 transition-opacity duration-200"
                            title="Click to view full size certificate"
                          >
                            <img 
                              src={currentCert.image}
                              alt={currentCert.name}
                              className="w-full h-auto object-contain"
                              loading="lazy"
                              decoding="async"
                              style={{
                                imageRendering: 'crisp-edges',
                                imageRendering: '-webkit-optimize-contrast',
                                imageRendering: 'optimize-contrast',
                                maxWidth: 'none',
                                filter: 'contrast(1.1) brightness(1.05)'
                              }}
                            />
                          </a>
                        ) : (
                          /* Enhanced Cyberpunk "In Progress" Graphic */
                          <div className="w-full aspect-[16/9] flex flex-col items-center justify-center relative overflow-hidden">
                            {/* Animated background layers */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-red-600/5 to-pink-400/10"></div>
                            
                            {/* Moving grid pattern */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                              <div 
                                className="w-full h-full bg-orange-400/20"
                                style={{
                                  backgroundImage: 'linear-gradient(orange 1px, transparent 1px), linear-gradient(90deg, orange 1px, transparent 1px)',
                                  backgroundSize: '20px 20px',
                                  animation: 'grid-move 10s linear infinite'
                                }}
                              ></div>
                            </div>
                            
                            {/* Sliding bars */}
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent animate-pulse" style={{top: '30%', animation: 'slide-horizontal 3s ease-in-out infinite'}}></div>
                              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" style={{top: '70%', animation: 'slide-horizontal 4s ease-in-out infinite reverse'}}></div>
                            </div>
                            
                            <div className="relative z-10 text-center">
                              <div className="text-orange-400 text-lg md:text-xl font-bold cyber-font mb-2 animate-pulse">
                                [ IN PROGRESS ]
                              </div>
                              <div className="flex items-center justify-center space-x-1">
                                <div className="w-2 h-2 bg-orange-400 rounded animate-ping"></div>
                                <div className="w-2 h-2 bg-orange-400 rounded animate-ping" style={{animationDelay: '0.5s'}}></div>
                                <div className="w-2 h-2 bg-orange-400 rounded animate-ping" style={{animationDelay: '1s'}}></div>
                              </div>
                              <div className="text-orange-400/60 text-sm cyber-body mt-2 tracking-widest animate-pulse">
                                PROCESSING...
                              </div>
                            </div>
                            
                            {/* Enhanced scan lines effect */}
                            <div className="absolute inset-0 opacity-15 pointer-events-none">
                              <div 
                                className="w-full h-full bg-gradient-to-b from-transparent via-orange-400/20 to-transparent bg-repeat-y" 
                                style={{
                                  backgroundSize: '100% 4px',
                                  animation: 'scan-lines 2s linear infinite'
                                }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Certificate Name */}
                      <h4 className="text-sm md:text-base lg:text-lg font-bold text-center cyber-body text-cyan-100 group-hover:text-orange-400 transition-colors break-words mb-2">
                        {currentCert.name.toUpperCase().replace(/[^A-Z0-9\s]/g, '')}
                      </h4>
                      {/* Issuing Institution */}
                      <p className="text-xs md:text-sm lg:text-base text-center cyber-body text-orange-400 break-words">
                        {currentCert.institution.toUpperCase().replace(/[^A-Z0-9\s]/g, '')}
                      </p>
                    </div>
                  );
                })()}
                <button 
                  onClick={() => handleCarouselPrev('business')}
                  className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-orange-400/20 hover:bg-orange-400/40 p-1 rounded border border-orange-400/30 hover:border-orange-400 transition-all"
                >
                  <ChevronLeft size={16} className="text-orange-400" />
                </button>
                <button 
                  onClick={() => handleCarouselNext('business')}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-orange-400/20 hover:bg-orange-400/40 p-1 rounded border border-orange-400/30 hover:border-orange-400 transition-all"
                >
                  <ChevronRight size={16} className="text-orange-400" />
                </button>
              </div>
            </div>

            {/* Project Management Section */}
            <div className="space-y-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold cyber-font text-center neon-text text-blue-400 mb-6">
                PROJECT_MGMT
              </h3>
              <div className="relative">
{(() => {
                  const currentCert = certificateData.projectManagement[carouselPositions.projectManagement];
                  return (
                    <div className="cyber-border bg-gray-900/50 pt-4 md:pt-6 lg:pt-8 px-8 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16 border border-blue-400/30 hover:border-blue-400 transition-all hover:neon-glow">
                      {/* Certificate Image */}
                      <div className="w-full h-auto rounded-lg overflow-hidden mb-3 relative border-2 border-blue-400/30 bg-black">
                        {currentCert.image ? (
                          <a 
                            href={currentCert.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block cursor-pointer hover:opacity-90 transition-opacity duration-200"
                            title="Click to view full size certificate"
                          >
                            <img 
                              src={currentCert.image}
                              alt={currentCert.name}
                              className="w-full h-auto object-contain"
                              loading="lazy"
                              decoding="async"
                              style={{
                                imageRendering: 'crisp-edges',
                                imageRendering: '-webkit-optimize-contrast',
                                imageRendering: 'optimize-contrast',
                                maxWidth: 'none',
                                filter: 'contrast(1.1) brightness(1.05)'
                              }}
                            />
                          </a>
                        ) : (
                          /* Enhanced Cyberpunk "In Progress" Graphic */
                          <div className="w-full aspect-[16/9] flex flex-col items-center justify-center relative overflow-hidden">
                            {/* Animated background layers */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-cyan-600/5 to-purple-400/10"></div>
                            
                            {/* Moving grid pattern */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                              <div 
                                className="w-full h-full bg-blue-400/20"
                                style={{
                                  backgroundImage: 'linear-gradient(blue 1px, transparent 1px), linear-gradient(90deg, blue 1px, transparent 1px)',
                                  backgroundSize: '20px 20px',
                                  animation: 'grid-move 10s linear infinite'
                                }}
                              ></div>
                            </div>
                            
                            {/* Sliding bars */}
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse" style={{top: '30%', animation: 'slide-horizontal 3s ease-in-out infinite'}}></div>
                              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" style={{top: '70%', animation: 'slide-horizontal 4s ease-in-out infinite reverse'}}></div>
                            </div>
                            
                            <div className="relative z-10 text-center">
                              <div className="text-blue-400 text-lg md:text-xl font-bold cyber-font mb-2 animate-pulse">
                                [ IN PROGRESS ]
                              </div>
                              <div className="flex items-center justify-center space-x-1">
                                <div className="w-2 h-2 bg-blue-400 rounded animate-ping"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded animate-ping" style={{animationDelay: '0.5s'}}></div>
                                <div className="w-2 h-2 bg-blue-400 rounded animate-ping" style={{animationDelay: '1s'}}></div>
                              </div>
                              <div className="text-blue-400/60 text-sm cyber-body mt-2 tracking-widest animate-pulse">
                                PROCESSING...
                              </div>
                            </div>
                            
                            {/* Enhanced scan lines effect */}
                            <div className="absolute inset-0 opacity-15 pointer-events-none">
                              <div 
                                className="w-full h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent bg-repeat-y" 
                                style={{
                                  backgroundSize: '100% 4px',
                                  animation: 'scan-lines 2s linear infinite'
                                }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Certificate Name */}
                      <h4 className="text-sm md:text-base lg:text-lg font-bold text-center cyber-body text-cyan-100 group-hover:text-blue-400 transition-colors break-words mb-2">
                        {currentCert.name.toUpperCase().replace(/[^A-Z0-9\s]/g, '')}
                      </h4>
                      {/* Issuing Institution */}
                      <p className="text-xs md:text-sm lg:text-base text-center cyber-body text-blue-400 break-words">
                        {currentCert.institution.toUpperCase().replace(/[^A-Z0-9\s]/g, '')}
                      </p>
                    </div>
                  );
                })()}
                <button 
                  onClick={() => handleCarouselPrev('projectManagement')}
                  className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-blue-400/20 hover:bg-blue-400/40 p-1 rounded border border-blue-400/30 hover:border-blue-400 transition-all"
                >
                  <ChevronLeft size={16} className="text-blue-400" />
                </button>
                <button 
                  onClick={() => handleCarouselNext('projectManagement')}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-400/20 hover:bg-blue-400/40 p-1 rounded border border-blue-400/30 hover:border-blue-400 transition-all"
                >
                  <ChevronRight size={16} className="text-blue-400" />
                </button>
              </div>
            </div>

            {/* Technical Skills Section */}
            <div className="space-y-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold cyber-font text-center neon-text text-red-400 mb-6">
                TECHNICAL_SKILLS
              </h3>
              <div className="relative">
{(() => {
                  const currentCert = certificateData.technicalSkills[carouselPositions.technicalSkills];
                  return (
                    <div className="cyber-border bg-gray-900/50 pt-4 md:pt-6 lg:pt-8 px-8 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16 border border-red-400/30 hover:border-red-400 transition-all hover:neon-glow">
                      {/* Certificate Image */}
                      <div className="w-full h-auto rounded-lg overflow-hidden mb-3 relative border-2 border-red-400/30 bg-black">
                        {currentCert.image ? (
                          <a 
                            href={currentCert.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block cursor-pointer hover:opacity-90 transition-opacity duration-200"
                            title="Click to view full size certificate"
                          >
                            <img 
                              src={currentCert.image}
                              alt={currentCert.name}
                              className="w-full h-auto object-contain"
                              loading="lazy"
                              decoding="async"
                              style={{
                                imageRendering: 'crisp-edges',
                                imageRendering: '-webkit-optimize-contrast',
                                imageRendering: 'optimize-contrast',
                                maxWidth: 'none',
                                filter: 'contrast(1.1) brightness(1.05)'
                              }}
                            />
                          </a>
                        ) : (
                          /* Enhanced Cyberpunk "In Progress" Graphic */
                          <div className="w-full aspect-[16/9] flex flex-col items-center justify-center relative overflow-hidden">
                            {/* Animated background layers */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 via-pink-600/5 to-purple-400/10"></div>
                            
                            {/* Moving grid pattern */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                              <div 
                                className="w-full h-full bg-red-400/20"
                                style={{
                                  backgroundImage: 'linear-gradient(red 1px, transparent 1px), linear-gradient(90deg, red 1px, transparent 1px)',
                                  backgroundSize: '20px 20px',
                                  animation: 'grid-move 10s linear infinite'
                                }}
                              ></div>
                            </div>
                            
                            {/* Sliding bars */}
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-400/50 to-transparent animate-pulse" style={{top: '30%', animation: 'slide-horizontal 3s ease-in-out infinite'}}></div>
                              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-400/30 to-transparent" style={{top: '70%', animation: 'slide-horizontal 4s ease-in-out infinite reverse'}}></div>
                            </div>
                            
                            <div className="relative z-10 text-center">
                              <div className="text-red-400 text-lg md:text-xl font-bold cyber-font mb-2 animate-pulse">
                                [ IN PROGRESS ]
                              </div>
                              <div className="flex items-center justify-center space-x-1">
                                <div className="w-2 h-2 bg-red-400 rounded animate-ping"></div>
                                <div className="w-2 h-2 bg-red-400 rounded animate-ping" style={{animationDelay: '0.5s'}}></div>
                                <div className="w-2 h-2 bg-red-400 rounded animate-ping" style={{animationDelay: '1s'}}></div>
                              </div>
                              <div className="text-red-400/60 text-sm cyber-body mt-2 tracking-widest animate-pulse">
                                PROCESSING...
                              </div>
                            </div>
                            
                            {/* Enhanced scan lines effect */}
                            <div className="absolute inset-0 opacity-15 pointer-events-none">
                              <div 
                                className="w-full h-full bg-gradient-to-b from-transparent via-red-400/20 to-transparent bg-repeat-y" 
                                style={{
                                  backgroundSize: '100% 4px',
                                  animation: 'scan-lines 2s linear infinite'
                                }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Certificate Name */}
                      <h4 className="text-sm md:text-base lg:text-lg font-bold text-center cyber-body text-cyan-100 group-hover:text-red-400 transition-colors break-words mb-2">
                        {currentCert.name.toUpperCase().replace(/[^A-Z0-9\s]/g, '')}
                      </h4>
                      {/* Issuing Institution */}
                      <p className="text-xs md:text-sm lg:text-base text-center cyber-body text-red-400 break-words">
                        {currentCert.institution.toUpperCase().replace(/[^A-Z0-9\s]/g, '')}
                      </p>
                    </div>
                  );
                })()}
                <button 
                  onClick={() => handleCarouselPrev('technicalSkills')}
                  className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-red-400/20 hover:bg-red-400/40 p-1 rounded border border-red-400/30 hover:border-red-400 transition-all"
                >
                  <ChevronLeft size={16} className="text-red-400" />
                </button>
                <button 
                  onClick={() => handleCarouselNext('technicalSkills')}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-red-400/20 hover:bg-red-400/40 p-1 rounded border border-red-400/30 hover:border-red-400 transition-all"
                >
                  <ChevronRight size={16} className="text-red-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey & Timeline Section */}
      <section id="journey" className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold cyber-font mb-8 neon-text text-pink-400">
            <span className={`${glitchActive ? 'glitch' : ''}`} data-text="MY_JOURNEY.LOG">MY_JOURNEY.LOG</span>
          </h2>
          <h3 className="text-xl md:text-2xl cyber-body mb-4 text-cyan-400 break-all">LEARNING_FROM_EVERY_OPPORTUNITY</h3>
          <p className="text-xl cyber-body leading-relaxed max-w-3xl mx-auto text-cyan-100">
            From (almost) testing out of high school at 15 to graduating with a philosophy degree at 19, here's how I've built a foundation of diverse experiences and continuous learning
          </p>
          
          {/* Resume Button */}
          <div className="mt-12 text-center">
            <a 
              href="/documents/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-600 to-purple-600 text-black px-8 py-4 rounded-lg font-bold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cyber-font neon-glow relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <svg className="w-5 h-5 mr-3 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
              <span className="relative z-10">VIEW_RESUME.PDF</span>
            </a>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-cyan-400 to-pink-400 neon-glow"></div>

            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex items-center mb-8 md:-mb-8">
                {/* Timeline Dot */}
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-black shadow-lg z-10 animate-cyber-pulse`}></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="cyber-border bg-gray-900/50 p-4 md:p-6 lg:p-8 border border-cyan-400/30 hover:border-cyan-400 hover:neon-glow transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute inset-0 cyber-grid opacity-5"></div>
                    
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <span className="text-sm font-bold text-cyan-400 bg-black/50 px-4 py-2 rounded cyber-body tracking-wider border border-cyan-400/30">
                        {item.date}
                      </span>
                      <Calendar size={20} className="text-cyan-400 animate-cyber-pulse" />
                    </div>
                    
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold cyber-font mb-3 text-cyan-100 group-hover:text-cyan-400 transition-colors break-normal">
                      {item.title.toUpperCase().replace(/ /g, '_').replace(/_/g, '_\u200B')}
                    </h3>
                    <p className="text-purple-400 font-semibold mb-4 text-base md:text-lg cyber-body break-normal">
                      {item.subtitle.toUpperCase().replace(/ /g, '_').replace(/_/g, '_\u200B')}
                    </p>
                    <p className="text-cyan-100 mb-6 leading-relaxed cyber-body">{item.description}</p>
                    
                    {item.skills.length > 0 && (
                      <div className="pt-6 border-t border-cyan-400/30 relative z-10">
                        <h4 className="font-semibold text-pink-400 mb-3 text-lg cyber-body tracking-wider break-normal">
                          {item.skillsLabel.toUpperCase().replace(/ /g, '_').replace(/_/g, '_\u200B')}:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-gradient-to-r from-cyan-400/20 to-purple-400/20 text-cyan-400 px-4 py-2 rounded border border-cyan-400/30 text-sm font-medium cyber-body hover:neon-glow transition-all break-normal">
                              {skill.toUpperCase().replace(/ /g, '_').replace(/_/g, '_\u200B')}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400 group-hover:border-pink-400 transition-colors"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400 group-hover:border-pink-400 transition-colors"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900/50 to-black text-cyan-100 relative z-10">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 cyber-font neon-text text-blue-400 leading-tight md:leading-normal">
            <span className={`${glitchActive ? 'glitch' : ''}`} data-text="ESTABLISH_CONNECTION">
              <span className="block md:inline">ESTABLISH</span>
              <span className="block md:inline md:before:content-['_'] md:before:mx-1">CONNECTION</span>
            </span>
          </h2>
          <p className="text-xl cyber-body mb-12 max-w-2xl mx-auto text-cyan-100">
            Ready to bring ethical AI implementation, strategic project management, and a fresh philosophical perspective to your organization? 
            Let's discuss how I can contribute to your team's success.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:micah.x.probst@gmail.com" 
              className="group cyber-border bg-black/50 backdrop-blur-sm p-4 md:p-6 lg:p-8 border border-cyan-400/30 hover:border-cyan-400 hover:neon-glow transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5"></div>
              <Mail size={48} className="mx-auto mb-4 text-red-400 group-hover:scale-110 transition-transform animate-cyber-pulse relative z-10" />
              <h3 className="text-lg font-bold mb-2 cyber-font text-cyan-100 group-hover:text-red-400 transition-colors break-all text-center">EMAIL_INTERFACE</h3>
              <p className="text-red-400 cyber-body text-xs tracking-wider break-all text-center">micah.x.probst@gmail.com</p>
              <div className="absolute top-2 right-2 w-3 h-3 bg-red-400 rounded animate-cyber-pulse"></div>
            </a>
                      
            <div className="group cyber-border bg-black/50 backdrop-blur-sm p-4 md:p-6 lg:p-8 border border-cyan-400/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-400/5"></div>
              <Zap size={48} className="mx-auto mb-4 text-green-400 animate-cyber-pulse relative z-10" />
              <h3 className="text-lg font-bold mb-2 cyber-font text-cyan-100 break-all text-center">LOCATION_DATA</h3>
              <p className="text-green-400 cyber-body text-xs tracking-wider text-center">Boulder, Colorado</p>
              <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded animate-cyber-pulse"></div>
            </div>

             <a 
              href="https://www.linkedin.com/in/micah-probst-b80009172/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group cyber-border bg-black/50 backdrop-blur-sm p-4 md:p-6 lg:p-8 border border-cyan-400/30 hover:border-cyan-400 hover:neon-glow transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-cyan-400/5"></div>
              <Linkedin size={48} className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform animate-cyber-pulse relative z-10" />
              <h3 className="text-lg font-bold mb-2 cyber-font text-cyan-100 group-hover:text-cyan-400 transition-colors break-all text-center">LINKEDIN_SOURCE</h3>
              <p className="text-blue-400 cyber-body text-xs tracking-wider break-all text-center">linkedin.com/in/micah-probst-b80009172</p>
              <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded animate-cyber-pulse"></div>
            </a>
          </div>

          <div className="cyber-border bg-black/50 backdrop-blur-sm p-8 border border-cyan-400/30 relative overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-5"></div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 cyber-font text-cyan-400 neon-text relative z-10 break-all">READY_TO_MAKE_IMPACT</h3>
            <p className="text-cyan-100 mb-6 cyber-body relative z-10">
              I am seeking opportunities in the <strong>Denver/Boulder/Fort Collins</strong> area where I can apply my unique combination 
              of philosophical thinking, business acumen, and AI ethics expertise.
            </p>
            <a 
              href="mailto:micah.x.probst@gmail.com" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600 text-black px-4 md:px-8 py-3 md:py-4 rounded text-sm md:text-base font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cyber-font neon-glow relative z-10 mx-auto"
            >
              INITIATE_CONVERSATION
              <ExternalLink size={20} className="ml-2" />
            </a>
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyan-400"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-cyan-400"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-cyan-400 py-8 border-t border-cyan-400/30 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="cyber-body tracking-wider">
            © 2025 MICAH_PROBST.EXE | Built with passion for ethical AI | 
            <span className="text-pink-400 animate-cyber-pulse"> SYSTEM_ONLINE </span>
          </p>
        </div>
      </footer>
    </div>
  );
}