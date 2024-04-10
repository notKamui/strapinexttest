import { DisplayRestaurant } from '@/app/app/restaurants/components/DisplayRestaurant'
import { getRestaurants } from '@/service/api'

export async function AsyncRestaurantList() {
  const restaurants = await getRestaurants()

  return (
    <ul className="flex w-full flex-col gap-2 rounded-md border-2 border-white p-2">
      {restaurants.data.map(restaurant => (
        <li key={restaurant.id}><DisplayRestaurant restaurant={restaurant} /></li>
      ))}
    </ul>
  )
}
