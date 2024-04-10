import { DisplayCategory } from '@/app/app/categories/components/DisplayCategory'
import { getCategories } from '@/service/api'

export async function AsyncCategoryList() {
  const categories = await getCategories()

  return (
    <ul className="flex w-full flex-col gap-2 rounded-md border-2 border-white p-2">
      {categories.data.map(category => (
        <DisplayCategory key={category.id} category={category} />
      ))}
    </ul>
  )
}
