import { useRef, useEffect } from "react"

type UsePrev = <T>(input: T) => T

export const usePrev: UsePrev = input => {
  const ref = useRef<any>()

  useEffect(() => {
    ref.current = input
  }, [input])

  // Return previous value (happens before update in useEffect above)
  return ref.current
}
