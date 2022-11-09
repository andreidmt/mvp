import { FCWithChildren } from "core.types/react"

import { BaseLayout } from "layout.base/base"

type GuestLayoutProps = {}

export const GuestLayout: FCWithChildren<GuestLayoutProps> = ({ children }) => (
  <BaseLayout>{children}</BaseLayout>
)
