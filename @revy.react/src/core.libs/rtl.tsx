import { ChakraProvider } from "@chakra-ui/react"
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react"
import { ReactElement } from "react"

/**
 * Custom Render
 *
 * It's often useful to define a custom render method that includes things like
 * global context providers, data stores, etc.
 *
 * In our case, we're wrapping everything with ChakraProvider since this is how
 * the components will be used throughout the codebase.
 *
 * https://testing-library.com/docs/react-testing-library/setup/#custom-render
 */

type Render = (input: ReactElement, options?: RenderOptions) => RenderResult

const render: Render = (input, options = {}) =>
  rtlRender(input, {
    wrapper: ({ children }) => <ChakraProvider>{children}</ChakraProvider>,
    ...options,
  })

export * from "@testing-library/react"
export { render }
