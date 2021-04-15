module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color:{
        charcoal:{
          light: "#7EB6C8",
          DEFAULT: "#264653",
          dark: "#060C0E"
        } 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
