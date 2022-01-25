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
    <img
      alt={description || title}
      src={url + `?q=10&fit=pad&bg=rgb:222222&fm=webp`}
    />
  )
}
