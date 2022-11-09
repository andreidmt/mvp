import { useState, useContext, createContext } from "react"

import { FCWithChildren } from "core.types/react"

import { useCallback, useMemo } from "./use-deep"

type User = {
  name: string
  email: string
}

type State = {
  user?: User
  isSignedin: boolean
  signIn: (props: { email: string; password: string }) => Promise<void>
  signOut: () => Promise<void>
}

const context = createContext<State>({
  user: undefined,
  isSignedin: false,
  signIn: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
})

const Provider: FCWithChildren<{}> = ({ children }) => {
  // const navigate = useNavigate()
  const [user, setUser] = useState<User>()
  // const prevUser = usePrev(user)

  const signIn = useCallback(
    ({ email }) =>
      Promise.resolve({
        email,
        name: "Jon Doe",
      }).then(result => {
        setUser(result)
      }),
    []
  )

  const signOut = useCallback(
    () => Promise.resolve().then(() => setUser(undefined)),
    []
  )

  // useEffect(() => {
  //   if (prevUser !== user) {
  //     navigate(process.env.AUTH_LOGIN_REDIRECT ?? "/")
  //   }
  // }, [prevUser, user, navigate])

  return (
    <context.Provider
      value={useMemo(
        () => ({
          user,
          isSignedin: !!user,
          signIn,
          signOut,
        }),
        [user, signIn, signOut]
      )}>
      {children}
    </context.Provider>
  )
}

const useAuth = () => useContext(context)

export { useAuth, Provider as AuthProvider }
