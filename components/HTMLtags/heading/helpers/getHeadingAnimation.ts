import TextReveal from '@/plugins/animations/TextReveal.vue';

export function getHeadingAnimation(animation: any) {
    let selectedAnimation = undefined;

    if (animation === 'reveal') {
        selectedAnimation = TextReveal;
    }

    return selectedAnimation;
}
