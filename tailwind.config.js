/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customRed: '#7B1113',
      },
      backgroundImage: {
        "shivi0": "url('./assets/shivi0.jpeg')",
        "shivi2": "url('./assets/shivi1.jpeg')",
        "shivi3": "url('./assets/shivi2.jpeg')",
        "shivi4": "url('./assets/shivi3.jpeg')",
        "shivi5": "url('./assets/shivi4.jpeg')",
        "shivi6": "url('./assets/shivi5.jpeg')",
        "shivi7": "url('./assets/shivi6.jpeg')"

      }
    },
  },
  plugins: [],
}
