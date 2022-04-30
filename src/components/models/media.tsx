import * as React from "react"

import { createUuid } from "../../lib/create-uuid"
import { ContentfulAsset } from "../contentful/contentful-asset"
import { getAsset } from "./asset"

export type MediaProps = {
  model: ContentfulAsset[]
}

export const Media = ({ model }: MediaProps) => (
  <div data-style="media">
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
