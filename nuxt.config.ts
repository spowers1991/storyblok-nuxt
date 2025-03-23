import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@storyblok/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],

  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN,
    componentsDir: '~/components/storyblok',
  },

  runtimeConfig: {
    public: {
      STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN, 
    },
  },

  css: ['@/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    shim: false, 
  },

  compatibilityDate: '2024-12-14',

  plugins: [
    '~/plugins/storyblok/registerComponents.ts',
    '~/plugins/storyblok/api/fetchStories.ts', 
  ],

  googleFonts: {
    families: {
      Inter: [400, 700],
    },
    display: 'swap',
  },

});