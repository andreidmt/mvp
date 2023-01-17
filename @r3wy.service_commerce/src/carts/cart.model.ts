export type CartItem = {
  id: string
  quantity: number
  productId: string
  createdAt: string
  updatedAt: string
}

export type Cart = {
  id: string
  userId: string
  items: CartItem[]
  createdAt: string
  updatedAt: string
}
