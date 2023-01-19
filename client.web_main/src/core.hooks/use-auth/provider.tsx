import { useState, createContext } from "react"

import { delay } from "core.libs/promise"

import { FCWithChildren } from "core.types/react"

import { useCRUDStatus } from "core.hooks/use-crud-status/use-crud-status"
import { useCallback, useMemo } from "core.hooks/use-deep"

// import { USER } from "./data"

type User = {
  id: string
  name: string
  email: string
  avatarURL?: string
}

type State = [
  {
    user?: User
    isSignedin: boolean
    isSigningIn: boolean
    isSigningOut: boolean
  },
  {
    getUser: () => Promise<void>
    signIn: () => void
    signOut: () => Promise<void>
  }
]

export const authContext = createContext({} as State)

export const AuthProvider: FCWithChildren<{}> = ({ children }) => {
  const [user, setUser] = useState<User>()
  const [authStatus, notify] = useCRUDStatus("use-auth")

  const getUser = useCallback(async () => {
    notify.start({ type: "read", message: "Signing out..." })
  }, [notify])

  /**
   *
   */
  const signIn = useCallback(() => {
    const oauthParams = new URLSearchParams({
      response_type: "code",
      scope: "user public_repo",
      client_id: process.env["OAUTH_CLIENT_ID"] as string,
      redirect_uri: process.env["OAUTH_REDIRECT_URL"] as string,
      state: "123",
    })
    const oauthURL = new URL(
      `${process.env["OAUTH_URL"]}?${oauthParams.toString()}`
    )

    // redirect to GitHub auth url
    window.location.assign(oauthURL.toString())
  }, [])

  /**
   *
   */
  const signOut = useCallback(() => {
    notify.start({ type: "delete", message: "Signing out..." })

    return delay(800).then(() => {
      setUser(undefined)
      notify.stop({ type: "delete" })
    })
  }, [notify])

  return (
    <authContext.Provider
      value={useMemo(
        () => [
          {
            user,
            isSignedin: !!user,
            isSigningIn: authStatus.create.isRunning,
            isSigningOut: authStatus.delete.isRunning,
          },
          {
            getUser,
            signIn,
            signOut,
          },
        ],
        [
          user,
          authStatus.create.isRunning,
          authStatus.delete.isRunning,
          getUser,
          signIn,
          signOut,
        ]
      )}>
      {children}
    </authContext.Provider>
  )
}
