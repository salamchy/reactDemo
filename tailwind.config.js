/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ['Quicksand', 'sans-serif'],
      },
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-1rem)' }, // Moves up by 1rem
        },
      },
      animation: {
        upDown: 'upDown 1.5s ease-in-out infinite', // Adjust timing as needed
      },
    },
  },
  plugins: [],
}
