import { render, screen } from "core.libs/rtl"

import { SVG } from "./svg"

describe("<SVG />", () => {
  test("given [SVG] should [render svg tag]", () => {
    render(
      <SVG data-testid="custom-svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M88.2427 15.7639C88.4054 15.7639 88.5669 15.7595 88.7273 15.7513H87.7576C87.9182 15.7595 88.0798 15.7639 88.2427 15.7639Z"
        />
      </SVG>
    )

    expect(screen.getByTestId("custom-svg").tagName).toEqual("svg")
  })
})
