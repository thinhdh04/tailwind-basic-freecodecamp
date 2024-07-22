/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        vuejs: {
          100: "#49e659",
          932: "434252"
        }
      }
    }
  },
  plugins: [],
}

