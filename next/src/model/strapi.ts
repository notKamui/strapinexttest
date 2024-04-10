export interface StrapiResponse<Data, Meta = Record<string, unknown>> {
  data: Data
  meta: Meta
}

export interface StrapiEntity<T> {
  id: number
  attributes: T & {
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
  }
}

export interface StrapiPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export type StrapiText = string

export type StrapiRichText = {
  type: string
  children: {
    type: string
    text: StrapiText
  }[]
}[]
