/* eslint-disable react/jsx-props-no-spreading, react/require-default-props */
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react"
import { FC } from "react"
import { Link as ReactRouterLink, To } from "react-router-dom"

type Internal = {
  to: To
  isRoute: true
}

type External = {
  to: string
  isRoute?: false
}

type LinkProps = ChakraLinkProps &
  (Internal | External) & {
    shouldOpenNewTab?: boolean
  }

const Link: FC<LinkProps> = props => {
  // Dont deconstruct yet to allow type-guard on isRoute
  // eslint-disable-next-line react/destructuring-assignment
  if (props.isRoute ?? true) {
    const { children, ...rest } = props

    return (
      <ChakraLink as={ReactRouterLink} {...rest}>
        {children}
      </ChakraLink>
    )
  }

  const { children, to, isRoute, ...rest } = props

  return (
    <ChakraLink href={to} {...rest}>
      {children}
    </ChakraLink>
  )
}

export { Link }
