'use client';

import { useState, useEffect } from 'react';

export default function About() {
  const [glitchActive, setGlitchActive] = useState(false);

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
            <div className="flex space-x-8 cyber-body">
              <a href="/" className="text-cyan-100 hover:text-cyan-400 transition-colors font-medium tracking-wider">POSTS</a>
              <a href="/#library" className="text-cyan-100 hover:text-cyan-400 transition-colors font-medium tracking-wider">LIBRARY</a>
              <a href="/about" className="text-cyan-400 font-medium tracking-wider">ABOUT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center cyber-font mb-12 neon-text text-cyan-400">
            <span className={`${glitchActive ? 'glitch' : ''}`} data-text="ABOUT_THE_ANALYST">ABOUT_THE_ANALYST</span>
          </h1>
          
          <div className="space-y-8 cyber-body text-lg leading-relaxed">
            <div className="cyber-border bg-gray-900/50 p-8 border border-cyan-400/30">
              <h2 className="text-2xl cyber-font text-purple-400 mb-6 neon-text">Why This Work Matters Now</h2>
              <p className="mb-4">
                My journey into the philosophy of social control began with a technical question: why do AI systems develop sycophantic behaviors, telling users what they want to hear rather than what they need to know? This inquiry into artificial intelligence's impact on human epistemic agency—our capacity to actively form genuine knowledge—revealed something more disturbing than algorithmic bias. I discovered that the very architecture of our information systems transforms us from thinking beings into passive consumers of processed conclusions, systematically undermining the intellectual virtues essential for democratic citizenship and authentic human flourishing.
              </p>
              <p>
                But this technological crisis pointed toward a deeper, more ancient problem. How did we become the kind of beings who could be so easily manipulated? What conditions of consciousness, spiritual development, and social organization make not just AI sycophancy, but all forms of systematic deception and control, not just possible but psychologically inevitable?
              </p>
            </div>

            <div className="cyber-border bg-gray-900/50 p-8 border border-cyan-400/30">
              <h2 className="text-2xl cyber-font text-purple-400 mb-6 neon-text">The Philosophical Architecture of Control</h2>
              <p className="mb-4">
                Having completed my philosophy degree at nineteen while simultaneously pursuing certifications in AI governance and ethics, I've experienced the tension between contemplative inquiry and utilitarian demands firsthand. The same educational systems that taught me to think critically also conditioned me into believing that the things which should be first in my life were grades, credentials, and career advancement. This personal encounter with what I now understand as the competitive programming of meritocracy—the heart of a neoliberal, imperialist society—became the foundation for a broader investigation.
              </p>
              <p className="mb-4">
                This realization led me to the Three Pillars Framework for understanding social control: the simultaneous colonization of material reality (how we survive), psychological reality (how we think and relate), and spiritual reality (what we believe about meaning, truth, and transcendence). Every system of domination operates through all three dimensions, creating subjects who experience their subjugation not as oppression but as natural necessity, personal failure, or spiritual duty.
              </p>
              <p>
                Philosophy offers us the analytical tools for excavating these deeper structures. Drawing on dialectical materialism, phenomenology, and contemplative traditions, I examine how consciousness itself becomes a site of domination—how human mental and spiritual capacity gets enslaved to serve systems that prevent authentic development and meaningful connection.
              </p>
            </div>

            <div className="cyber-border bg-gray-900/50 p-8 border border-cyan-400/30">
              <h2 className="text-2xl cyber-font text-purple-400 mb-6 neon-text">Personal Stakes in Universal Questions</h2>
              <p className="mb-4">
                This isn't abstract academic analysis. Growing up in a system designed to identify and cultivate "high achievers" while sorting the rest into categories of managed decline, I've witnessed how meritocracy operates as a sophisticated form of social control. The same competitive pressures that enabled my early academic success also created psychological conditions—chronic insecurity, utilitarian thinking, disconnection from my fellow man—that work consistently to anchor me to these systems of social control.
              </p>
              <p>
                My generation has inherited a world where the technologies that could enable unprecedented human flourishing instead accelerate ecological destruction, social fragmentation, and spiritual emptiness. We've been trained to see this as inevitable, to adapt ourselves to systems rather than questioning the systems themselves. But philosophical inquiry reveals that our current arrangements represent specific, historical, and changeable patterns of consciousness—not eternal truths about human nature.
              </p>
            </div>

            <div className="cyber-border bg-gray-900/50 p-8 border border-cyan-400/30">
              <h2 className="text-2xl cyber-font text-purple-400 mb-6 neon-text">The Work of Consciousness Liberation</h2>
              <p className="mb-4">
                The deepest form of social control operates through the colonization of imagination itself—the inability to conceive that things could be fundamentally different. My writing aims to liberate imagination by revealing how current systems arose from particular spiritual, psychological, and material conditions, and how different conditions of consciousness would naturally create different forms of social organization.
              </p>
              <p>
                This is philosophy as spiritual practice, analysis as a form of love—love for human potential and deep concern for authentic flourishing. Each piece serves what the revolutionary thinkers understood as the great work: awakening people to their own brilliant potential beyond what current systems require or allow.
              </p>
            </div>

            <div className="cyber-border bg-gray-900/50 p-8 border border-cyan-400/30">
              <h2 className="text-2xl cyber-font text-purple-400 mb-6 neon-text">An Invitation to Transformation</h2>
              <p className="mb-4">
                Having spent my early years mastering the very systems I now critique, I write from the position of someone who has benefited from current arrangements while recognizing their fundamental incompatibility with authentic human development. This isn't the detached analysis of academic philosophy, but the engaged inquiry of someone wrestling with how to live truthfully in a world structured by lies.
              </p>
              <p className="mb-4">
                My work synthesizes insights from revolutionary movements, contemplative traditions, and cutting-edge analysis of contemporary control mechanisms. But the goal isn't to provide answers so much as to awaken the capacity for authentic questioning—the kind of deep inquiry that transforms not just understanding but being itself.
              </p>
              <p>
                The future depends on our ability to develop forms of consciousness that can see through current illusions while imagining and creating alternatives that serve life rather than power. This is the most important work any of us can do: the liberation of human consciousness from systems that diminish our capacity for wisdom, compassion, and authentic creative response to the beautiful and terrible mystery of existence.
              </p>
            </div>

            {/* Contact Section */}
            <div className="cyber-border bg-gray-900/50 p-8 border border-cyan-400/30 text-center">
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
      </main>
    </div>
  );
}