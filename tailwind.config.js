/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "text": "#020308",
        "bg": "#FBFBFE",
        "primary": "#3544D0",
        "secondary": "#E7A998",
        "accent": "#dcd86a",
        "text-dark": "#F7F8FD",
        "dark-bg": "#010104",
        "dark-primary": "#2F3FCA",
        "dark-secondary": "#672918",
        "dark-accent": "#959123"
      }
    },
  },
  plugins: [],
}