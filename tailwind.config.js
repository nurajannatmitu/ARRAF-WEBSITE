/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          950: '#060E1A',
          900: '#0A1628',
          800: '#10223D',
          700: '#183359',
          600: '#234778',
        },
        offwhite: {
          DEFAULT: '#F8F5F0',
          50: '#FFFFFF',
          100: '#F8F5F0',
          200: '#EFECE6',
          300: '#E2DED6',
        },
        teal: {
          DEFAULT: '#0D9488',
          400: '#14B8A6',
          500: '#0D9488',
          600: '#0F766E',
          700: '#115E59',
        },
        slate: {
          border: 'rgba(10, 22, 40, 0.12)',
          'border-dark': 'rgba(248, 245, 240, 0.14)',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '75px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
      maxWidth: {
        'editorial': '1078px',
        'reading': '68ch',
      }
    },
  },
  plugins: [],
}
