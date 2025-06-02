/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
      },
      colors: {
        lavender: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        coral: {
          50: '#fff5f5',
          100: '#ffe0e0',
          200: '#ffc2c2',
          300: '#ff9b9b',
          400: '#ff7171',
          500: '#ff5252',
          600: '#ff3838',
        },
        peach: {
          50: '#fff8f0',
          100: '#ffe6d5',
          200: '#ffd2b3',
          300: '#ffbe8a',
          400: '#ffa666',
          500: '#ff8c38',
          600: '#ff7d22',
        },
        skyblue: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#90cdfb',
          400: '#64b8f8',
          500: '#3ea1f6',
          600: '#2288e5',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};