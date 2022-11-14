import { stringify, parse, ParsedQs } from "qs"
import { useMemo } from "react"
import { useLocation, useNavigate, NavigateOptions } from "react-router-dom"

import { useCallback } from "./use-deep"

type UseQuery = () => [
  ParsedQs,
  (
    input: Record<string, any>,
    options?: NavigateOptions & { shouldReplace?: boolean }
  ) => void
]

const useQuery: UseQuery = () => {
  const { search } = useLocation()
  const navigate = useNavigate()

  const queryParameters = useMemo(
    () => parse(search, { ignoreQueryPrefix: true }),
    [search]
  )

  const setQueryParameters = useCallback(
    (input, options = {}) => {
      const { shouldReplace = false, ...navOptions } = options

      navigate(
        `?${stringify(
          shouldReplace ? input : { ...queryParameters, ...input },
          { encodeValuesOnly: true }
        )}`,
        navOptions
      )
    },
    [queryParameters, navigate]
  )

  return [queryParameters, setQueryParameters]
}

export { useQuery }
