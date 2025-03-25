<template>
   
   <Icon :class="[color, '!w-[35px] !h-[35px]']" />
                     
</template>

<script setup lang="ts">

    import StarSVG from '@/assets/svg/icons/star.svg'

    const props = defineProps<{
        type: string
        color: string
    }>();

    const color = props.color;

    let Icon = undefined;

    if( props.type === 'star' ){
        Icon = StarSVG;
    } else {
        Icon = undefined;
    }

</script>
