<template>
  <div v-editable="blok"  :class="[blok?.red_bg ? 'bg-red-100' : 'text-[#f4f4f4]']">
    <div :class="['container mx-auto my-20 px-6']">
      <h2 class="text-5xl max-w-3xl font-inter">
        <AnimateHeading :text="blok.headline"/>
      </h2> 
    </div>
  </div>
</template>

<script setup lang="ts">

  import AnimateHeading from '@/shared/animations/AnimateHeading.vue';

  defineProps({
    blok: {
      type: Object,
      required: true,
    },
  })

</script>
