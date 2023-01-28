import { Box, Heading } from "@chakra-ui/react"
import { FC } from "react"

export type ProductUIProps = {
  id: string
}

export const ProductUI: FC<ProductUIProps> = ({ id }) => (
  <Box>
    <Heading as="h2" size="lg">
      Product
    </Heading>
    {id}
  </Box>
)
