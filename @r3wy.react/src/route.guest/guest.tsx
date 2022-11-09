import { useToast } from "@chakra-ui/react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { FCWithChildren } from "core.types/react"

import { useAuth } from "core.hooks/use-auth"

import { GuestLayout } from "layout.guest/guest"

type GuestRouteProps = {
  isExclusive?: boolean
}

const GuestRoute: FCWithChildren<GuestRouteProps> = ({
  children,
  isExclusive = false,
}) => {
  const { isSignedin } = useAuth()
  const toast = useToast()
  const navigate = useNavigate()

  useEffect(() => {
    const isAllowed = !(isExclusive && isSignedin)

    if (!isAllowed) {
      navigate(process.env["AUTH_USER_HOMEPAGE_ROUTE"] ?? "/")
    }
  }, [isExclusive, isSignedin, navigate, toast])

  return <GuestLayout>{children}</GuestLayout>
}

export { GuestRoute }
