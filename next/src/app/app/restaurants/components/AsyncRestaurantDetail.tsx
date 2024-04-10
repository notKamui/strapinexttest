import { DisplayRestaurantDetail } from '@/app/app/restaurants/components/DisplayRestaurantDetail'
import { getRestaurantById } from '@/service/api'

export async function AsyncRestaurantDetail({ id }: {
  id: number
}) {
  const restaurant = await getRestaurantById(id, true)

  return (
    <DisplayRestaurantDetail restaurant={restaurant.data} />
  )
}
