import Link from 'next/link'
import type { ReactNode } from 'react'

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <main className="flex flex-row ">
      <aside className="mx-5 flex flex-col gap-2 rounded-md border-2 border-white p-5">
        <Link href="/app">Overview</Link>
        <Link href="/app/restaurants">Restaurants</Link>
        <Link href="/app/categories">Categories</Link>
      </aside>
      {children}
    </main>
  )
}
