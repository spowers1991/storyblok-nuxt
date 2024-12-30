import { defineNuxtPlugin } from '#app';
import { storyblokInit, apiPlugin } from '@storyblok/js';
import type { SbInitResult } from '@storyblok/js';
import { useStoriesStore } from '../stores/Stories'; 


export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();  
  
  const { storyblokApi }: SbInitResult = storyblokInit({
    accessToken: config.public.STORYBLOK_TOKEN,
    use: [apiPlugin],
  });

  async function fetchAllStories(): Promise<void> {
    if (!storyblokApi) {
      console.error('Storyblok API is not initialized.');
      return;
    }

    try {
      const response = await storyblokApi.get('cdn/stories', {
        version: 'draft',
      });

      const storiesStore = useStoriesStore();
      storiesStore.setStories(response.data.stories);

    } catch (error) {
     // console.error('Error fetching stories:', error);
    }
  }

  // Call the function to fetch all stories and save them to Pinia store
  fetchAllStories().then(() => {
    //console.log('Stories saved to Pinia store.');
  });
});
