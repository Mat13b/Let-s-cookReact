/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': '#A52A2A',
        'brown-dark': '#7A1F1F', // Ajout d'une teinte plus foncée de brun
      },
    },
  },
  plugins: [],
}
