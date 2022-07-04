/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          850: '#151515',
        },
      },
      fontFamily: {
        calibre: ["Calibre", "sans-serif"],
        calibre: ["Calibre-semibold", "sans-serif"],
        SFMono: ["SFMono", "monospace"],
        SFMono: ["SFMono-semibold", "monospace"],
        airlight: ["airlight", "airlight"]
      },
    },
  },
  plugins: [],
}
