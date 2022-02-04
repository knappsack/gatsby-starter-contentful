import React from 'react'
import { ContentfulAsset } from '../contentful/contentful-asset'
import { ContentfulTopic } from '../contentful/contentful-topic'
import { Asset } from './asset'

export type MediaProps = {
  model: ContentfulTopic
}

export const Media = ({ model }: MediaProps) => {
  const { mediaCollection } = model

  return (
    <div data-style="media">
      {mediaCollection.items.map((model: ContentfulAsset, index: number) => {
        const {
          sys: { id },
        } = model

        return <Asset key={id + index} model={model} />
      })}
    </div>
  )
}
