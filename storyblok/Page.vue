<template>
  <main v-editable="blok">
    <StoryblokComponent v-for="blok in blok?.body" :key="blok._uid" :blok="blok" />   
  </main>
</template>

<script setup lang="ts">

  interface Blok {
    body: Array<{ component: string; [key: string]: any }> 
  }

  defineProps<{
    blok: Blok | undefined
  }>()

</script>
