import { useContext } from "react"

import { useMemo } from "core.hooks/use-deep"

import { crudStatusContext } from "./provider"
import { CRUDVerb, CRUDSlice } from "./reducer"

type State = [
  CRUDSlice,
  {
    start: (input: { type: CRUDVerb; message?: string }) => void
    stop: (input: { type: CRUDVerb }) => void
  }
]

type UseCRUDStatus = (id: string) => State

export const useCRUDStatus: UseCRUDStatus = id => {
  const [allStatuses, { start, stop }] = useContext(crudStatusContext)
  const status = allStatuses[id]

  const handleStart = useMemo(() => start(id), [start, id])
  const handleStop = useMemo(() => stop(id), [stop, id])

  return useMemo(
    () => [
      status ?? {
        create: { isRunning: false },
        read: { isRunning: false },
        update: { isRunning: false },
        delete: { isRunning: false },
      },
      {
        start: handleStart,
        stop: handleStop,
      },
    ],
    [status, handleStart, handleStop]
  )
}
