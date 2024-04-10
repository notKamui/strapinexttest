import type { Category } from '@/model/category'

export function DisplayCategory({ category }: { category: Category }) {
  return <span>{category.attributes.name}</span>
}
