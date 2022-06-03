import * as React from "react"

import { createUuid } from "../../lib/create-uuid"
import type { ContentfulAsset } from "../contentful/contentful-asset"
import type { TopicSectionVariant } from "../contentful/contentful-topic-section"
import { getAsset } from "./asset"
import { AssetStylesProps } from './asset.styles'
import { topicMediaStyles } from "./topic-media.styles"

export type TopicMediaProps = {
  model: ContentfulAsset[]
  variant: TopicSectionVariant
}

export const TopicMedia = ({ model, variant }: TopicMediaProps) => {
  const variants: Record<TopicSectionVariant, AssetStylesProps['variant']> = {
    block: "small",
    card: "small",
    featured: "medium",
    headline: "large",
    quote: "large",
  }

  const options = {
    square: undefined,
    wide: ["block", "card", "featured"].includes(variant),
  }

  return (
    <div css={topicMediaStyles({ variant })}>
      {model.map((asset: ContentfulAsset) => {
        const {
          sys: { id },
        } = asset

        return (
          <React.Fragment key={createUuid(id)}>
            {getAsset({
              asset,
              model,
              variant: variants[variant],
              options,
            })}
          </React.Fragment>
        )
      })}
    </div>
  )
}
