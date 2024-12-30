<script setup>
  import { toRaw } from 'vue';
  import { useRoute } from 'vue-router';

  const { slug } = useRoute().params;

  // Fetch the story using the slug, default to 'home' if slug is not provided
  const story = await useAsyncStoryblok(
    slug && slug.length > 0 ? slug.join('/') : 'home',
    { version: 'draft' }
  );

</script>

<template>
  <StoryblokComponent v-if="story" :blok="toRaw(story.content)" />
</template>
