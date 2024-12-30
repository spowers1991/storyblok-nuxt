<template>
  <div v-editable="blok"  :class="[blok?.red_bg ? 'bg-red-100' : 'text-[#50b0ae]']">
    <div :class="['container mx-auto py-12 px-6']">
      <h2>
        {{ blok.headline }}
      </h2> 
    </div>
  </div>
</template>

<script setup lang="ts">

  defineProps({
    blok: {
      type: Object,
      required: true,
    },
  })

</script>
