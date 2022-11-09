import { EditIcon } from "@chakra-ui/icons"
import { Box, Text } from "@chakra-ui/react"
import { FC } from "react"

export type LogoProps = {}

export const Logo: FC<LogoProps> = () => (
  <Box>
    <EditIcon w={8} h={8} mr={2} color="red.500" />
    <Text as="span" fontSize="xl">
      Revy
    </Text>
  </Box>
)
