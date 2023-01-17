/* eslint-disable react/jsx-props-no-spreading */
import { Box, BoxProps } from "@chakra-ui/react"
import { FC, SVGAttributes } from "react"

export type SVGProps = BoxProps &
  Omit<SVGAttributes<SVGElement>, keyof BoxProps> & {}

export const SVG: FC<SVGProps> = ({ children = undefined, ...rest }) => (
  <Box as="svg" display="inline-block" {...rest}>
    {children}
  </Box>
)
