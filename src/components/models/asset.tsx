import * as React from "react"

import { useInView } from "react-intersection-observer"
import type { ContentfulAsset } from "../contentful/contentful-asset"
import { assetStyles } from "./asset.styles"
import type { AssetStylesProps } from "./asset.styles"

type GetAssetProps = {
  asset: ContentfulAsset
  model: ContentfulAsset[]
  variant: AssetStylesProps["variant"]
  options: AssetStylesProps["options"]
}

export const getAsset = ({ asset, model, variant, options }: GetAssetProps) => {
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

  const dimensions = {
    small: {
      height: 420,
      width: 800,
    },
    medium: {
      height: 630,
      width: 1200,
    },
    large: {
      height: 840,
      width: 1600,
    },
  }

  if (contentType.includes("video/")) {
    let poster: string | undefined = undefined

    if (assets.length > 1) {
      const getPoster = assets.filter(item =>
        item.contentType.includes("image/")
      )
      poster = `${getPoster[0].url}?q=90&w=${dimensions[variant].width}&h=${dimensions[variant].height}&fit=fill&f=center`
    }

    return (
      <video
        css={assetStyles({ variant, options })}
        poster={poster}
        controls
        playsInline
        ref={ref}
      >
        {inView && (
          <React.Fragment>
            <source src={url} type={contentType} />
            Your browser does not support the video tag.
          </React.Fragment>
        )}
      </video>
    )
  }

  if (contentType.includes("image/") && assets.length === 1) {
    return (
      <picture ref={ref}>
        {inView && (
          <img
            alt={description}
            css={assetStyles({ variant, options })}
            src={`${url}?q=90&w=${dimensions[variant].width}&h=${dimensions[variant].height}&fit=fill&f=center&fm=webp`}
            title={title}
          />
        )}
      </picture>
    )
  }

  return null
}
