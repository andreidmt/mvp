import { useState, createContext } from "react"

import { delay } from "core.libs/promise"

import { FCWithChildren } from "core.types/react"

import { useCRUDStatus } from "core.hooks/use-crud-status/use-crud-status"
import { useCallback, useMemo } from "core.hooks/use-deep"

import { USER } from "./data"

type User = {
  id: string
  name: string
  email: string
  avatarURL?: string
}

type State = {
  user?: User
  isSigningIn: boolean
  isSignedin: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

export const authContext = createContext({} as State)

export const AuthProvider: FCWithChildren<{}> = ({ children }) => {
  const [user, setUser] = useState<User>()
  const [authStatus, notify] = useCRUDStatus("use-auth")

  /**
   *
   */
  const signIn = useCallback(async () => {
    notify.start({ type: "create", message: "Signing in..." })

    setUser(await delay(800).then(() => USER))

    notify.stop({ type: "create" })
  }, [notify])

  /**
   *
   */
  const signOut = useCallback(async () => {
    notify.start({ type: "delete", message: "Signing out..." })

    setUser(await delay(800).then(() => undefined))

    notify.stop({ type: "delete" })
  }, [notify])

  return (
    <authContext.Provider
      value={useMemo(
        () => ({
          user,
          isSignedin: !!user,
          isSigningIn: authStatus.read.isRunning,
          signIn,
          signOut,
        }),
        [user, authStatus.read.isRunning, signIn, signOut]
      )}>
      {children}
    </authContext.Provider>
  )
}
