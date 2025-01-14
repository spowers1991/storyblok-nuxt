<template>
    <div :class="{'opacity-100': isVisible, 'opacity-0': !isVisible}" class="flex flex-row gap-2 transition-opacity duration-[4s]  overflow-hidden">
        <GreenTag text='JavaScript'/>
        <GreenTag  text='PHP'/>
    </div>
</template>

<script setup lang="ts">

    import { ref, onMounted } from 'vue';
    import GreenTag from '@/shared/tags/GreenTag.vue';

    const isVisible = ref(false);

    onMounted(() => {
        isVisible.value = true
    });

</script>
