import { Suspense } from 'react'
import { AsyncRestaurantDetail } from '@/app/app/restaurants/components/AsyncRestaurantDetail'

export default function Page({ params }: { params: { id: string } }) {
  const idNumber = Number.parseInt(params.id)
  if (Number.isNaN(idNumber) || !Number.isFinite(idNumber) || idNumber < 1) {
    return <div>Invalid ID</div>
  }

  return (
    <Suspense fallback={<div>Loading #{idNumber}...</div>}>
      <AsyncRestaurantDetail id={idNumber} />
    </Suspense>
  )
}
