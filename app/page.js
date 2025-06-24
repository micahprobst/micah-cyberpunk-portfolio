'use client';
// Clean deployment - removed old static files

import { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, Calendar, ExternalLink, Zap } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Random glitch effects
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000 + Math.random() * 5000);

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
      description: "Graduated Front Range Community College with a specialization in business, 4.61 GPA, and 73 transferable college credits.",
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
      skills: ["AI for Business", "Google Data Analytics", "Google Project Management", "Google Cloud Data Analytics", "Security, Compliance, and Governance for AI Solutions"],
      skillsLabel: "Certifications in progress",
      color: "from-pink-400 to-purple-500"
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
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
              {['HOME', 'WHO_AM_I', 'EDUCATION', 'CURRENT_WORK', 'JOURNEY', 'CONNECT'].map((item, index) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(['hero', 'about', 'education', 'currently', 'journey', 'contact'][index])} 
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
                  <span className="text-pink-400 mx-2">|</span>
                  <span className="text-purple-400 neon-text break-all">CRITICAL_THINKER</span>
                  <span className="text-pink-400 mx-2">|</span>
                  <span className="text-cyan-400 neon-text break-all">PEOPLE_PERSON</span>
                </div>
              </div>
              
              <div className="relative cyber-border bg-gray-900/50 p-6 border border-cyan-400/30">
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>
                
                <p className="text-lg cyber-body leading-relaxed text-cyan-100">
                  I'm <strong>Micah Probst</strong>, a recent graduate of the University of Colorado Boulder with a <strong>Bachelor's Degree in Philosophy</strong> and <strong>multiple business certifications </strong> 
                  acquired during my associates degree. I've done all this at <strong>19</strong>, and I'm not stopping. I'm currently working toward
                  certifications in <strong>project management, data analytics, and AI governance.</strong> My goal is to apply my analytical and organizational
                  skills to help create a more efficient and responsibly AI-powered future of work.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full border-4 border-cyan-400 shadow-2xl overflow-hidden relative neon-glow animate-cyber-pulse">
                  <img 
                    src="/images/hero-profile.jpg" 
                    alt="Micah Probst - Portfolio Photo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-600/10 to-pink-400/10"></div>
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
            EARLY_ADOPTER <span className="text-pink-400">|</span> ETHICALLY_DEVOTED <span className="text-pink-400">|</span> COMPLEXITY_INTERPRETER
          </h3>
          
          {/* Video Player */}
          <div className="max-w-4xl mx-auto mb-12 relative">
            <div className="cyber-border bg-gradient-to-b from-blue-900/30 via-green-900/30 to-green-600/30 rounded-2xl overflow-hidden relative shadow-lg border border-cyan-400/30">
              {/* Holographic Effect */}
              <div className="absolute inset-0 hologram pointer-events-none z-10"></div>
              
              <video 
                className="w-full aspect-video object-contain"
                controls
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23001122' width='400' height='300'/%3E%3Ccircle cx='200' cy='150' r='40' fill='%2300ffff' opacity='0.8'/%3E%3Cpolygon points='190,135 190,165 215,150' fill='%23000'/%3E%3C/svg%3E"
              >
                <source src="/videos/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Cyberpunk overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-purple-600/5 to-pink-400/5 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-black relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center cyber-font mb-16 neon-text text-purple-400">
            <span className={`${glitchActive ? 'glitch' : ''}`} data-text="EDUCATION.SYS">EDUCATION.SYS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              },
              {
                title: "Specialization in Business",
                image: "/certificates/business-specialization.JPG",
                alt: "Business Specialization Certificate"
              },
              {
                title: "Small Business Ownership",
                image: "/certificates/small-business-ownership.JPG",
                alt: "Small Business Ownership Certificate"
              },
              {
                title: "Small Business Operations",
                image: "/certificates/small-business-operations.JPG",
                alt: "Small Business Operations Certificate"
              },
              {
                title: "Foundations of Business",
                image: "/certificates/foundations-business.JPG",
                alt: "Foundations of Business Certificate"
              }
            ].map((cert, index) => (
              <div key={index} className="group relative">
                <div className="cyber-border bg-gray-900/50 p-6 border border-cyan-400/30 hover:border-cyan-400 transition-all hover:neon-glow">
                  <div className="w-full h-64 rounded-xl overflow-hidden mb-4 relative border-2 border-cyan-400/30">
                    <img 
                      src={cert.image}
                      alt={cert.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-600/5 to-pink-400/10"></div>
                  </div>
                  <h3 className="text-lg font-bold text-center cyber-body text-cyan-100 group-hover:text-cyan-400 transition-colors break-all">
                    {cert.title.toUpperCase().replace(/'/g, '').replace(/ /g, '_')}
                  </h3>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400 group-hover:border-pink-400 transition-colors"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400 group-hover:border-pink-400 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400 group-hover:border-pink-400 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400 group-hover:border-pink-400 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Working On Section */}
      <section id="currently" className="py-20 bg-gray-900/30 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center cyber-font mb-16 neon-text text-pink-400">
            <span className={`${glitchActive ? 'glitch' : ''}`} data-text="CURRENT_PROCESSES...">IN_PROGRESS...</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Google Certifications */}
            <div className="cyber-border bg-black/50 p-4 md:p-6 lg:p-8 text-center border border-cyan-400/30 hover:border-cyan-400 hover:neon-glow transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-red-500/5 to-yellow-500/5"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl lg:text-6xl mb-6 cyber-font">
                  <span className="text-blue-400 neon-text">G</span>
                  <span className="text-red-400 neon-text">O</span>
                  <span className="text-yellow-400 neon-text">O</span>
                  <span className="text-blue-400 neon-text">G</span>
                  <span className="text-green-400 neon-text">L</span>
                  <span className="text-red-400 neon-text">E</span>
                </div>
                <div className="space-y-3 cyber-body">
                  <p className="font-bold text-cyan-100 group-hover:text-cyan-400 transition-colors break-all text-sm md:text-base">PROFESSIONAL_PROJECT_MANAGEMENT</p>
                  <p className="font-bold text-cyan-100 group-hover:text-cyan-400 transition-colors break-all text-sm md:text-base">PROFESSIONAL_DATA_ANALYTICS</p>
                  <p className="font-bold text-cyan-100 group-hover:text-cyan-400 transition-colors break-all text-sm md:text-base">PROFESSIONAL_CLOUD_DATA_ANALYTICS</p>
                </div>
              </div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded animate-cyber-pulse"></div>
            </div>

            {/* AWS Certification */}
            <div className="cyber-border bg-black/50 p-4 md:p-6 lg:p-8 text-center border border-cyan-400/30 hover:border-cyan-400 hover:neon-glow transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5"></div>
              <div className="relative z-10">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold cyber-font mb-6 text-orange-400 neon-text">
                  AWS
                </div>
                <div className="bg-orange-400 h-1 w-16 mx-auto mb-6 animate-cyber-pulse"></div>
                <p className="font-bold text-cyan-100 group-hover:text-cyan-400 transition-colors cyber-body break-all text-sm md:text-base">
                  SECURITY_COMPLIANCE_AND_GOVERNANCE_FOR_AI_SOLUTIONS
                </p>
              </div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-orange-400 rounded animate-cyber-pulse"></div>
            </div>

            {/* Penn Certification */}
            <div className="cyber-border bg-black/50 p-4 md:p-6 lg:p-8 text-center border border-cyan-400/30 hover:border-cyan-400 hover:neon-glow transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-800/5 to-red-800/5"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-blue-800 rounded flex items-center justify-center mr-3 neon-glow">
                    <span className="text-white font-bold text-xl cyber-font">U</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-400 cyber-font neon-text">PENN</div>
                </div>
                <div className="text-xs text-cyan-400 mb-2 cyber-body tracking-wider break-all">UNIVERSITY_OF_PENNSYLVANIA</div>
                <p className="font-bold text-cyan-100 group-hover:text-cyan-400 transition-colors cyber-body break-all text-sm md:text-base">
                  AI_FOR_BUSINESS_SPECIALIZATION
                </p>
              </div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded animate-cyber-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey & Timeline Section */}
      <section id="journey" className="py-20 bg-black relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold cyber-font mb-8 neon-text text-cyan-400">
            <span className={`${glitchActive ? 'glitch' : ''}`} data-text="MY_JOURNEY.LOG">MY_JOURNEY.LOG</span>
          </h2>
          <h3 className="text-2xl cyber-body mb-4 text-purple-400 break-all">LEARNING_FROM_EVERY_OPPORTUNITY</h3>
          <p className="text-xl cyber-body leading-relaxed max-w-3xl mx-auto text-cyan-100">
            From (almost) testing out of high school at 15 to graduating with a philosophy degree at 19, here's how I've built a foundation of diverse experiences and continuous learning
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-cyan-400 to-pink-400 neon-glow"></div>

            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex items-center -mb-8">
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
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 cyber-font neon-text text-pink-400">
            <span className={`${glitchActive ? 'glitch' : ''}`} data-text="ESTABLISH_CONNECTION">ESTABLISH_CONNECTION</span>
          </h2>
          <p className="text-xl cyber-body mb-12 max-w-2xl mx-auto text-cyan-100">
            Ready to bring ethical AI implementation and strategic project management to your organization. 
            Let's discuss how I can contribute to your team's success.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:micah.x.probst@gmail.com" 
              className="group cyber-border bg-black/50 backdrop-blur-sm p-4 md:p-6 lg:p-8 border border-cyan-400/30 hover:border-cyan-400 hover:neon-glow transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5"></div>
              <Mail size={48} className="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform animate-cyber-pulse relative z-10" />
              <h3 className="text-lg font-bold mb-2 cyber-font text-cyan-100 group-hover:text-cyan-400 transition-colors break-all text-center">EMAIL_INTERFACE</h3>
              <p className="text-cyan-400 cyber-body text-xs tracking-wider break-all text-center">micah.x.probst@gmail.com</p>
              <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded animate-cyber-pulse"></div>
            </a>
            
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
            
            <div className="group cyber-border bg-black/50 backdrop-blur-sm p-4 md:p-6 lg:p-8 border border-cyan-400/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-400/5"></div>
              <Zap size={48} className="mx-auto mb-4 text-green-400 animate-cyber-pulse relative z-10" />
              <h3 className="text-lg font-bold mb-2 cyber-font text-cyan-100 break-all text-center">LOCATION_DATA</h3>
              <p className="text-green-400 cyber-body text-xs tracking-wider text-center">Boulder, Colorado</p>
              <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded animate-cyber-pulse"></div>
            </div>
          </div>

          <div className="cyber-border bg-black/50 backdrop-blur-sm p-8 border border-cyan-400/30 relative overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-5"></div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 cyber-font text-purple-400 neon-text relative z-10 break-all">READY_TO_MAKE_IMPACT</h3>
            <p className="text-cyan-100 mb-6 cyber-body relative z-10">
              Seeking project management opportunities in the Denver/Boulder/Fort Collins area where I can apply my unique combination 
              of philosophical thinking, business acumen, and AI ethics expertise.
            </p>
            <a 
              href="mailto:micah.x.probst@gmail.com" 
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 text-black px-8 py-4 rounded font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cyber-font neon-glow relative z-10"
            >
              INITIATE_CONVERSATION
              <ExternalLink size={20} className="ml-2" />
            </a>
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-pink-400"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-pink-400"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-pink-400"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-pink-400"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-cyan-400 py-8 border-t border-cyan-400/30 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="cyber-body tracking-wider">
            © 2025 MICAH_PROBST.EXE | Built with passion for ethical AI and strategic project management | 
            <span className="text-pink-400 animate-cyber-pulse"> SYSTEM_ONLINE </span>
          </p>
        </div>
      </footer>
    </div>
  );
}