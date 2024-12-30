import type { SbBlokData } from '@storyblok/js';

export type Story = {
  uuid: string;
  slug: string;
  body: SbBlokData[];  
} | null;
