export type Product = {
  id: string
  name: string
  description?: string
  price?: number
  createdAt: string
  updatedAt: string
}

export type Fields = keyof Product

export type FieldsGenerated = "id" | "createdAt" | "updatedAt"

export type BodyCreate = Omit<Product, FieldsGenerated>

export type BodyUpdate = Partial<Omit<Product, FieldsGenerated>>
