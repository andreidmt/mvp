import { Avatar as ChakraAvatar, Button, Text } from "@chakra-ui/react"
import { FC } from "react"

export type AvatarProps = {
  name?: string
  avatarURL?: string
  isSignedIn: boolean
  signIn?: (...params: any[]) => any
  signOut?: (...params: any[]) => any
}

export const Avatar: FC<AvatarProps> = ({
  name,
  avatarURL,
  isSignedIn,
  signIn,
  signOut,
}) =>
  isSignedIn ? (
    <>
      <ChakraAvatar size="sm" name={name} src={avatarURL} />
      <Text>{name}</Text>
      <Button disabled={!signOut} colorScheme="red" onClick={signOut}>
        Sign out
      </Button>
    </>
  ) : (
    <Button disabled={!signIn} colorScheme="red" onClick={signIn}>
      Sign in
    </Button>
  )
