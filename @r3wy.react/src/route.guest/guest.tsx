import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { FCWithChildren } from "core.types/react"

import { useAuth } from "core.hooks/use-auth/use-auth"

import { GuestLayout } from "layout.guest/guest"

const debug = require("debug")("@r3wy:GuestRoute")

export type GuestRouteProps = {
  isExclusive?: boolean
}

export const GuestRoute: FCWithChildren<GuestRouteProps> = ({
  children,
  isExclusive = false,
}) => {
  const [{ isSignedin }] = useAuth()
  const navigate = useNavigate()
  const shouldRedirect = isExclusive ? !isSignedin : false

  useEffect(() => {
    if (shouldRedirect) {
      debug("Not allowed to access route", {
        isExclusive,
        isSignedin,
        shouldRedirect,
      })

      navigate(process.env["HOMEPAGE_ROUTE"] ?? "/")
    }
  }, [isExclusive, isSignedin, shouldRedirect, navigate])

  return shouldRedirect ? null : <GuestLayout>{children}</GuestLayout>
}
