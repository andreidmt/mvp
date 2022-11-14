import { FC } from "react"

import { useMount } from "core.hooks/use-mount"

import { useProducts } from "./hook.use-products/use-products"
import { ProductUI } from "./product.ui"

type ProductSectionProps = {
  id: string
}

export const ProductSection: FC<ProductSectionProps> = ({ id }) => {
  const [{ items }, { findOne }] = useProducts()
  const isLoaded = !!items[0]

  useMount(() => {
    findOne(id, {
      pluck: ["id", "name", "description", "price", "thumbnailURL"],
    })
  })

  return isLoaded ? <ProductUI id={id} /> : null
}
