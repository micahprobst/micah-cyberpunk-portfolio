'use client';

import { useState, useEffect } from 'react';

export default function Library() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [activeLibraryFilter, setActiveLibraryFilter] = useState('ALL');

  const bookCategories = ['ALL', 'FOUNDATIONAL_REVOLUTIONARY_ANALYSIS', 'DIALECTICAL_MATERIALISM', 'CONSCIOUSNESS_CONTROL', 'CONTEMPORARY_ANALYSIS', 'SPIRITUAL_DIMENSIONS', 'INTERSECTIONAL_ANALYSIS', 'CIVILIZATIONAL_CYCLES', 'ESOTERIC_HISTORY', 'PSYCHOLOGICAL_OPERATIONS', 'REVOLUTIONARY_PRAXIS'];

  const books = [
    // Foundational Revolutionary Analysis
    {
      title: "Their Morals and Ours",
      author: "Leon Trotsky",
      category: "FOUNDATIONAL_REVOLUTIONARY_ANALYSIS",
      description: "Establishes the ethical foundation for revolutionary action against systems of oppression."
    },
    {
      title: "The Revolution Betrayed",
      author: "Leon Trotsky",
      category: "FOUNDATIONAL_REVOLUTIONARY_ANALYSIS",
      description: "Analyzes how revolutionary movements can be co-opted by bureaucratic power structures."
    },
    {
      title: "State and Revolution",
      author: "Vladimir Lenin",
      category: "FOUNDATIONAL_REVOLUTIONARY_ANALYSIS",
      description: "Explains how state power operates and must be transformed rather than captured."
    },
    {
      title: "The Wretched of the Earth",
      author: "Frantz Fanon",
      category: "FOUNDATIONAL_REVOLUTIONARY_ANALYSIS",
      description: "Essential analysis of decolonization and the psychology of oppression and liberation."
    },
    {
      title: "Prison Notebooks",
      author: "Antonio Gramsci",
      category: "FOUNDATIONAL_REVOLUTIONARY_ANALYSIS",
      description: "Introduces the concept of cultural hegemony and how power operates through consent."
    },
    {
      title: "Pedagogy of the Oppressed",
      author: "Paulo Freire",
      category: "FOUNDATIONAL_REVOLUTIONARY_ANALYSIS",
      description: "Shows how education either functions as domination or as the practice of freedom."
    },
    // Dialectical & Historical Materialism
    {
      title: "The German Ideology",
      author: "Marx & Engels",
      category: "DIALECTICAL_MATERIALISM",
      description: "Foundational text explaining how material conditions shape consciousness and social relations."
    },
    {
      title: "Dialectic of Enlightenment", 
      author: "Adorno & Horkheimer",
      category: "DIALECTICAL_MATERIALISM",
      description: "Reveals how reason itself can become a tool of domination and social control."
    },
    {
      title: "Phenomenology of Spirit",
      author: "G.W.F. Hegel",
      category: "DIALECTICAL_MATERIALISM",
      description: "Essential for understanding dialectical thinking and the development of consciousness."
    },
    {
      title: "Capital, Volume 1", 
      author: "Karl Marx",
      category: "DIALECTICAL_MATERIALISM", 
      description: "The definitive analysis of how capitalism structures social relations and exploitation."
    },
    {
      title: "The Eighteenth Brumaire of Louis Bonaparte",
      author: "Karl Marx",
      category: "DIALECTICAL_MATERIALISM",
      description: "Brilliant analysis of how political power operates during periods of crisis and transformation."
    },
    // Consciousness & Psychological Control
    {
      title: "One Dimensional Man",
      author: "Herbert Marcuse",
      category: "CONSCIOUSNESS_CONTROL",
      description: "Shows how advanced industrial society creates false needs and eliminates critical thinking."
    },
    {
      title: "Psychopolitics: Neoliberalism and New Technologies of Power",
      author: "Byung-Chul Han", 
      category: "CONSCIOUSNESS_CONTROL",
      description: "Analyzes how neoliberalism colonizes the psyche and transforms subjects into willing participants."
    },
    {
      title: "The Society of the Spectacle",
      author: "Guy Debord",
      category: "CONSCIOUSNESS_CONTROL",
      description: "Explains how media and spectacle replace authentic social relations with passive consumption."
    },
    {
      title: "Discipline and Punish",
      author: "Michel Foucault",
      category: "CONSCIOUSNESS_CONTROL", 
      description: "Essential for understanding how modern surveillance and discipline shape behavior."
    },
    {
      title: "Manufacturing Consent",
      author: "Noam Chomsky & Edward Herman",
      category: "CONSCIOUSNESS_CONTROL",
      description: "Exposes how mass media serves as propaganda system for elite interests."
    },
    // Contemporary Systemic Analysis
    {
      title: "Capitalist Realism: Is There No Alternative?",
      author: "Mark Fisher",
      category: "CONTEMPORARY_ANALYSIS",
      description: "Analyzes how capitalism has colonized our ability to imagine alternative futures."
    },
    {
      title: "Techno-Feudalism: What Killed Capitalism",
      author: "Yanis Varoufakis",
      category: "CONTEMPORARY_ANALYSIS", 
      description: "Argues that digital platforms have created a new form of feudal power structure."
    },
    {
      title: "The Divide: Global Inequality from Conquest to Free Markets",
      author: "Jason Hickel",
      category: "CONTEMPORARY_ANALYSIS",
      description: "Exposes how global inequality is maintained through systematic extraction and exploitation."
    },
    {
      title: "Power and Progress: Our Thousand-Year Struggle Over Technology and Prosperity", 
      author: "Daron Acemoglu & Simon Johnson",
      category: "CONTEMPORARY_ANALYSIS",
      description: "Examines how technological development serves existing power structures rather than human flourishing."
    },
    {
      title: "The Age of Surveillance Capitalism",
      author: "Shoshana Zuboff",
      category: "CONTEMPORARY_ANALYSIS",
      description: "Definitive analysis of how tech companies harvest human behavior for unprecedented forms of power."
    },
    // Spiritual & Metaphysical Dimensions
    {
      title: "Beyond Good and Evil",
      author: "Friedrich Nietzsche",
      category: "SPIRITUAL_DIMENSIONS",
      description: "Challenges conventional morality and explores the spiritual dimensions of power and creativity."
    },
    {
      title: "The Genealogy of Morals",
      author: "Friedrich Nietzsche", 
      category: "SPIRITUAL_DIMENSIONS",
      description: "Reveals how moral systems function as tools of social control and psychological domination."
    },
    {
      title: "Totality and Infinity",
      author: "Emmanuel Levinas",
      category: "SPIRITUAL_DIMENSIONS",
      description: "Explores the ethical relationship to the other as foundation for authentic human development."
    },
    {
      title: "Notes from Underground",
      author: "Fyodor Dostoevsky",
      category: "SPIRITUAL_DIMENSIONS", 
      description: "Profound exploration of consciousness, freedom, and rebellion against systematic rationalization."
    },
    {
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      category: "SPIRITUAL_DIMENSIONS",
      description: "Epic examination of faith, doubt, and moral responsibility in the face of suffering."
    },
    {
      title: "Paradise Lost",
      author: "John Milton",
      category: "SPIRITUAL_DIMENSIONS",
      description: "Classic exploration of rebellion, authority, and the spiritual dimensions of liberation."
    },
    // Intersectional & Love-Based Analysis
    {
      title: "All About Love",
      author: "Bell Hooks",
      category: "INTERSECTIONAL_ANALYSIS",
      description: "Presents love as political resistance and the foundation of authentic liberation movements."
    },
    {
      title: "Teaching to Transgress",
      author: "Bell Hooks", 
      category: "INTERSECTIONAL_ANALYSIS",
      description: "Shows how education can be transformed from domination into liberatory practice."
    },
    {
      title: "Sister Outsider",
      author: "Audre Lorde",
      category: "INTERSECTIONAL_ANALYSIS",
      description: "Powerful analysis of how multiple forms of oppression intersect and can be resisted."
    },
    {
      title: "The Fire Next Time",
      author: "James Baldwin",
      category: "INTERSECTIONAL_ANALYSIS", 
      description: "Brilliant examination of race, spirituality, and the conditions for authentic social transformation."
    },
    // Civilizational & Historical Cycles
    {
      title: "The Decline of the West",
      author: "Oswald Spengler",
      category: "CIVILIZATIONAL_CYCLES",
      description: "Analyzes the cyclical nature of civilizations and the spiritual crises that precipitate decline."
    },
    {
      title: "A Study of History",
      author: "Arnold Toynbee",
      category: "CIVILIZATIONAL_CYCLES", 
      description: "Comprehensive analysis of how civilizations rise, develop, and respond to existential challenges."
    },
    {
      title: "The Collapse of Complex Societies",
      author: "Joseph Tainter",
      category: "CIVILIZATIONAL_CYCLES",
      description: "Explains how societies become too complex to sustain and the dynamics of systemic collapse."
    },
    {
      title: "Blackshirts and Reds",
      author: "Michael Parenti",
      category: "CIVILIZATIONAL_CYCLES",
      description: "Exposes how fascism serves capital and the real historical dynamics behind political movements."
    },
    // Esoteric & Hidden History
    {
      title: "The Gnostic Gospels",
      author: "Elaine Pagels",
      category: "ESOTERIC_HISTORY",
      description: "Reveals suppressed spiritual traditions and their challenge to institutional religious authority."
    },
    {
      title: "The Book of Enoch",
      author: "(various translations)",
      category: "ESOTERIC_HISTORY", 
      description: "Ancient text exploring themes of cosmic rebellion, surveillance, and hidden knowledge."
    },
    {
      title: "The Gospel of Thomas",
      author: "(various translations)",
      category: "ESOTERIC_HISTORY",
      description: "Presents an alternative spiritual path focused on direct knowledge rather than institutional mediation."
    },
    {
      title: "Bhagavad Gita",
      author: "Stephen Mitchell (my favorite translation)",
      category: "ESOTERIC_HISTORY",
      description: "Classic exploration of duty, action, and spiritual development in the face of systemic conflict."
    },
    {
      title: "Tragedy and Hope",
      author: "Carroll Quigley", 
      category: "ESOTERIC_HISTORY",
      description: "Insider analysis of how elite networks shape historical development behind the scenes."
    },
    {
      title: "The Secret History of the World",
      author: "Jonathan Black",
      category: "ESOTERIC_HISTORY",
      description: "Alternative historical narrative examining suppressed spiritual and occult influences on civilization."
    },
    // Psychological Operations & Mind Control
    {
      title: "The Shock Doctrine",
      author: "Naomi Klein",
      category: "PSYCHOLOGICAL_OPERATIONS",
      description: "Exposes how psychological trauma is used to implement radical economic and social restructuring."
    },
    {
      title: "The Culture of Narcissism",
      author: "Christopher Lasch", 
      category: "PSYCHOLOGICAL_OPERATIONS",
      description: "Analyzes how consumer culture creates psychological conditions that serve authoritarian control."
    },
    {
      title: "Propaganda",
      author: "Edward Bernays",
      category: "PSYCHOLOGICAL_OPERATIONS",
      description: "Foundational text on how public opinion is manufactured and manipulated for elite interests."
    },
    {
      title: "The Century of the Self",
      author: "Adam Curtis (documentary series)",
      category: "PSYCHOLOGICAL_OPERATIONS",
      description: "Brilliant analysis of how psychology and public relations have shaped modern consumer society."
    },
    // Revolutionary Consciousness & Praxis
    {
      title: "The Autobiography of Malcolm X",
      author: "Malcolm X",
      category: "REVOLUTIONARY_PRAXIS",
      description: "Powerful account of consciousness transformation and the development of revolutionary understanding."
    },
    {
      title: "Che Guevara: A Revolutionary Life",
      author: "Jon Lee Anderson", 
      category: "REVOLUTIONARY_PRAXIS",
      description: "Comprehensive biography examining the development of revolutionary consciousness and practice."
    },
    {
      title: "Thomas Sankara Speaks",
      author: "Thomas Sankara",
      category: "REVOLUTIONARY_PRAXIS",
      description: "Speeches and writings from a leader who successfully implemented revolutionary transformation."
    },
    {
      title: "To Die for the People",
      author: "Huey P. Newton",
      category: "REVOLUTIONARY_PRAXIS", 
      description: "Political theory and practice from the Black Panther Party's revolutionary organizing experience."
    }
  ];

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }
    }, 5000 + Math.random() * 10000);

    return () => clearInterval(glitchInterval);
  }, []);

  const filteredBooks = activeLibraryFilter === 'ALL'
    ? books
    : books.filter(book => book.category === activeLibraryFilter);

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
              <a href="/library" className="text-cyan-400 font-medium tracking-wider">LIBRARY</a>
              <a href="/about" className="text-cyan-100 hover:text-cyan-400 transition-colors font-medium tracking-wider">ABOUT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center cyber-font mb-12 neon-text text-yellow-400">
            <span className={`${glitchActive ? 'glitch' : ''}`} data-text="RECOMMENDED_READING">RECOMMENDED_READING</span>
          </h1>

          {/* Category Filter Bar */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {bookCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveLibraryFilter(category)}
                  className={`px-3 py-2 border rounded cyber-body transition-all text-xs md:text-sm ${
                    activeLibraryFilter === category
                      ? 'bg-yellow-400/20 border-yellow-400 text-yellow-400 neon-glow'
                      : 'bg-gray-900/50 border-yellow-400/30 text-cyan-100 hover:border-yellow-400'
                  }`}
                >
                  {category.replace(/_/g, ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Books Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book, index) => (
              <div key={index} className="cyber-border bg-gray-900/50 p-6 border border-yellow-400/30 hover:border-yellow-400 hover:neon-glow transition-all duration-300">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold cyber-body text-cyan-100 mb-2 leading-tight">{book.title}</h3>
                    <p className="text-yellow-400 cyber-body font-semibold">{book.author}</p>
                  </div>
                  <div className="inline-block bg-yellow-400/20 border border-yellow-400/30 px-2 py-1 rounded">
                    <span className="text-yellow-400 text-xs cyber-body">{book.category.replace(/_/g, ' ')}</span>
                  </div>
                  <p className="text-cyan-100 cyber-body leading-relaxed text-sm">{book.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}