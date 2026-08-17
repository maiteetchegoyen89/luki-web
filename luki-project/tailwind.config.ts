import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#F47A3C',
        'orange-soft': '#FF9A62',
        salmon: '#F58B7A',
        coral: '#FF6F61',
        peach: '#FFC09F',
        cream: '#FFF6EE',
        bg: '#FFFDFC',
        ink: '#1D1917',
        'ink-soft': '#6D625D',
        mist: '#FBF1EA',
        pos: '#5D9B71',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        lg2: '28px',
        md2: '18px',
      },
    },
  },
  plugins: [],
} satisfies Config
