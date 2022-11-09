import { Box, Center } from "@chakra-ui/react"

import { FCWithChildren } from "core.types/react"

import { Logo } from "./ui.logo/logo"

type BaseLayoutProps = {}

export const BaseLayout: FCWithChildren<BaseLayoutProps> = ({ children }) => (
  <>
    <Center
      lineHeight="14"
      height="14"
      marginBottom="7"
      border="1px"
      borderColor="gray.200">
      <Logo />
    </Center>
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}>
      {children}
    </Box>
  </>
)
