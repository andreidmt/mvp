import { SimpleGrid } from "@chakra-ui/react"
import { FC } from "react"
import { useParams } from "react-router-dom"

import { Link } from "core.ui/link/link"

import { ProductSection } from "./section.product/product"

// import { ReviewsSection } from "./section.reviews/reviews"

type ProductsDetailsPageProps = {}

export const ProductsDetailsPage: FC<ProductsDetailsPageProps> = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <Link to="/">Back to Homepage</Link>

      <SimpleGrid columns={2} gap={5}>
        <ProductSection id={id as string} />
        {
          // <ReviewsSection productId={id} />
        }
      </SimpleGrid>
    </>
  )
}
