module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/caitlyn-de-wild-9I4Oe-atXck-unsplash.jpg')"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
