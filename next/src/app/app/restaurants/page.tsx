import { Suspense } from 'react'
import { AsyncRestaurantList } from '@/app/app/restaurants/components/AsyncRestaurantList'

export default function Page() {
  return (
    <div className="w-full">
      <h1>Restaurants</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <AsyncRestaurantList />
      </Suspense>
    </div>
  )
}
