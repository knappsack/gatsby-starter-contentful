import React from 'react'
import { ContentfulAsset } from '../contentful/contentful-asset'

export type AssetProps = {
  model: ContentfulAsset
}

export const Asset = ({ model }: AssetProps) => {
  const {
    sys: { id },
    __typename,
    contentType,
    description,
    fileName,
    height,
    size,
    title,
    url,
    width,
  } = model

  return (
    <picture data-style='picture'>
      <img
        alt={description}
        data-style="image"
        src={url + `?q=90&w=800&h=420&fit=fill&f=center&fm=webp`}
        title={title}
      />
    </picture>
  )
}
