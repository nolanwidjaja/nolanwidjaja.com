/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        border: 'var(--color-border)',
        surface: 'var(--color-surface)',
      },
      fontFamily: {
        serif: ['"Fraunces Variable"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '680px',
      },
      transitionDuration: {
        theme: '150ms',
      },
    },
  },
  plugins: [],
};
