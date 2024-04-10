import type { RestaurantDetail } from '@/model/restaurant'

export function DisplayRestaurantDetail({ restaurant }: {
  restaurant: RestaurantDetail
}) {
  const { name, description, categories } = restaurant.attributes

  return (
    <div className="flex flex-col gap-7">
      <h1>{name}</h1>

      <div className="flex flex-col gap-2">
        {description.map((block, i) => block.children.map((c, j) => (
          <p key={`${i}-${j}`}>{c.text}</p>
        )))}
      </div>

      <div>
        <h2>Categories:</h2>
        <ul>
          {categories.data.map(category => (
            <li key={category.id}>{category.attributes.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
