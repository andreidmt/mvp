import { FC } from "react"

import { useAuth } from "core.hooks/use-auth"

type HomePageProps = {}

export const HomePage: FC<HomePageProps> = () => {
  const { user } = useAuth()

  return <div>Home {user?.name}</div>
}
