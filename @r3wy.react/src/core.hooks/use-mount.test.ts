import { renderHook } from "@testing-library/react"

import { useMount } from "core.hooks/use-mount"

describe("useMount", () => {
  test("given [multiple component renders] should [run hook function once]", () => {
    let count = 0
    const { rerender } = renderHook(() => {
      useMount(() => {
        count += 1
      })
    })

    expect(count).toEqual(1)

    rerender()
    expect(count).toEqual(1)

    // passing different dependency array just for kicks
    rerender({ user: { locale: "nl-NL" } })
    expect(count).toEqual(1)
  })
})
