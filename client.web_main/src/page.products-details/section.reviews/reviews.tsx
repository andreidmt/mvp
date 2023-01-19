import { FC } from "react"

import { useMount } from "core.hooks/use-mount"

import { useReviews } from "./hook.use-reviews/use-reviews"
import { ReviewsUI } from "./reviews.ui"

type ReviewsSectionProps = {
  productId?: string
}

export const ReviewsSection: FC<ReviewsSectionProps> = ({
  productId = undefined,
}) => {
  const [{ items }, { findAll }] = useReviews()

  useMount(() => {
    findAll({
      where: {
        productId,
      },
      pluck: ["id", "name", "description", "price", "thumbnailURL"],
      include: ["User"],
    })
  })

  return <ReviewsUI items={items} />
}
