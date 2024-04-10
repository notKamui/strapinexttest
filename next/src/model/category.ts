import type { Restaurant } from '@/model/restaurant'
import type { StrapiEntity, StrapiText } from '@/model/strapi'

export type Category = StrapiEntity<{
  name: StrapiText
}>

export type CategoryDetail = Category & StrapiEntity<{
  restaurants: Restaurant[]
}>
