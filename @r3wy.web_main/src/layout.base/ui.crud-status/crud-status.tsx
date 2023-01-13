import { Flex, FlexProps, Spinner, Text } from "@chakra-ui/react"
import { find, pipe, values } from "rambda"
import { FC } from "react"

import { CRUDSlice } from "core.hooks/use-crud-status/reducer"
import { useCRUDContext } from "core.hooks/use-crud-status/use-crud-context"

type CRUDStatusUIProps = {} & FlexProps

export const CRUDStatusUI: FC<CRUDStatusUIProps> = props => {
  const [allStatuses] = useCRUDContext()
  const firstStatus = pipe(
    (input: Record<string, CRUDSlice>) => values(input),
    find(
      item =>
        item.create.isRunning ||
        item.read.isRunning ||
        item.update.isRunning ||
        item.delete.isRunning
    )
  )(allStatuses)

  const message =
    firstStatus?.create.message ??
    firstStatus?.read.message ??
    firstStatus?.update.message ??
    firstStatus?.delete.message

  const isLoading =
    firstStatus?.create.isRunning ||
    firstStatus?.read.isRunning ||
    firstStatus?.update.isRunning ||
    firstStatus?.delete.isRunning ||
    false

  return isLoading ? (
    <Flex padding={2} gap={2} lineHeight={1} {...props}>
      <Spinner size="sm" />
      <Text>{message ?? "Loading ..."}</Text>
    </Flex>
  ) : null
}
