import { delay } from "core.libs/promise"

const PRODUCT = {
  id: "01",
  thumbnailURL:
    "https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  name: "Awesome watch",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  price: 52,
  rating: 5,
  Company: {
    id: "01",
    name: "Apple",
    slug: "apple",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
}
export type ProductModel = {
  id: string
  name: string
  price: number
  rating: number
  thumbnailURL?: string
  Company: {
    id: string
    name: string
    slug: string
    description: string
  }
}

export const Products = {
  findOne: (_id?: string) => delay(1000).then(() => PRODUCT),
}
