import { Box, Heading } from "@chakra-ui/react"
import { FC } from "react"

export type ReviewsUIProps = {
  items?: any[]
}

export const ReviewsUI: FC<ReviewsUIProps> = ({ items = [] }) => (
  <Box>
    <Heading as="h2">Reviews</Heading>
    {items.length}
  </Box>
)
