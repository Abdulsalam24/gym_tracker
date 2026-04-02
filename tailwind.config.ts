import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        accent: '#E8FF47',
      },
    },
  },
} satisfies Config
