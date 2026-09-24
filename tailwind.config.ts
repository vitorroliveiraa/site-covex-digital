import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        texto: 'rgb(var(--texto) / <alpha-value>)',
        fundo: 'rgb(var(--fundo) / <alpha-value>)',
        destaque: 'rgb(var(--destaque) / <alpha-value>)',
        secondary: {
          DEFAULT: '#531f7b',
          light: '#7b3db5',
          dark: '#3a1556',
          glow: 'rgba(83, 31, 123, 0.4)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-gradient': 'var(--gradiente-malha)',
      },
      keyframes: {
        'orb-drift': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-30px, 25px) scale(0.95)' },
        },
      },
      animation: {
        'orb-drift': 'orb-drift 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
