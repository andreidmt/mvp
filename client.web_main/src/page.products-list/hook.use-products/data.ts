import { delay } from "core.libs/promise"

const PRODUCTS = [
  {
    id: "01",
    thumbnailURL:
      "https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    name: "Awesome watch",
    price: 52,
    rating: 5,
  },
  {
    id: "02",
    thumbnailURL:
      "https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1777&q=80",
    name: "Still awesome watch",
    price: 25,
    rating: 4,
  },
  {
    id: "03",
    thumbnailURL:
      "https://images.unsplash.com/photo-1568010434570-74e9ba7126bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    name: "Not so awesome watch",
    price: 10,
    rating: 2,
  },
]

export type ProductModel = {
  id: string
  name: string
  price: number
  rating: number
  thumbnailURL?: string
}

export const Products = {
  findAll: () => delay(700).then(() => PRODUCTS),
}
