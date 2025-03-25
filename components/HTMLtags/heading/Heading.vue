<template>
    <div class="overflow-hidden">
      <template v-if="props.animate">
        <SelectedHeading>
          <AnimateText :text="props.text" />
        </SelectedHeading>
      </template>
      
      <template v-else>
        <SelectedHeading>
            {{ props.text }}
        </SelectedHeading>
      </template>
    </div>
  </template>
  
  <script setup lang="ts">
    import { getSelectedHeading } from './helpers/getSelectedHeading';
    import { getHeadingAnimation } from './helpers/getHeadingAnimation';
  
    const props = defineProps<{
      headingType: string;
      text: string;
      animate?: boolean;
    }>();
  
    // Ensure the components are correctly fetched and handled
    const SelectedHeading = getSelectedHeading(props.headingType);
    const AnimateText = getHeadingAnimation('reveal');
  </script>
  