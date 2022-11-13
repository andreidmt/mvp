import checkIsDeepEqual from "fast-deep-equal"
import {
  useMemo as useReactMemo,
  useCallback as useReactCallback,
  useEffect as useReactEffect,
  useRef,
} from "react"

import { determineWhatChanged } from "core.libs/array"

const debug = require("debug")("@r3wy:core.hooks/use-deep")

/**
 * Memoization hook with deep equality check on dependency array.
 *
 *  - Compatible signature to React's "useMemo" with an optional "isDebug" flag.
 *  - Dont rely on other sources to provide memoized data
 *  - Use same `useMemo` name to benefit from "eslint-react-hooks"
 *
 * @example
 * const { user } = useAuth()
 *
 * // the memo function will run only when "user" object changed structurally
 * const userHash = useMemo(() => hash(user), [user])
 *
 * // still fires only once per structural change
 * const userHash = useMemo(() => hash(user), [{...user}])
 */

type UseMemo = <T>(fn: () => T, deps: any[]) => T

export const useMemo: UseMemo = (fn, deps, isDebug = false) => {
  // The ref object is a generic container whose current property is mutable
  // and can hold any value.
  const ref = useRef<typeof deps>([])

  // save current dependencies in ref only if they change
  if (!checkIsDeepEqual(ref.current, deps)) {
    if (isDebug) {
      debug(determineWhatChanged(ref.current, deps))
    }

    ref.current = deps
  }

  return useReactMemo(fn, ref.current)
}

/**
 * Callback hook with deep equality check on dependency array.
 */

type UseCallback = <T extends (...args: any[]) => any>(
  fn: T,
  deps: any[],
  isDebug?: boolean
) => T

export const useCallback: UseCallback = (fn, deps, isDebug = false) => {
  const ref = useRef<typeof deps>([])

  if (!checkIsDeepEqual(ref.current, deps)) {
    if (isDebug) {
      debug(determineWhatChanged(ref.current, deps))
    }

    ref.current = deps
  }

  return useReactCallback(fn, ref.current)
}

/**
 * Effect hook with deep equality check on dependency array.
 */

type UseEffect = (fn: () => any, deps: any[], isDebug?: boolean) => void

export const useEffect: UseEffect = (fn, deps, isDebug = false) => {
  const ref = useRef<typeof deps>([])

  if (!checkIsDeepEqual(ref.current, deps)) {
    if (isDebug) {
      debug(determineWhatChanged(ref.current, deps))
    }

    ref.current = deps
  }

  return useReactEffect(fn, ref.current)
}
