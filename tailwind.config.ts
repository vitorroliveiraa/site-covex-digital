import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: {
          DEFAULT: '#531f7b',
          light: '#7b3db5',
          dark: '#3a1556',
          glow: 'rgba(83, 31, 123, 0.4)',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          surface: '#111111',
        },
        glass: {
          white: 'rgba(255,255,255,0.08)',
          border: 'rgba(255,255,255,0.12)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-gradient':
          'radial-gradient(at 20% 20%, rgba(83,31,123,0.35) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(123,61,181,0.25) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(58,21,86,0.35) 0px, transparent 50%)',
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow:
              '0 0 0 0 rgba(83, 31, 123, 0.6), 0 8px 32px rgba(83,31,123,0.35)',
          },
          '50%': {
            boxShadow:
              '0 0 0 18px rgba(83, 31, 123, 0)  , 0 8px 32px rgba(83,31,123,0.45)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'orb-drift': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-30px, 25px) scale(0.95)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'orb-drift': 'orb-drift 18s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
