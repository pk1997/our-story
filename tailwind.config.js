/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-cream': '#FDFBF7',
        'primary-red': '#FF4D4D',
        'forest-green': '#2D4A3E',
      },
      boxShadow: {
        'neo': '6px 6px 0px #000000',
      },
      borderWidth: {
        'neo': '3px',
      },
      fontFamily: {
        'sans': ['Work Sans', 'Arial', 'sans-serif'],
        'display': ['DM Sans', 'Work Sans', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
