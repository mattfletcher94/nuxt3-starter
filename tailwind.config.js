const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: { min: '359px' },
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        theme: {
          'surface-0': 'var(--surface-0)',
          'surface-1': 'var(--surface-1)',
          'foreground-0': 'var(--foreground-0)',
          'foreground-1': 'var(--foreground-1)',
          'primary-500': 'var(--primary-500)',
          'primary-600': 'var(--primary-600)',
          'secondary-500': 'var(--secondary-500)',
          'secondary-600': 'var(--secondary-600)',
        },
        slate: {
          50: '#f8fafc',
        },
        surface: {
          400: '#42506B',
          500: colors.gray[900],
        },
        blue: {
          500: '#3e619b',
        },
        light: {
          500: '#e9e9eb',
        },
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
