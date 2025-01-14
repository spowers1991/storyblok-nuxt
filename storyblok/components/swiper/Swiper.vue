<template>
  <div v-editable="blok">
    <div v-editable="blok" :class="{'opacity-100': isVisible, 'opacity-0': !isVisible}" class="transition-opacity duration-1000 ease-in delay-[2.75s] overflow-hidden">
      <swiper
        :slidesPerView="blok.slidesPerView || 1.25"
        :spaceBetween="blok.spaceBetween || 80"
        :loop="blok.loop || false"
        :speed="1500"
        :modules="[EffectCoverflow, Pagination]" 
        class="coverflow-swiper !overflow-visible mr-auto"
        effect="coverflow"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 10,
          modifier: 1,
          slideShadows: false
        }"
        centeredSlides
      >
        <swiper-slide v-for="(slide, index) in blok.slides" :key="index" class="rounded">
          <img :src="slide.filename" :alt="slide.alt" class="w-full h-full object-contain rounded-lg"/>
          <div v-if="slide.caption" class="mt-4 text-center text-white font-semibold">{{ slide.caption }}</div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue'; 
  import { EffectCoverflow, Pagination  } from 'swiper'; 
  import 'swiper/css';  
  import 'swiper/css/effect-coverflow';  
  import 'swiper/css/autoplay';

  const isVisible = ref(false);

  onMounted(() => {
    console.log('Slides:', props.blok.slides);

    isVisible.value = true
  });

  const props = defineProps({
    blok: {
      type: Object,
      required: true,
    },
  });
  
</script>

