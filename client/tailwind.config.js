/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a0f1e',
          900: '#0f172a',
          800: '#111827',
          700: '#1a2744',
          600: '#253659',
        },
        brand: {
          blue: '#2563eb',
          dark: '#1d4ed8',
          sky: '#0ea5e9',
          cyan: '#06b6d4',
          light: '#60a5fa',
        },
        glass: {
          DEFAULT: 'rgba(255,255,255,0.05)',
          border: 'rgba(255,255,255,0.1)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a0f1e 0%, #111827 50%, #0a0f1e 100%)',
        'brand-gradient': 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #0ea5e9 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(14,165,233,0.05) 100%)',
        'glow-gradient': 'radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        glow: '0 0 20px rgba(37,99,235,0.3)',
        'glow-lg': '0 0 40px rgba(37,99,235,0.4)',
        'glow-sky': '0 0 20px rgba(14,165,233,0.4)',
        'glow-cyan': '0 0 20px rgba(6,182,212,0.4)',
        glass: '0 8px 32px rgba(0,0,0,0.4)',
        card: '0 4px 24px rgba(0,0,0,0.3)',
      },
      borderColor: {
        glass: 'rgba(255,255,255,0.1)',
        glow: 'rgba(37,99,235,0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(40) 1s forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(37,99,235,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(37,99,235,0.6)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
