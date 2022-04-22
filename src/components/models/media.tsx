import * as React from 'react'
import { ContentfulAsset } from '../contentful/contentful-asset'
import { ContentfulTopic } from '../contentful/contentful-topic'
import { getAsset } from './asset'

export type MediaProps = {
  model: ContentfulTopic
}

export const Media = ({ model }: MediaProps) => {
  const {
    mediaCollection,
    mediaCollection: { items },
  } = model

  return (
    <div data-style="media">
      {mediaCollection.items.map((asset: ContentfulAsset, index: number) => {
        const {
          sys: { id },
        } = asset

        return <React.Fragment key={id + index}>{getAsset(asset, items)}</React.Fragment>
      })}
    </div>
  )
}
