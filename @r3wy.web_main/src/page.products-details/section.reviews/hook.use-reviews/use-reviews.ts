export type UseReviews = (...params: any[]) => [
  { items: any[] },
  {
    findAll: (input: {
      where?: any
      pluck?: string[]
      include?: string[]
    }) => Promise<void>
  }
]

export const useReviews: UseReviews = () => [
  {
    items: [],
  },
  {
    findAll: () => Promise.resolve(),
  },
]
