import { useContext } from "react"

import { crudStatusContext } from "./provider"

export const useCRUDContext = () => useContext(crudStatusContext)
