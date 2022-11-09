import { Button, ButtonProps } from "@chakra-ui/react"
import { FC } from "react"
import { Link as ReactRouterLink } from "react-router-dom"

type ButtonLinkProps = ButtonProps & {
  to: string
}

const ButtonLink: FC<ButtonLinkProps> = ({ children, ...rest }) => (
  <Button as={ReactRouterLink} {...rest}>
    {children}
  </Button>
)

export { ButtonLink }
