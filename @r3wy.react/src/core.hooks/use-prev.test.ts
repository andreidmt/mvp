import { renderHook } from "@testing-library/react"

import { usePrev } from "core.hooks/use-prev"

describe("usePrev", () => {
  test("should always return value from previous render", () => {
    const { result, rerender } = renderHook(
      ({ increment }) => usePrev(42 + increment),
      {
        initialProps: { increment: 0 },
      }
    )

    expect(result.current).toEqual(undefined)

    rerender({ increment: 1 })
    expect(result.current).toEqual(42)

    rerender({ increment: 1 })
    expect(result.current).toEqual(43)
  })
})
