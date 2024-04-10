import type { Category } from '@/model/category'
import type { StrapiEntity, StrapiResponse, StrapiRichText, StrapiText } from '@/model/strapi'

export type Restaurant = StrapiEntity<{
  name: StrapiText
  description: StrapiRichText
}>

export type RestaurantDetail = Restaurant & StrapiEntity<{
  categories: StrapiResponse<Category[]>
}>
