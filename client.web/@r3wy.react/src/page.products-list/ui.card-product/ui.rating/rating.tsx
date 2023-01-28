/* eslint-disable react/jsx-props-no-spreading */
import { StarIcon } from "@chakra-ui/icons"
import { HStack, Icon, IconProps, StackProps } from "@chakra-ui/react"
import { FC } from "react"

export type RatingProps = {
  defaultValue?: number
  max?: number
  size?: IconProps["fontSize"]
  rootProps?: StackProps
}

export const Rating: FC<RatingProps> = ({
  defaultValue = 0,
  max = 5,
  size = "md",
  rootProps = undefined,
}) => {
  return (
    <HStack spacing="0.5" {...rootProps}>
      {Array.from({ length: max })
        .map((_, index) => index + 1)
        .map(index => (
          <Icon
            key={index}
            as={StarIcon}
            fontSize={size}
            color={index <= defaultValue ? "blue.500" : "gray.200"}
          />
        ))}
    </HStack>
  )
}
