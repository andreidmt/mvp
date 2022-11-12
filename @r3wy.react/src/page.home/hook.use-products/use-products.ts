import { useCallback, useState } from "react"

import { delay } from "core.libs/promise"

import { useCRUDStatus } from "core.hooks/use-crud-status/use-crud-status"

import { PRODUCTS } from "./data"

type Product = {
  id: string
  name: string
  price: number
  rating: number
  thumbnailURL?: string
}

type UseProducts = () => [
  { items: Product[]; isFindingAll: boolean },
  { findAll: () => Promise<void> }
]

export const useProducts: UseProducts = () => {
  const [items, setItems] = useState<Product[]>([])
  const [status, { start, stop }] = useCRUDStatus("home-products")

  const handleFindAll = useCallback(async () => {
    start({ type: "read", message: "Loading products..." })
    setItems(await delay(1000).then(() => PRODUCTS))
    stop({ type: "read" })
  }, [start, stop])

  return [
    { items, isFindingAll: status.read.isRunning },
    { findAll: handleFindAll },
  ]
}
