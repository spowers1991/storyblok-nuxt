<script setup>
  import { toRaw } from 'vue';
  import { setMetaTags } from '~/plugins/seo/actions/setMetaTags';

  const story = await useAsyncStoryblok('home', { version: 'draft' });

  setMetaTags(toRaw(story.value));

</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
