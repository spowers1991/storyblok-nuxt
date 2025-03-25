import H1 from '../components/H1.vue';
import H2 from '../components/H2.vue';
import H3 from '../components/H3.vue';

export function getSelectedHeading(headingType: any) {
    let selectedHeading = undefined;

    if (headingType === 'h1') {
        selectedHeading = H1;
    } else if (headingType === 'h2') {
        selectedHeading = H2;
    } else if (headingType === 'h3') {
        selectedHeading = H3;
    }

    return selectedHeading;
}
