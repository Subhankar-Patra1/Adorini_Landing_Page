import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

/**
 * Light theme only — `darkMode` is pinned to a class that is never applied, so
 * a stray `dark:` variant cannot activate and the OS setting is ignored.
 */
const config: Config = {
  darkMode: ['class', '[data-theme="never"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: 'var(--surface)',
          container: 'var(--surface-container)',
          low: 'var(--surface-low)',
          lowest: 'var(--surface-lowest)',
        },
        'on-surface': {
          DEFAULT: 'var(--on-surface)',
          variant: 'var(--on-surface-variant)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          container: 'var(--primary-container)',
        },
        'secondary-container': 'var(--secondary-container)',
        'tertiary-container': 'var(--tertiary-container)',
        outline: {
          DEFAULT: 'var(--outline)',
          variant: 'var(--outline-variant)',
        },
        divider: 'var(--divider)',
        accent: {
          DEFAULT: 'var(--accent)',
          deep: 'var(--accent-deep)',
        },
        'brand-ink': 'var(--brand-ink)',
      },
      fontFamily: {
        heading: ['Sentient', 'Georgia', 'serif'],
        sans: ['ClashGrotesk', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
        prose: '72ch',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(42, 17, 21, 0.05)',
        lift: '0 8px 28px rgba(42, 17, 21, 0.06)',
      },
      keyframes: {
        'rise-in': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'rise-in': 'rise-in 400ms ease-out both',
        'accordion-down': 'accordion-down 200ms ease-out',
        'accordion-up': 'accordion-up 200ms ease-out',
      },
    },
  },
  plugins: [animate],
};

export default config;
