import { useHead } from '@vueuse/head';
import type { MetaObject } from "@/seo/types/MetaObject";

export function setMetaTags(metaObject: MetaObject) {
  
  const content = metaObject?.content ? metaObject?.content : metaObject;

  useHead({
    title: content?.meta_title || metaObject?.name || 'Default Title', 
    meta: [
      { name: 'description', content: content?.meta_description || 'Default description' },
      { name: 'keywords', content: content?.meta_keywords || 'Default Keywords' },
      { name: 'robots', content: content?.meta_no_index == true ? 'no index, no follow' : 'index, follow' },
      { name: 'og:title', property: 'og:title', content: metaObject?.name || 'Default Title' },
      { name: 'og:description', property: 'og:description', content: content?.meta_description || 'Default description' }
    ]
  });
}
