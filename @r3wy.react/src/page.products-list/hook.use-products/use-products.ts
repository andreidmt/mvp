import { useCallback, useState } from "react"

import { useCRUDStatus } from "core.hooks/use-crud-status/use-crud-status"

import { Products, ProductModel } from "./data"

type UseProducts = () => [
  { items: ProductModel[]; isFindingAll: boolean },
  { findAll: () => Promise<void> }
]

export const useProducts: UseProducts = () => {
  const [items, setItems] = useState<ProductModel[]>([])
  const [status, { start, stop }] = useCRUDStatus("home-products")

  const handleFindAll = useCallback(async () => {
    start({ type: "read", message: "Loading products..." })

    Products.findAll().then(result => {
      setItems(result)
      stop({ type: "read" })
    })
  }, [start, stop])

  return [
    {
      items,
      isFindingAll: status.read.isRunning,
    },
    {
      findAll: handleFindAll,
    },
  ]
}
