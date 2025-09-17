'use client';

import { useState, useEffect } from 'react';

export default function About() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }
    }, 5000 + Math.random() * 10000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-cyan-100 overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="cyber-grid h-full w-full opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute inset-0 scan-lines pointer-events-none"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-cyan-400/30">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold cyber-font neon-text text-cyan-400">
              <a href="/">MICAH.EXE</a>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 cyber-body">
              <a href="/" className="text-cyan-100 hover:text-cyan-400 transition-colors font-medium tracking-wider">POSTS</a>
              <a href="/library" className="text-cyan-100 hover:text-cyan-400 transition-colors font-medium tracking-wider">LIBRARY</a>
              <a href="/about" className="text-cyan-400 font-medium tracking-wider">ABOUT</a>
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
              <a 
                href="/"
                className="block px-3 py-2 text-cyan-100 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors font-medium tracking-wider cyber-body"
                onClick={() => setMobileMenuOpen(false)}
              >
                POSTS
              </a>
              <a 
                href="/library"
                className="block px-3 py-2 text-cyan-100 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors font-medium tracking-wider cyber-body"
                onClick={() => setMobileMenuOpen(false)}
              >
                LIBRARY
              </a>
              <a 
                href="/about"
                className="block px-3 py-2 text-cyan-400 font-medium tracking-wider cyber-body"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center cyber-font mb-12 neon-text text-cyan-400">
            <span className={`${glitchActive ? 'glitch' : ''}`} data-text="ABOUT THE ANALYST">ABOUT THE ANALYST</span>
          </h1>

          {/* Hero Image Section */}
          <div className="flex justify-center mb-12">
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
          
          <div className="cyber-border bg-gray-900/50 p-8 border border-cyan-400/30">
            <div className="space-y-6 cyber-body text-lg leading-relaxed">
              <h2 className="text-2xl cyber-font text-purple-400 mb-6 neon-text">Why This Work Matters Now</h2>
              <p className="mb-4">
                My journey into the philosophy of social control began with a technical question: why do AI systems develop sycophantic behaviors, telling users what they want to hear rather than what they need to know? This inquiry into artificial intelligence's impact on human epistemic agency—our capacity to actively form genuine knowledge—revealed something more disturbing than algorithmic bias. I discovered that <b>the very architecture of our information systems transforms us from thinking beings into passive consumers of processed conclusions</b>, systematically undermining the intellectual virtues essential for democratic citizenship and authentic human flourishing.
              </p>
              <p className="mb-6">
                But this technological crisis pointed toward a deeper, more ancient problem. How did we become the kind of beings who could be so easily manipulated? What conditions of consciousness, spiritual development, and social organization make not just AI sycophancy, but all forms of systematic deception and control, not just possible but psychologically inevitable?
              </p>

              <h2 className="text-2xl cyber-font text-purple-400 mb-6 neon-text">The Philosophical Architecture of Control</h2>
              <p className="mb-4">
                Having completed my philosophy degree at nineteen (from the University of Colorado Boulder) while simultaneously pursuing certifications in AI governance and ethics, I've experienced the tension between contemplative inquiry and utilitarian demands firsthand. The same educational systems that taught me to think critically also conditioned me into believing that the things which should be first in my life were grades, credentials, and career advancement. This personal encounter with what I now understand as <b>the competitive programming of meritocracy</b>—the heart of a neoliberal, imperialist society—became the foundation for a broader investigation.
              </p>
              <p className="mb-4">
                This realization led me to the <b>Three Pillars Framework</b> for understanding social control: the simultaneous colonization of material reality (how we survive), psychological reality (how we think and relate), and spiritual reality (what we believe about meaning, truth, and transcendence). Every system of domination operates through all three dimensions, creating subjects who experience their subjugation not as oppression but as natural necessity, personal failure, or spiritual duty.
              </p>
              <p className="mb-6">
                Philosophy offers us the analytical tools for excavating these deeper structures. Drawing on dialectical materialism, phenomenology, and contemplative traditions, I examine how consciousness itself becomes a site of domination—how human mental and spiritual capacity gets enslaved to serve systems that prevent authentic development and meaningful connection.
              </p>

              <h2 className="text-2xl cyber-font text-purple-400 mb-6 neon-text">Personal Stakes in Universal Questions</h2>
              <p className="mb-4">
                This isn't abstract academic analysis. Growing up in a system designed to identify and cultivate "high achievers" while sorting the rest into categories of managed decline, I've witnessed how meritocracy operates as a sophisticated form of social control. <b>The same competitive pressures that enabled my early academic success also created psychological conditions</b>—chronic insecurity, utilitarian thinking, disconnection from my fellow man—that work consistently to anchor me to these systems of social control.
              </p>
              <p className="mb-6">
                My generation has inherited a world where the technologies that could enable unprecedented human flourishing instead accelerate ecological destruction, social fragmentation, and spiritual emptiness. <b>We've been trained to see this as inevitable, to adapt ourselves to systems rather than questioning the systems themselves.</b> But philosophical inquiry reveals that our current arrangements represent specific, historical, and changeable patterns of consciousness—not eternal truths about human nature.
              </p>

              <h2 className="text-2xl cyber-font text-purple-400 mb-6 neon-text">The Work of Consciousness Liberation</h2>
              <p className="mb-4">
                The deepest form of social control operates through the colonization of imagination itself—the inability to conceive that things could be fundamentally different. My writing aims to liberate imagination by revealing how current systems arose from particular spiritual, psychological, and material conditions, and how different conditions of consciousness would naturally create different forms of social organization.
              </p>
              <p className="mb-6">
                <b>This is philosophy as spiritual practice</b>, analysis as a form of love—love for human potential and deep concern for authentic flourishing. Each piece serves what the revolutionary thinkers understood as the great work: awakening people to their own brilliant potential beyond what current systems require or allow.
              </p>

              <h2 className="text-2xl cyber-font text-purple-400 mb-6 neon-text">An Invitation to Transformation</h2>
              <p className="mb-4">
                Having spent my early years both exploiting the very systems I now critique and being their victim due to my status as a racial minority, I write from the position of someone who has seen many faces of our current arrangements while recognizing their fundamental incompatibility with authentic human development. <b>This isn't the detached analysis of academic philosophy</b>, but the engaged inquiry of someone wrestling with how to live truthfully in a world structured by lies.
              </p>
              <p className="mb-4">
                My work synthesizes insights from revolutionary movements, contemplative traditions, and cutting-edge analysis of contemporary control mechanisms. But the goal isn't to provide answers so much as to awaken the capacity for authentic questioning—the kind of deep inquiry that transforms not just understanding but being itself.
              </p>
              <p className="mb-8">
                The future depends on our ability to develop forms of consciousness that can see through current illusions while imagining and creating alternatives that serve life rather than power. <b>This is the most important work any of us can do:</b> the liberation of human consciousness from systems that diminish our capacity for wisdom, compassion, and authentic creative response to the beautiful and terrible mystery of existence.
              </p>

              {/* Contact Section */}
              <div className="text-center border-t border-cyan-400/30 pt-8">
                <h2 className="text-2xl cyber-font text-cyan-400 mb-6 neon-text">CONNECT_FOR_DISCUSSION</h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <a 
                    href="mailto:micah.x.probst@gmail.com"
                    className="cyber-body text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    micah.x.probst@gmail.com
                  </a>
                  <span className="text-cyan-400 hidden md:inline">|</span>
                  <a 
                    href="https://www.linkedin.com/in/micah-probst-b80009172/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-body text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <p className="text-cyan-100 mt-4 cyber-body">
                  Interested in discussing power, consciousness, and liberation? Let's connect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}