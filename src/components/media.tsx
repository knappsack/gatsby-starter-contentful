import React from 'react'
import { ContentfulAsset } from './models/contentful-asset'

export type MediaProps = {
  model: ContentfulAsset
}

export const Media = ({ model }: MediaProps) => {
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
        title={title}
        alt={description}
        src={url + `?q=90&w=800&h=420&fit=fill&f=center&fm=webp`}
      />
    </picture>
  )
}
