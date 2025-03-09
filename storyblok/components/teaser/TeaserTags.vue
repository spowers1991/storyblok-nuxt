<template>
    <div :class="{'opacity-100': isVisible, 'opacity-0': !isVisible}" class="flex flex-row gap-2 transition-opacity duration-[4s]  overflow-hidden">
        <RoundedTag text='JavaScript'/>
        <RoundedTag  text='PHP'/>
    </div>
</template>

<script setup lang="ts">

    import { ref, onMounted } from 'vue';
    import RoundedTag from '@/components/tags/RoundedTag.vue';

    const isVisible = ref(false);

    onMounted(() => {
        isVisible.value = true
    });

</script>
