/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(152, 45%, 14%)',
          light: 'hsl(152, 45%, 20%)',
          foreground: 'hsl(0, 0%, 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(142, 71%, 45%)',
          light: 'hsl(142, 71%, 55%)',
          foreground: 'hsl(0, 0%, 100%)',
        },
      },
    },
  },
  plugins: [],
}