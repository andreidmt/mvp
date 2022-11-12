import { SimpleGrid } from "@chakra-ui/react"
import { FC } from "react"

import { useMount } from "core.hooks/use-mount"

import { useProducts } from "./hook.use-products/use-products"
import { CardProduct } from "./ui.card-product/card-product"

type HomePageProps = {}

export const HomePage: FC<HomePageProps> = () => {
  const [{ items }, { findAll }] = useProducts()

  useMount(() => {
    findAll()
  })

  return (
    <SimpleGrid columns={4} gap={5}>
      {items.map(({ id, thumbnailURL, name, price, rating }) => (
        <CardProduct
          key={id}
          thumbnailURL={thumbnailURL}
          name={name}
          price={price}
          rating={rating}
        />
      ))}
    </SimpleGrid>
  )
}
