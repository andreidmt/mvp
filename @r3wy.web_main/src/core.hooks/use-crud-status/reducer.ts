import { isNil } from "rambda"

export type CRUDVerb = "create" | "read" | "update" | "delete"
export type CRUDStatus =
  | "isCreating"
  | "isReading"
  | "isUpdating"
  | "isDeleting"

export type CRUDSlice = {
  [key in CRUDVerb]: { isRunning: boolean; message?: string }
}
export type State = Record<string, CRUDSlice>

export const EVENTS = {
  START: "START",
  STOP: "STOP",
} as const

type DispatchPayload =
  | {
      type: typeof EVENTS.START
      payload: {
        id: string
        type: CRUDVerb
        message?: string
      }
    }
  | {
      type: typeof EVENTS.STOP
      payload: {
        id: string
        type: CRUDVerb
      }
    }

export const reducer = <T extends State>(
  prevState: T,
  { type, payload }: DispatchPayload
) => {
  switch (type) {
    case EVENTS.START: {
      const prevSlice = prevState[payload.id] ?? {
        create: { isRunning: false },
        read: { isRunning: false },
        update: { isRunning: false },
        delete: { isRunning: false },
      }

      return {
        ...prevState,
        [payload.id]: {
          ...prevSlice,
          [payload.type]: {
            isRunning: true,
            message: payload.message,
          },
        },
      }
    }

    case EVENTS.STOP: {
      if (isNil(prevState[payload.id])) {
        throw new Error(
          `useCRUDStatus/reducer: Cannot end "${payload.type}" for "${payload.id}" because it has not been started, check your data flow as this should not happen.`
        )
      }

      const prevSlice = prevState[payload.id]

      return {
        ...prevState,
        [payload.id]: {
          ...prevSlice,
          [payload.type]: {
            isRunning: false,
          },
        },
      }
    }

    default:
      throw new Error(
        `useCRUDStatus/reducer: Unknown action type dispatched: "${type}"`
      )
  }
}
