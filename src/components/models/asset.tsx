import { CSSObject } from "@emotion/react"
import * as React from "react"

import { useInView } from "react-intersection-observer"
import { ContentfulAsset } from "../contentful/contentful-asset"
import { focusStyles } from './text-section.styles'

type GetAssetProps = {
  asset: ContentfulAsset
  model: ContentfulAsset[]
  variant: "small" | "large"
  ratio: Partial<"square" | "wide" | undefined>
}

const assetStyles = (ratio: any, options: any) =>
  ({
    height: "auto",
    maxWidth: "100%",
    aspectRatio: ratio && options.aspectRatio[ratio],
    objectFit: "cover",
    ':focus': focusStyles,
  } as CSSObject)

export const getAsset = ({
  asset,
  model,
  variant = "small",
  ratio = undefined,
}: GetAssetProps) => {
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

  const options = {
    dimensions: {
      small: {
        height: 420,
        width: 800,
      },
      large: {
        height: 840,
        width: 1600,
      },
    },
    aspectRatio: {
      square: "1 / 1",
      wide: "16 / 9",
    },
  }

  if (contentType.includes("video/")) {
    let poster: string | undefined = undefined

    if (assets.length > 1) {
      const getPoster = assets.filter(item =>
        item.contentType.includes("image/")
      )
      poster = `${getPoster[0].url}?q=90&w=${options.dimensions[variant].width}&h=${options.dimensions[variant].height}&fit=fill&f=center`
    }

    return (
      <video
        css={assetStyles(ratio, options)}
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
            css={assetStyles(ratio, options)}
            src={`${url}?q=90&w=${options.dimensions[variant].width}&h=${options.dimensions[variant].height}&fit=fill&f=center&fm=webp`}
            title={title}
          />
        )}
      </picture>
    )
  }

  return null
}
