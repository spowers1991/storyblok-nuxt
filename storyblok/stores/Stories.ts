import { defineStore } from 'pinia';
import type { Story } from '~/storyblok/types/Story'; 

export const useStoriesStore = defineStore('stories', {
  state: () => ({
    stories: [] as Story[], 
  }),
  actions: {
    setStories(stories: Story[]) {
      this.stories = stories; 
    },
  },
});
