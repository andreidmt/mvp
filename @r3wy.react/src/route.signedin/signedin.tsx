import { useToast } from "@chakra-ui/react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { FCWithChildren } from "core.types/react"

import { useAuth } from "core.hooks/use-auth"

import { SignedinLayout } from "layout.signedin/signedin"

const SIGNIN_ERROR_TOAST_ID = "auth-signin-error"

type SignedinRouteProps = {}

const SignedinRoute: FCWithChildren<SignedinRouteProps> = ({ children }) => {
  const { isSignedin } = useAuth()
  const toast = useToast()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isSignedin) {
      if (!toast.isActive(SIGNIN_ERROR_TOAST_ID)) {
        toast({
          id: SIGNIN_ERROR_TOAST_ID,
          title: "Must be signed in to access that page",
          status: "error",
          isClosable: true,
        })
      }

      navigate(process.env["AUTH_LOGIN_ROUTE"] ?? "/")
    }
  }, [isSignedin, navigate, toast])

  return <SignedinLayout>{isSignedin ? children : undefined}</SignedinLayout>
}

export { SignedinRoute }
