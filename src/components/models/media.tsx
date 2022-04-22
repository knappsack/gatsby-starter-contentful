import * as React from "react"
import { uuid } from "../../lib/create-uuid"
import { ContentfulAsset } from "../contentful/contentful-asset"
import { ContentfulTopic } from "../contentful/contentful-topic"
import { getAsset } from "./asset"

export type MediaProps = {
  model: ContentfulTopic
}

export const Media = ({ model }: MediaProps) => {
  const {
    mediaCollection: { items },
  } = model

  return (
    <div data-style="media">
      {items.map((asset: ContentfulAsset) => {
        const {
          sys: { id },
        } = asset

        return (
          <React.Fragment key={uuid(id)}>
            {getAsset(asset, items)}
          </React.Fragment>
        )
      })}
    </div>
  )
}
