import { CSSObject } from "@emotion/react"
import { topicVariantContract } from "../../styles/contracts"
import { mediaQuery } from "../../styles/media-query"
import type { Variants, Options } from "../../styles/types"
import type { TopicSectionVariant } from "../contentful/contentful-topic-section"

type VariantStyle = TopicSectionVariant
type OptionStyle = Options<"">

const base: CSSObject = {}

const variants: Variants<VariantStyle> = {
  ...topicVariantContract,
  card: {
    aspectRatio: "16 / 9",
    picture: {
      display: "flex",
      width: "100%",
      height: "100%",
      img: {
        width: "100%",
      },
    },
    video: {
      display: "flex",
      width: "100%",
      height: "100%",
    },
  },
  block: {
    aspectRatio: "16 / 9",
    picture: {
      display: "flex",
      width: "100%",
      height: "100%",
      img: {
        width: "100%",
      },
    },
    video: {
      display: "flex",
      width: "100%",
      height: "100%",
    },
  },
  featured: {
    display: "flex",
    width: "100%",
    maxWidth: ["35em", "45%"],
    picture: {
      margin: "auto",
    },
    video: {
      margin: "auto",
    },
  },
}

export type TopicMediaStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const topicMediaStyles = ({
  variant,
  options,
}: TopicMediaStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
