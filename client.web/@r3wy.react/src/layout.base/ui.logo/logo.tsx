/* eslint-disable react/jsx-props-no-spreading, react/require-default-props */
import { Image, ImageProps } from "@chakra-ui/react"
import { FC } from "react"

import logoPNG from "./logo.png"

export type LogoProps = {} & ImageProps

export const Logo: FC<LogoProps> = props => (
  <Image src={logoPNG} alt="R3wy logo" {...props} />
)
