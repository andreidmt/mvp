import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { FCWithChildren } from "core.types/react"

import { useAuth } from "core.hooks/use-auth/use-auth"

import { SignedinLayout } from "layout.signedin/signedin"

const debug = require("debug")("@r3wy:SignedinRoute")

export type SignedinRouteProps = {}

export const SignedinRoute: FCWithChildren<SignedinRouteProps> = ({
  children,
}) => {
  const [{ isSignedin }] = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isSignedin) {
      debug("Not allowed to access route", { isSignedin })

      navigate(process.env["LOGIN_ROUTE"] ?? "/")
    }
  }, [isSignedin, navigate])

  return isSignedin ? <SignedinLayout>{children}</SignedinLayout> : null
}
