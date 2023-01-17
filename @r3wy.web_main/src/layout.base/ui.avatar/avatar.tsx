import { Avatar as ChakraAvatar, Button, Text } from "@chakra-ui/react"
import { FC } from "react"

export type AvatarProps = {
  name?: string
  avatarURL?: string
  isSigningOut?: boolean
  signOut: (...params: any[]) => any
}

export const Avatar: FC<AvatarProps> = ({
  name = undefined,
  avatarURL = undefined,
  isSigningOut = false,
  signOut,
}) => (
  <>
    <ChakraAvatar size="sm" name={name} src={avatarURL} />
    <Text>{name}</Text>
    <Button disabled={isSigningOut} colorScheme="red" onClick={signOut}>
      Sign out
    </Button>
  </>
)
