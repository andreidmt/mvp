export type Product = {
  id: string
  name: string
  description?: string
  price?: number
  createdAt?: string
  updatedAt?: string
}

export type Fields = keyof Product

export type FieldsGenerated = "id" | "createdAt" | "updatedAt"

export type ProductCreateInput = Omit<Product, FieldsGenerated>

export type ProductUpdateInput = Partial<ProductCreateInput>
