import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { FCWithChildren } from "core.types/react"

import { useAuth } from "core.hooks/use-auth/use-auth"

import { SignedinLayout } from "layout.signedin/signedin"

type SignedinRouteProps = {}

const SignedinRoute: FCWithChildren<SignedinRouteProps> = ({ children }) => {
  const [{ isSignedin }] = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isSignedin) {
      navigate(process.env["AUTH_LOGIN_ROUTE"] ?? "/")
    }
  }, [isSignedin, navigate])

  return <SignedinLayout>{isSignedin ? children : undefined}</SignedinLayout>
}

export { SignedinRoute }
