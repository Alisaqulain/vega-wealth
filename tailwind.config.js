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
          blue: '#0EA5E9',
          'blue-dark': '#0284C7',
          green: '#10B981',
          'green-dark': '#059669',
        },
        accent: {
          purple: '#8B5CF6',
          orange: '#F59E0B',
          pink: '#EC4899',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0EA5E9 0%, #10B981 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #10B981 0%, #0EA5E9 100%)',
        'gradient-hero': 'linear-gradient(135deg, #E0F2FE 0%, #F0FDF4 50%, #E0F2FE 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 50%, #ECFDF5 100%)',
      },
    },
  },
  plugins: [],
}

