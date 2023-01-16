export type Product = {
  id: string
  name: string
  description: string
  price: number
  createdAt: string
  updatedAt: string
}

export type EditableFields = Partial<
  Omit<Product, "id" | "createdAt" | "updatedAt">
>

export type PluckableFields = keyof Product
