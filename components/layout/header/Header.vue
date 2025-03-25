<script setup>
  import { ref, onMounted } from 'vue';
  import { useStoriesStore } from '~/plugins/storyblok/stores/Stories';
  import getStoriesByIds from '~/plugins/storyblok/helpers/getStoriesByIds';
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
  <header class="bg-black text-[#f4f4f4]">
    <nav class="container mx-auto flex justify-between items-center py-12 px-6 -mb-12">

      <div class="text-xl font-bold">
        <NuxtLink to="/" class="text-white">
          Steven Powers
        </NuxtLink>
      </div>

      <ul class="flex gap-x-3">
        <li v-for="story in menuItems" :key="story.slug">
          <NuxtLink :to="`/${story.slug}`" class="block hover:text-[#00dc82]" active-class="text-[#00dc82]">
            {{ story.name }}
          </NuxtLink>
        </li>
      </ul>

    </nav>
  </header>
</template>
