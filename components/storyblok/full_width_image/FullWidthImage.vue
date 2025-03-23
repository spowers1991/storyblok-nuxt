<template>
  <div v-editable="blok" :class="{'opacity-100': isVisible, 'opacity-0': !isVisible}" class="my-12 sm:my-20 transition-opacity duration-1000 ease-in delay-[2.75s] overflow-hidden">
    <div :class="['flex flex-col gap-10 container mx-auto px-6']">
      <div class="border border-[#00dc82] rounded-lg p-3">
        <NuxtImg
            :src="blok.image.filename"
            alt="image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const props = defineProps({
    blok: {
      type: Object,
      required: true,
    },
  });
  
  const isVisible = ref(false);

  onMounted(() => {
    
    isVisible.value = true
  
  });
</script>
  