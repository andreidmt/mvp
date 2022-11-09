import { renderHook } from "@testing-library/react"

import { useMount } from "core.hooks/use-mount"

describe("useMount", () => {
  test("should run once per component creation", () => {
    let count = 0
    const { rerender } = renderHook(() => {
      useMount(() => {
        count += 1
      })
    })

    // initial render should run mount effect
    expect(count).toEqual(1)

    // rerender should not re-run effect
    rerender()
    expect(count).toEqual(1)

    // rerender with random props should not re-run effect
    rerender({ user: { locale: "nl-NL" } })
    expect(count).toEqual(1)
  })
})
