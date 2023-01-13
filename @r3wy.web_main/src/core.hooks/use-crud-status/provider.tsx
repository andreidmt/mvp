import { createContext, useCallback, useReducer } from "react"

import { FCWithChildren } from "core.types/react"

import { useMemo } from "core.hooks/use-deep"

import { CRUDSlice, CRUDVerb, EVENTS, reducer } from "./reducer"

type ContextState = [
  Record<string, CRUDSlice>,
  {
    start: (id: string) => (input: { type: CRUDVerb; message?: string }) => void
    stop: (id: string) => (input: { type: CRUDVerb }) => void
  }
]

export const crudStatusContext = createContext({} as ContextState)

export const CRUDStatusProvider: FCWithChildren<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {})

  const handleStart = useCallback<ContextState[1]["start"]>(
    id =>
      ({ type, message }) => {
        dispatch({
          type: EVENTS.START,
          payload: {
            id,
            type,
            message,
          },
        })
      },
    []
  )

  const handleStop = useCallback<ContextState[1]["stop"]>(
    id =>
      ({ type }) => {
        dispatch({
          type: EVENTS.STOP,
          payload: {
            id,
            type,
          },
        })
      },
    []
  )

  return (
    <crudStatusContext.Provider
      value={useMemo(
        () => [
          state,
          {
            start: handleStart,
            stop: handleStop,
          },
        ],
        [state, handleStart, handleStop]
      )}>
      {children}
    </crudStatusContext.Provider>
  )
}
