import { FC } from "react"

import { useQuery } from "core.hooks/use-query"

type AuthReturnPageProps = {}

export const AuthReturnPage: FC<AuthReturnPageProps> = () => {
  const [query] = useQuery()

  console.log("query", query)

  return <div>im back</div>
}
