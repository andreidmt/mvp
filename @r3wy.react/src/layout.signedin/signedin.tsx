import { FCWithChildren } from "core.types/react"

import { BaseLayout } from "layout.base/base"

type SignedinLayoutProps = {}

export const SignedinLayout: FCWithChildren<SignedinLayoutProps> = ({
  children,
}) => <BaseLayout>{children}</BaseLayout>
