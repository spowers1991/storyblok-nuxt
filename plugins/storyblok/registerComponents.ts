import { defineNuxtPlugin } from '#app'
import { defineAsyncComponent } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  // Dynamically register Storyblok components
  nuxtApp.vueApp.component('ContentContainer', defineAsyncComponent(() => import('@/components/storyblok/content_container/ContentContainer.vue')))
  nuxtApp.vueApp.component('FullWidthImage', defineAsyncComponent(() => import('@/components/storyblok/full_width_image/FullWidthImage.vue')))
  nuxtApp.vueApp.component('Swiper', defineAsyncComponent(() => import('@/components/storyblok/swiper/Swiper.vue')))
  nuxtApp.vueApp.component('Teaser', defineAsyncComponent(() => import('@/components/storyblok/teaser/Teaser.vue')))
  nuxtApp.vueApp.component('Page', defineAsyncComponent(() => import('@/components/storyblok/Page.vue')))
})
