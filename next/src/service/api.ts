'use server'

import { ofetch } from 'ofetch'
import type { Category, CategoryDetail } from '@/model/category'
import type { Restaurant, RestaurantDetail } from '@/model/restaurant'
import type { StrapiPagination, StrapiResponse } from '@/model/strapi'

const $fetch = ofetch.create({
  baseURL: 'http://localhost:1337/api',
})

export async function getRestaurants() {
  return $fetch<StrapiResponse<Restaurant[], StrapiPagination>>('/restaurants')
}

export async function getRestaurantById(id: number, withCategories?: boolean): Promise<StrapiResponse<Restaurant>>
export async function getRestaurantById(id: number, withCategories: true): Promise<StrapiResponse<RestaurantDetail>>
export async function getRestaurantById(
  id: number,
  withCategories = false,
) {
  return await $fetch(`/restaurants/${id}`, {
    params: withCategories
      ? {
          populate: 'categories',
        }
      : undefined,
  })
}

export async function getCategories() {
  return $fetch<StrapiResponse<Category[]>>('/categories')
}

export async function getCategoryById(id: number, withRestaurants?: boolean): Promise<StrapiResponse<Category>>
export async function getCategoryById(id: number, withRestaurants: true): Promise<StrapiResponse<CategoryDetail>>
export async function getCategoryById(
  id: number,
  withRestaurants = false,
) {
  return await $fetch(`/categories/${id}`, {
    params: withRestaurants
      ? {
          populate: 'restaurants',
        }
      : undefined,
  })
}
