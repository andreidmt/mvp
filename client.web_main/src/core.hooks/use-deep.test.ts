import { renderHook } from "@testing-library/react"

import { useMemo, useCallback, useEffect } from "core.hooks/use-deep"

describe("useMemo with deep equality check", () => {
  test("given [different objects with same shape] should [not trigger memo function and return the initial value]", () => {
    const user = { locale: "en-US" }
    const { result, rerender } = renderHook(
      props => useMemo(() => props.user, [props]),
      { initialProps: { user } }
    )

    expect(result.current).toBe(user)

    rerender({ user: { locale: "en-US" } })
    expect(result.current).toBe(user)
  })

  test("given [different objects with different shape] should [trigger memo function and return the new value]", () => {
    const user = { locale: "en-US" }
    const { result, rerender } = renderHook(
      props => useMemo(() => props.user, [props]),
      { initialProps: { user } }
    )

    rerender({ user: { locale: "nl-NL" } })
    expect(result.current).toStrictEqual({ locale: "nl-NL" })
  })
})

describe("useCallback with deep equality check", () => {
  test("given [different objects with same shape] should [not trigger hook and return the initial handler]", () => {
    const { result, rerender } = renderHook(
      props => useCallback(() => props, [props]),
      {
        initialProps: { user: { locale: "en-US" } },
      }
    )
    const initialRenderMemoizedHandler = result.current

    expect(result.current()).toStrictEqual({ user: { locale: "en-US" } })

    rerender({ user: { locale: "en-US" } })
    expect(result.current).toBe(initialRenderMemoizedHandler)
    expect(result.current()).toStrictEqual({ user: { locale: "en-US" } })
  })

  test("given [different objects with different shape] should [trigger callback hook and return a new handler]", () => {
    const { result, rerender } = renderHook(
      props => useCallback(() => props, [props]),
      {
        initialProps: { user: { locale: "en-US" } },
      }
    )
    const initialRenderMemoizedHandler = result.current

    rerender({ user: { locale: "nl-NL" } })
    expect(result.current).not.toBe(initialRenderMemoizedHandler)
    expect(result.current()).toStrictEqual({ user: { locale: "nl-NL" } })
  })
})

describe("useEffect with deep equality check", () => {
  test("given [different objects with same shape in dependency array] should [not retrigger the hook]", () => {
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

    expect(count).toEqual(1)

    rerender({ user: { locale: "en-US" } })
    expect(count).toEqual(1)
  })

  test("given [different objects with different shape in dependency array] should [retrigger the hook]", () => {
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

    expect(count).toEqual(1)

    rerender({ user: { locale: "nl-NL" } })
    expect(count).toEqual(2)
  })
})
