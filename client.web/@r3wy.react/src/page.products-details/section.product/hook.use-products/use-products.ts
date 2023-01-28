import { useCallback, useState } from "react"

import { useCRUDStatus } from "core.hooks/use-crud-status/use-crud-status"

import { Products, ProductModel } from "./data"

type UseProducts = () => [
  { items: ProductModel[]; isFindingAll: boolean },
  { findOne: (id: string, options: { pluck?: string[] }) => Promise<void> }
]

export const useProducts: UseProducts = () => {
  const [items, setItems] = useState<ProductModel[]>([])
  const [status, { start, stop }] = useCRUDStatus("products-details")

  const handleFindOne = useCallback<ReturnType<UseProducts>[1]["findOne"]>(
    async id => {
      start({ type: "read", message: "Loading product..." })

      Products.findOne(id).then(result => {
        setItems([result])
        stop({ type: "read" })
      })
    },
    [start, stop]
  )

  return [
    {
      items,
      isFindingAll: status.read.isRunning,
    },
    {
      findOne: handleFindOne,
    },
  ]
}
