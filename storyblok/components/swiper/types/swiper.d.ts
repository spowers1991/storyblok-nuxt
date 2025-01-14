declare module 'swiper/vue' {
    import { DefineComponent } from 'vue';
    import { SwiperOptions, Module } from 'swiper';
    
    export const Swiper: DefineComponent<SwiperOptions & { modules?: Module[] }>;
    export const SwiperSlide: DefineComponent<{}>;
  }
  
  declare module 'swiper' {
    import { Module } from 'swiper';
    
    export const EffectCoverflow: Module;
    export const Pagination: Module;
    export const Autoplay: Module;
  
    export * from 'swiper';
  }
  