<script setup>
  import { ref, onMounted } from 'vue';
  import { useStoriesStore } from '~/storyblok/stores/Stories';
  import getStoriesByIds from '~/storyblok/helpers/getStoriesByIds';
  import { toRaw } from 'vue';

  const storiesStore = useStoriesStore();
  const menuItems = ref([]);

  onMounted(() => {
    const settings = toRaw(storiesStore.stories).find(story => story.name === 'Settings');
  
    if (settings?.content?.menu) {
      menuItems.value = getStoriesByIds(storiesStore.stories, settings.content.menu);
    }
 
  });
</script>

<template>
  <header class="bg-gray-800 text-white">
    <nav class="container mx-auto flex justify-between items-center py-4 px-6">

      <div class="text-xl font-bold">
        <NuxtLink to="/" class="text-white">
          TS Nuxt Blog Template
        </NuxtLink>
      </div>

      <ul class="flex gap-x-3">
        <li v-for="story in menuItems" :key="story.slug">
          <NuxtLink :to="`/${story.slug}`" class="block hover:text-gray-300">
            {{ story.name }}
          </NuxtLink>
        </li>
      </ul>

    </nav>
  </header>
</template>
