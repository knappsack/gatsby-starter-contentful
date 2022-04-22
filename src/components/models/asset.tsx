import * as React from "react"
import { ContentfulAsset } from "../contentful/contentful-asset"

type AssetProps = {
  (asset: ContentfulAsset, model: ContentfulAsset[]): React.ReactNode
}

export const getAsset: AssetProps = (asset, model) => {
  const {
    sys: { id },
    contentType,
    description,
    fileName,
    height,
    size,
    title,
    url,
    width,
  } = asset

  if (contentType.includes("video/")) {
    let poster: string = undefined

    if (model.length > 1) {
      const getPoster = model.filter(item =>
        item.contentType.includes("image/")
      )
      poster = `${getPoster[0].url}?q=90&w=800&h=420&fit=fill&f=center`
    }

    return (
      <video data-style="video" poster={poster} controls playsInline>
        <source data-style="source" src={url} type={contentType} />
        Your browser does not support the video tag.
      </video>
    )
  }

  if (contentType.includes("image/") && model.length === 1) {
    return (
      <picture data-style="picture">
        <img
          alt={description}
          data-style="image"
          src={`${url}?q=90&w=800&h=420&fit=fill&f=center&fm=webp`}
          title={title}
        />
      </picture>
    )
  }

  return null
}
