/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",       // for HTML
    "./src/**/*.{js,ts,jsx,tsx}"  // for JS/TS/JSX/TSX inside src/
  ],
  theme: {
    extend: {
      fontFamily: {
        libertinus: ['"Libertinus Mono"', 'monospace'],
    },
  },
  plugins: [],
}
}

