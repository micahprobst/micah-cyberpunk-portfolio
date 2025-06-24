/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'body': ['Rajdhani', 'sans-serif'],
      },
      colors: {
        'cyber-blue': '#00FFFF',
        'cyber-pink': '#FF007A',
        'cyber-purple': '#8E44AD',
        'cyber-green': '#00FF41',
        'cyber-yellow': '#FFFF00',
      },
      animation: {
        'glitch-1': 'glitch-1 0.5s infinite',
        'glitch-2': 'glitch-2 0.5s infinite',
        'cyber-pulse': 'cyber-pulse 2s infinite',
        'border-pulse': 'border-pulse 2s infinite',
        'floating': 'floating 6s ease-in-out infinite',
        'hologram-shine': 'hologram-shine 3s infinite',
      },
      keyframes: {
        'glitch-1': {
          '0%, 14%, 15%, 49%, 50%, 99%, 100%': {
            transform: 'translate(0)',
          },
          '15%, 49%': {
            transform: 'translate(-2px, 2px)',
          },
        },
        'glitch-2': {
          '0%, 20%, 21%, 62%, 63%, 99%, 100%': {
            transform: 'translate(0)',
          },
          '21%, 62%': {
            transform: 'translate(2px, -2px)',
          },
        },
        'cyber-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'border-pulse': {
          '0%, 100%': { 
            borderColor: 'rgb(34 211 238)', // cyan-400
            boxShadow: '0 0 5px rgb(34 211 238), 0 0 10px rgb(34 211 238), 0 0 20px rgb(34 211 238)'
          },
          '50%': { 
            borderColor: 'rgb(6 182 212)', // cyan-500  
            boxShadow: '0 0 10px rgb(6 182 212), 0 0 20px rgb(6 182 212), 0 0 40px rgb(6 182 212)'
          },
        },
        'floating': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'hologram-shine': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'cyber-grid': '50px 50px',
      },
      clipPath: {
        'cyber': 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
      },
    },
  },
  plugins: [],
}