import * as React from "react"

import { createUuid } from "../../lib/create-uuid"
import type { ContentfulAsset } from "../contentful/contentful-asset"
import type { TopicSectionVariant } from '../contentful/contentful-topic-section'
import { getAsset } from "./asset"
import { mediaStyles } from './media.styles'

export type MediaProps = {
  model: ContentfulAsset[]
  variant: TopicSectionVariant
}

export const Media = ({ model, variant }: MediaProps) => (
  <div css={mediaStyles({ variant })}>
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
