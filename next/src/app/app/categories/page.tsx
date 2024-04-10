import { Suspense } from 'react'
import { AsyncCategoryList } from '@/app/app/categories/components/AsyncCategoryList'

export default function Page() {
  return (
    <div className="w-full">
      <h1>Categories</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <AsyncCategoryList />
      </Suspense>
    </div>
  )
}
