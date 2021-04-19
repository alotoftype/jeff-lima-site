module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'about': "url('~/assets/img/centerImage.png')",
        'film': "url('~/assets/img/Film_Television_Banner.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
