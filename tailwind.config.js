/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    backgroundImage: {
      'wall': "url('/src/assets/wall1.jpg')",
    },
    colors: {
      colorred : '#ff4531',
      colororange : '#ff9f0a',
      coloryellow : '#ffd601',
      colorgreen : '#32d74b',
      colorgray : '#98989d',
      colordark : '#333333',
      colorWhite: '#fff',
      colorBlack: "#000",
    }
  },
  plugins: [],
}