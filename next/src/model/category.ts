import type { StrapiEntity, StrapiText } from '@/model/strapi'

export type Category = StrapiEntity<{
  name: StrapiText
}>
