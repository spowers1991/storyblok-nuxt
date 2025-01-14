/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layout/**/*.vue',
    './pages/**/*.vue',
    './storyblok/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue', 
    './nuxt.config.{js,ts}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Arial', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
