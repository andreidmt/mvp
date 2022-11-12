import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react"
import { FC } from "react"

import { Rating } from "./ui.rating/rating"

export type CardProductProps = {
  name: string
  price: number
  rating: number
  thumbnailURL?: string
}

export const CardProduct: FC<CardProductProps> = ({
  name,
  price,
  rating,
  thumbnailURL,
}) => (
  <Stack spacing="4">
    <Box position="relative">
      <AspectRatio ratio={4 / 3}>
        <Image
          src={thumbnailURL}
          alt={name}
          draggable="false"
          fallback={<Skeleton />}
          borderRadius="md"
        />
      </AspectRatio>
    </Box>
    <Stack>
      <Stack spacing="1">
        <Text fontWeight="medium" color="gray.700">
          {name}
        </Text>
        <Text fontWeight="medium" color="gray.700">
          {price} $
        </Text>
      </Stack>
      <HStack>
        <Rating defaultValue={rating} size="sm" />
        <Text fontSize="sm" color="gray.600">
          12 Reviews
        </Text>
      </HStack>
    </Stack>
    <Stack align="center">
      <Button colorScheme="blue" width="full">
        View details
      </Button>
    </Stack>
  </Stack>
)
