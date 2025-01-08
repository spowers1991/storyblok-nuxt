import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@storyblok/nuxt',
  ],

  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN,
    componentsDir: '~/storyblok/components',
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
    shim: false, // Disable shim if using strict TypeScript typing
  },

  compatibilityDate: '2024-12-14',

  plugins: [
    '~/storyblok/api/fetchStories.ts', 
  ],
});
