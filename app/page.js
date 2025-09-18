'use client';
// Clean deployment - removed old static files

import { useState, useEffect } from 'react';
import { posts } from './data/posts';

export default function Home() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const keywords = ['ALL', 'POWER', 'CONSCIOUSNESS', 'ECONOMICS', 'SPIRITUALITY', 'PSYCHOLOGY', 'TECHNOLOGY', 'HISTORY', 'CULTURE', 'REVOLUTION', 'PHILOSOPHY', 'SOCIETY', 'POLITICS', 'IDENTITY', 'MEDIA', 'EDUCATION', 'EMPIRE'];

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
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 cyber-body">
              <button 
                onClick={() => scrollToSection('posts')} 
                className="text-cyan-100 hover:text-cyan-400 transition-colors font-medium tracking-wider relative group break-normal"
              >
                <span className="relative z-10">POSTS</span>
                <span className="absolute inset-0 bg-cyan-400/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>
              <a 
                href="/library"
                className="text-cyan-100 hover:text-cyan-400 transition-colors font-medium tracking-wider relative group break-normal"
              >
                <span className="relative z-10">LIBRARY</span>
                <span className="absolute inset-0 bg-cyan-400/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a 
                href="/about"
                className="text-cyan-100 hover:text-cyan-400 transition-colors font-medium tracking-wider relative group break-normal"
              >
                <span className="relative z-10">ABOUT</span>
                <span className="absolute inset-0 bg-cyan-400/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-cyan-400 hover:text-cyan-300 focus:text-cyan-300 transition-colors"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                  ) : (
                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-cyan-400/30">
            <div className="px-4 py-2 space-y-1">
              <button 
                onClick={() => {
                  scrollToSection('posts');
                  setMobileMenuOpen(false);
                }} 
                className="block w-full text-left px-3 py-2 text-cyan-100 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors font-medium tracking-wider cyber-body"
              >
                POSTS
              </button>
              <a 
                href="/library"
                className="block px-3 py-2 text-cyan-100 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors font-medium tracking-wider cyber-body"
                onClick={() => setMobileMenuOpen(false)}
              >
                LIBRARY
              </a>
              <a 
                href="/about"
                className="block px-3 py-2 text-cyan-100 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors font-medium tracking-wider cyber-body"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full border-4 border-cyan-400 shadow-2xl overflow-hidden relative animate-border-pulse" style={{boxShadow: '0 0 40px rgba(0, 255, 255, 0.3), 0 0 80px rgba(0, 255, 255, 0.1)'}}>
                  <img 
                    src="/images/hero-profile.jpg" 
                    alt="Micah Probst"
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
            
            <div className="lg:w-1/2 space-y-8">
              <div className="relative cyber-border bg-gray-900/50 p-6 border border-cyan-400/30">
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>
                
                <p className="text-lg cyber-body leading-relaxed text-cyan-100">
                  Hello, free-thinker. I'm Micah Probst, a <b>Gen Z philosopher</b> investigating how <b>power</b> works in all ways. After completing my philosophy degree at nineteen, I began studying AI's erosion of human thinking capacity and discovered that <b>our crisis runs deeper than technology</b>—we've become willing participants in systems that exploit our labor, control our beliefs, and suppress our spiritual potential. So, now my work examines not only what systems of social control we’re victim to, but the <b>psychological, spiritual, and historical</b> factors that make them so effective. Through multi-disciplinary analysis of revolutionary thinkers in politics, philosophy, and more, I expose the current condition of consciousness that makes liberation—in every respect—both necessary and possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section id="posts" className="py-20 bg-gray-900/30 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center cyber-font mb-16 neon-text text-green-400">
            <span className={`${glitchActive ? 'glitch' : ''}`} data-text="RECENT_ANALYSES">RECENT_ANALYSES</span>
          </h2>
          
          {/* Filter Bar */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {keywords.map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => setActiveFilter(keyword)}
                  className={`px-4 py-2 border rounded cyber-body transition-all text-sm md:text-base ${
                    activeFilter === keyword
                      ? 'bg-cyan-400/20 border-cyan-400 text-cyan-400 neon-glow'
                      : 'bg-gray-900/50 border-cyan-400/30 text-cyan-100 hover:border-cyan-400'
                  }`}
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>
          
          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts
              .filter(post => activeFilter === 'ALL' || post.keywords.includes(activeFilter))
              .map((post) => (
                <a 
                  key={post.id}
                  href={`/posts/${post.slug}`}
                  className="group cyber-border bg-gray-900/50 p-6 border border-cyan-400/30 hover:border-cyan-400 hover:neon-glow transition-all duration-300 block"
                >
                  <div className="space-y-4">
                    {/* Keywords */}
                    <div className="flex flex-wrap gap-1">
                      {post.keywords.map((keyword) => (
                        <span key={keyword} className="bg-green-400/20 border border-green-400/30 px-2 py-1 rounded text-green-400 text-xs cyber-body">
                          {keyword}
                        </span>
                      ))}
                    </div>
                    
                    {/* Date and Read Time */}
                    <div className="text-cyan-400 cyber-body text-sm">
                      {post.date} • {post.readTime}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold cyber-body text-cyan-100 group-hover:text-cyan-400 transition-colors leading-tight break-words">
                      {post.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <h4 className="text-purple-400 cyber-body italic leading-relaxed break-words">
                      {post.subtitle}
                    </h4>
                    
                    {/* Excerpt */}
                    <p className="text-cyan-100 cyber-body leading-relaxed text-sm">
                      {post.excerpt}
                    </p>
                    
                    {/* Read More */}
                    <div className="text-cyan-400 cyber-body font-semibold group-hover:text-cyan-300 transition-colors">
                      READ_ANALYSIS →
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>





      {/* Footer */}
      <footer className="bg-black text-cyan-400 py-12 border-t border-cyan-400/30 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
            <a 
              href="mailto:micah.x.probst@gmail.com" 
              className="group cyber-border bg-gray-900/50 p-4 border border-cyan-400/30 hover:border-cyan-400 hover:neon-glow transition-all duration-300 text-center"
            >
              <h3 className="text-base font-bold mb-1 cyber-font text-cyan-100 group-hover:text-cyan-400 transition-colors">EMAIL_INTERFACE</h3>
              <p className="text-cyan-400 cyber-body text-sm">micah.x.probst@gmail.com</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/micah-probst-b80009172/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group cyber-border bg-gray-900/50 p-4 border border-cyan-400/30 hover:border-cyan-400 hover:neon-glow transition-all duration-300 text-center"
            >
              <h3 className="text-base font-bold mb-1 cyber-font text-cyan-100 group-hover:text-cyan-400 transition-colors">LINKEDIN_CONNECTION</h3>
              <p className="text-blue-400 cyber-body text-sm">Professional Profile</p>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="cyber-body tracking-wider">
              © 2025 MICAH_PROBST.EXE | Built with passion for humanity | 
              <span className="text-pink-400 animate-cyber-pulse"> SYSTEM_ONLINE </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}