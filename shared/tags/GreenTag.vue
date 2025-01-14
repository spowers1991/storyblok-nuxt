<template>
    <div class="text-xs max-w-fit rounded px-4 py-2 bg-[#fff] text-black uppercase tracking-[1px]">
      {{ text }}
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    text: {
      type: String,
      required: true
    }
  });
  </script>
  