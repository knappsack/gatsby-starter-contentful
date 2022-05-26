import * as React from "react"

import { createUuid } from "../../lib/create-uuid"
import type { ContentfulAsset } from "../contentful/contentful-asset"
import type { TopicSectionVariant } from '../contentful/contentful-topic-section'
import { getAsset } from "./asset"
import { topicMediaStyles } from './topic-media.styles'

export type TopicMediaProps = {
  model: ContentfulAsset[]
  variant: TopicSectionVariant
}

export const TopicMedia = ({ model, variant }: TopicMediaProps) => (
  <div css={topicMediaStyles({ variant })}>
    {model.map((asset: ContentfulAsset) => {
      const {
        sys: { id },
      } = asset

      return (
        <React.Fragment key={createUuid(id)}>
          {getAsset({ asset, model })}
        </React.Fragment>
      )
    })}
  </div>
)
