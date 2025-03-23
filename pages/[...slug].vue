<script setup>
  import { toRaw } from 'vue';
  import { useRoute } from 'vue-router';
  import { setMetaTags } from '~/plugins/seo/actions/setMetaTags';

  const { slug } = useRoute().params;

  // Fetch the story using the slug, default to 'home' if slug is not provided
  const story = await useAsyncStoryblok(
    slug && slug.length > 0 ? slug.join('/') : 'home',
    { version: 'draft' }
  );
  
  setMetaTags(toRaw(story.value));

</script>

<template>
  <StoryblokComponent v-if="story" :blok="toRaw(story.content)" />
</template>
