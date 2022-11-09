import { renderHook } from "@testing-library/react"

import { useMemo, useCallback, useEffect } from "core.hooks/use-deep"

describe("useMemo with deep equality check", () => {
  test("should return same value if no structural change in dependency array", () => {
    const user = { locale: "en-US" }
    const { result, rerender } = renderHook(
      props => useMemo(() => props.user, [props]),
      {
        initialProps: { user },
      }
    )

    // initial render should return passed props
    expect(result.current).toBe(user)

    // rerender with same props should return same object as initial render
    rerender({ user: { locale: "en-US" } })
    expect(result.current).toBe(user)

    // rerender with different props should return updated object
    rerender({ user: { locale: "nl-NL" } })
    expect(result.current).toStrictEqual({ locale: "nl-NL" })
  })
})

describe("useCallback with deep equality check", () => {
  test("should return same handler if no structural change in dependency array", () => {
    const { result, rerender } = renderHook(
      props => useCallback(() => props, [props]),
      {
        initialProps: { user: { locale: "en-US" } },
      }
    )
    const initialRenderMemoizedHandler = result.current

    // initial render should return handler function
    expect(result.current()).toStrictEqual({ user: { locale: "en-US" } })

    // rerender with same props should return same handler as initial render
    rerender({ user: { locale: "en-US" } })
    expect(result.current).toBe(initialRenderMemoizedHandler)
    expect(result.current()).toStrictEqual({ user: { locale: "en-US" } })

    // rerender with different props should return new handlers
    rerender({ user: { locale: "nl-NL" } })
    expect(result.current).not.toBe(initialRenderMemoizedHandler)
    expect(result.current()).toStrictEqual({ user: { locale: "nl-NL" } })
  })
})

describe("useEffect with deep equality check", () => {
  test("should run once per structural change in dependency array", () => {
    let count = 0
    const { rerender } = renderHook(
      props => {
        useEffect(() => {
          count += 1
        }, [props])
      },
      {
        initialProps: { user: { locale: "en-US" } },
      }
    )

    // initial render should run effect
    expect(count).toEqual(1)

    // rerender with same props should not re-run effect
    rerender({ user: { locale: "en-US" } })
    expect(count).toEqual(1)

    // rerender with different props should re-run effect
    rerender({ user: { locale: "nl-NL" } })
    expect(count).toEqual(2)
  })
})
