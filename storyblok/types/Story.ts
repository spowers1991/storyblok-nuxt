import type { SbBlokData } from '@storyblok/js';

export type Story = {
  name: string;
  uuid: string;
  slug: string;
  body: SbBlokData[];  
} | null;
