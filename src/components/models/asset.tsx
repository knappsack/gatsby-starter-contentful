import React from 'react'
import { ContentfulAsset } from '../contentful/contentful-asset'

export const getAsset = (asset: ContentfulAsset) => {
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
  } = asset

  if (contentType.includes('image/jpeg')) {
    return (
      <picture data-style="picture">
        <img
          alt={description}
          data-style="image"
          src={url + `?q=90&w=800&h=420&fit=fill&f=center&fm=webp`}
          title={title}
        />
      </picture>
    )
  }

  return null
}
