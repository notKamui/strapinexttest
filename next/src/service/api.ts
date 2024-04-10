'use server'

import { ofetch } from 'ofetch'
import type { Restaurant, RestaurantDetail } from '@/model/restaurant'
import type { StapiPagination, StrapiResponse } from '@/model/strapi'

const $fetch = ofetch.create({
  baseURL: 'http://localhost:1337/api',
})

export async function getRestaurants() {
  return $fetch<StrapiResponse<Restaurant[], StapiPagination>>('/restaurants')
}

export async function getRestaurantById<
  IncludeCategory extends true | false = false,
  Response = IncludeCategory extends true ? RestaurantDetail : Restaurant,
>(
  id: number,
  withCategories?: IncludeCategory,
) {
  return await $fetch<StrapiResponse<Response>>(`/restaurants/${id}`, {
    params: withCategories
      ? {
          populate: 'categories',
        }
      : undefined,
  })
}

export async function getCategories() {
  return $fetch<StrapiResponse<Restaurant[]>>('/categories')
}

export async function getCategoryById<
  IncludeRestaurants extends true | false = false,
  Response = IncludeRestaurants extends true ? RestaurantDetail : Restaurant,
>(
  id: number,
  withRestaurants?: IncludeRestaurants,
) {
  return await $fetch<StrapiResponse<Response>>(`/categories/${id}`, {
    params: withRestaurants
      ? {
          populate: 'restaurants',
        }
      : undefined,
  })
}
