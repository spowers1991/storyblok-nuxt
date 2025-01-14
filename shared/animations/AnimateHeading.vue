<template>
  <div class="container mx-auto">
    <div ref="textElement" class="perspective-container">
      <span
        v-for="(word, wordIndex) in words"
        :key="wordIndex"
        class="word inline-block"
      >
        <span
          v-for="(letter, letterIndex) in word.split('')"
          :key="letterIndex"
          class="letter inline-block"
        >
          {{ letter }}
        </span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const words = props.text.split(' ');
const textElement = ref(null);

onMounted(() => {
  // Set perspective for the container
  gsap.set(textElement.value, { perspective: 800 });

  gsap.fromTo(
    textElement.value.querySelectorAll('.letter'),
    {
      opacity: 0,
      rotationY: 30,
      y: 5,
      transformOrigin: 'center',
    },
    {
      opacity: 1,
      rotationY: 0,
      y: 0,
      stagger: 0.03,
      duration: 5,
      ease: 'power2.out',
    }
  );
});
</script>

<style scoped>
.perspective-container {
  display: inline-block;
  transform-style: preserve-3d;
  perspective: 800px;
}

.word {
  display: inline-block; 
  margin-right: 10px; 
}

.letter {
  opacity: 0;
  display: inline-block;
  transform-origin: center;
  will-change: transform;
}
</style>
