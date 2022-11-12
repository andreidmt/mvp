import { Box, Flex, Heading, Spacer } from "@chakra-ui/react"

import { FCWithChildren } from "core.types/react"

import { useAuth } from "core.hooks/use-auth/use-auth"

import { Avatar } from "./ui.avatar/avatar"
import { CRUDStatusUI } from "./ui.crud-status/crud-status"
import { Logo } from "./ui.logo/logo"

type BaseLayoutProps = {}

export const BaseLayout: FCWithChildren<BaseLayoutProps> = ({ children }) => {
  const [{ user, isSignedin, isSigningIn, isSigningOut }, { signIn, signOut }] =
    useAuth()

  return (
    <>
      <Box
        position="relative"
        bg="gray.100"
        borderBottom="1px solid"
        borderBottomColor="gray.300">
        <CRUDStatusUI
          position="absolute"
          left="50%"
          transform="translateX(-50%) translateY(50%)"
          bottom="0"
          bg="gray.100"
          border="1px solid"
          borderColor="gray.300"
          width="200px"
          alignSelf="center"
          borderRadius="md"
        />
        <Flex maxW="7xl" mx="auto" alignItems="center" gap={2} padding={2}>
          <Logo />
          <Box p="2">
            <Heading size="md">R3wy App</Heading>
          </Box>
          <Spacer />
          <Avatar
            name={user?.name}
            avatarURL={user?.avatarURL}
            isSignedIn={isSignedin}
            signIn={isSigningIn ? undefined : signIn}
            signOut={isSigningOut ? undefined : signOut}
          />
        </Flex>
      </Box>
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}>
        {children}
      </Box>
    </>
  )
}
