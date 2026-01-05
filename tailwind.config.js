/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#1E293B', // Navy blue
          charcoal: '#334155', // Charcoal gray
          'navy-dark': '#0F172A',
        },
        accent: {
          gold: '#C9A961', // Muted brass/gold
          'gold-light': '#D4A574',
          'gold-dark': '#B8860B',
          beige: '#F5E6D3', // Warm beige
          ivory: '#F8F6F2', // Off-white/ivory
        },
        neutral: {
          50: '#F8F6F2', // Off-white/ivory
          100: '#F5F5F0', // Soft light gray
          200: '#E8E6E1',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#334155', // Charcoal gray
          800: '#1E293B', // Navy
          900: '#0F172A', // Dark navy
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #334155 0%, #1E293B 100%)',
        'gradient-hero': 'linear-gradient(135deg, #F8F6F2 0%, #F5F5F0 50%, #F5E6D3 100%)',
        'gradient-warm': 'linear-gradient(135deg, #F8F6F2 0%, #F5E6D3 50%, #F5F5F0 100%)',
      },
    },
  },
  plugins: [],
}

