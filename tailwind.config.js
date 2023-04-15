/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: '#3c3e3b',
      secondary: '#23262D',
      third: '#C5996A',
      white_bolig: '#F9F9F9',
      primary_hover: '#5a5c59',
      secondary_hover: '#3c3f47',
      third_hover: '#A57D52',
      white_bolig_hover: '#E0E0E0',

    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
