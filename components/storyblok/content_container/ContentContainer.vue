<template>
    <div v-editable="blok" class="my-12 sm:my-20 overflow-hidden">
        <div :class="['flex flex-col gap-10 container mx-auto px-6']">
            <div :class="['relative h-[500px] overflow-hidden border', styles.borderColor, 'rounded-lg p-3']">
                <div :class="['absolute inset-0 h-full w-full', styles.backgroundColor, 'opacity-10']">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
   
    import { onMounted } from 'vue';
    import { theme } from '@/themes/classic/theme';

    type Colour = keyof typeof theme;

    const props = defineProps<{
        blok: {
            colour: Colour;
        };
    }>();

    const styles = theme[props?.blok?.colour].classList

    onMounted(() => {
        
        console.log(theme['red'].classList)

    });

</script>
