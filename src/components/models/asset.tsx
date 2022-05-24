import React from 'react'
import { useInView } from "react-intersection-observer"
import { ContentfulAsset } from "../contentful/contentful-asset"

type GetAssetProps = {
  asset: ContentfulAsset
  model: ContentfulAsset[]
}

export const getAsset = ({ asset, model }: GetAssetProps) => {
  const { ref, inView = false } = useInView({ triggerOnce: true })

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

  const assets = model

  if (contentType.includes("video/")) {
    let poster: string | undefined = undefined

    if (assets.length > 1) {
      const getPoster = assets.filter(item =>
        item.contentType.includes("image/")
      )
      poster = `${getPoster[0].url}?q=90&w=800&h=420&fit=fill&f=center`
    }

    return (
      <video
        data-style="video"
        style={{
          height: "auto",
          maxWidth: "100%",
          aspectRatio: "16 / 9",
        }}
        poster={poster}
        controls
        playsInline
        ref={ref}
      >
        {inView && (
          <React.Fragment>
            <source data-style="source" src={url} type={contentType} />
            Your browser does not support the video tag.
          </React.Fragment>
        )}
      </video>
    )
  }

  if (contentType.includes("image/") && assets.length === 1) {
    return (
      <picture data-style="picture" ref={ref}>
        {inView && (
          <img
            alt={description}
            data-style="image"
            style={{
              height: "auto",
              maxWidth: "100%",
              aspectRatio: "16 / 9",
            }}
            src={`${url}?q=90&w=800&h=420&fit=fill&f=center&fm=webp`}
            title={title}
          />
        )}
      </picture>
    )
  }

  return null
}
