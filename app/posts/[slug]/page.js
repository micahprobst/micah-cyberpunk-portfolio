import { posts } from '../../data/posts';
import { notFound } from 'next/navigation';

export default function PostPage({ params }) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

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
              <a href="/library" className="text-cyan-100 hover:text-cyan-400 transition-colors font-medium tracking-wider">LIBRARY</a>
              <a href="/about" className="text-cyan-100 hover:text-cyan-400 transition-colors font-medium tracking-wider">ABOUT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Post Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.keywords.map((keyword) => (
                <span key={keyword} className="bg-green-400/20 border border-green-400/30 px-3 py-1 rounded text-green-400 text-sm cyber-body">
                  {keyword}
                </span>
              ))}
            </div>
            <div className="text-cyan-400 cyber-body mb-2">
              {post.date} • {post.readTime}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold cyber-font mb-4 neon-text text-cyan-400 break-words">
              <span data-text={post.title.toUpperCase()}>
                {post.title.toUpperCase()}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl cyber-body text-purple-400 italic mb-6 break-words">
              {post.subtitle}
            </h2>
          </div>

          {/* Post Content */}
          <div className="cyber-border bg-gray-900/50 p-8 border border-cyan-400/30">
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="cyber-body text-lg leading-relaxed text-cyan-100 whitespace-pre-line">
                {post.content}
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <a 
              href="/"
              className="inline-flex items-center cyber-border bg-gray-900/50 px-6 py-3 border border-cyan-400/30 hover:border-cyan-400 hover:neon-glow transition-all duration-300 text-cyan-400 hover:text-cyan-300 cyber-body"
            >
              ← RETURN_TO_ANALYSES
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}