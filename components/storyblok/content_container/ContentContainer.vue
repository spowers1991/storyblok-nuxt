<template>
    <div v-editable="blok" class="my-12 sm:my-20 overflow-hidden">
        <div :class="['flex flex-col gap-10 container mx-auto px-6']">
            <div :class="[styles.borderColor, 'relative h-[500px] overflow-hidden border', 'rounded-lg p-3']">
                <div :class="[styles.backgroundColor, 'absolute inset-0 h-full w-full', 'opacity-10']">
                </div>

                <div :class="['flex gap-3 w-full text-white']">
                    <div :class="[styles.borderColor, 'ml-auto p-2']">
                        <SVGIcon :type="'star'" :color=styles.color />
                    </div>
                </div>

                <div :class="['flex gap-3 px-6 sm:px-12 w-full text-white']">
                    <Heading :headingType="'h1'" :text="'This is a test'" />
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
   
    import { theme } from '@/themes/classic/theme';
    import SVGIcon from '@/components/icons/svg_icon/SVGIcon.vue'
    import Heading from '@/components/HTMLtags/heading/Heading.vue';

    type Colour = keyof typeof theme;

    const props = defineProps<{
        blok: {
            colour: Colour;
        };
    }>();

    const styles = theme[props?.blok?.colour].classList

</script>
