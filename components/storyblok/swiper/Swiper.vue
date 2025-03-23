<template>
  <div class="overflow-hidden">
    <div v-editable="blok" :class="{'opacity-100': isVisible, 'opacity-0': !isVisible}" class="transition-opacity duration-1000 ease-in delay-[2.75s] overflow-visible container mx-auto px-6">
      <swiper
        :slidesPerView="blok.slidesPerView || 1."
        :spaceBetween="blok.spaceBetween || 0"
        :loop="blok.loop || true"
        :speed="1500"
        :modules="[EffectCoverflow, Pagination, Autoplay]" 
        class="coverflow-swiper !overflow-visible mr-auto"
        effect="coverflow"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 10,
          modifier: 1,
          slideShadows: false
        }"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false
        }"
        centeredSlides
      >
        <swiper-slide v-for="(slide, index) in blok.slides" :key="index" class="rounded w-full">
          <img :src="slide.filename" :alt="slide.alt" class="w-full h-full object-contain rounded-lg border border-[#00dc82]"/>
          <div v-if="slide.caption" class="mt-4 text-center text-white font-semibold">{{ slide.caption }}</div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue'; 
  import { Autoplay, EffectCoverflow, Pagination } from 'swiper'; 
  import 'swiper/css';  
  import 'swiper/css/effect-coverflow';  
  import 'swiper/css/autoplay';

  const isVisible = ref(false);

  onMounted(() => {
    
    isVisible.value = true
  
  });

  const props = defineProps({
    blok: {
      type: Object,
      required: true,
    },
  });
  
</script>

