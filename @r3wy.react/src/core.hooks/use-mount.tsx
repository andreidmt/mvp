/* eslint-disable react-hooks/exhaustive-deps  */
import { useEffect } from "react"

type UseMount = typeof useEffect

export const useMount: UseMount = source => useEffect(source, [])
