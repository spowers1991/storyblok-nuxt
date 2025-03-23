/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './themes/**/*.{js,ts}',
    './components/**/*.{vue,js,ts}',
    './layout/**/*.vue',
    './shared/**/*.vue',
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
