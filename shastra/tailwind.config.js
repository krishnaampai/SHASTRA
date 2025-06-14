/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
    colors: {
        navbar: '#06032e',
        primary: '#1e40af',
        accent: '#f43f5e',
      },
    backgroundImage:{
      bannerImg:"url('./assets/bnr-without-txt.png')",
    }
  },
  plugins: [],
}
}
