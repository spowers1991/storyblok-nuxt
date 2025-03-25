<template>
  <div v-editable="blok"  :class="[blok?.red_bg ? 'bg-red-100' : 'text-[#f4f4f4]']">
    <div :class="['flex flex-col gap-10 container mx-auto my-12 sm:my-20 px-6']">
      <TeaserTags />
      <Heading :headingType="'h2'" :text="blok.headline" :animate=true />
    </div>
  </div>
</template>

<script setup lang="ts">
  import TeaserTags from './TeaserTags.vue';
  import Heading from '@/components/HTMLtags/heading/Heading.vue';
  
  defineProps({
    blok: {
      type: Object,
      required: true,
    },
  })

</script>
