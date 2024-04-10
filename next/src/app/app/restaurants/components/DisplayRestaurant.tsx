import Link from 'next/link'
import type { Restaurant } from '@/model/restaurant'

export function DisplayRestaurant({ restaurant }: {
  restaurant: Restaurant
}) {
  const { name } = restaurant.attributes

  return (
    <Link href={`/app/restaurants/${restaurant.id}`}>{name}</Link>
  )
}
