import { CSSObject } from "@emotion/react"
import { topicVariantContract } from "../../styles/contracts"
import { mediaQuery } from "../../styles/media-query"
import type { Variants, Options } from "../../styles/types"
import type { TopicSectionVariant } from "../contentful/contentful-topic-section"

type VariantStyle = TopicSectionVariant
type OptionStyle = Options<"">

const base: CSSObject = {
  picture: {
    width: "100%",
  }
}

const variants: Variants<VariantStyle> = {
  ...topicVariantContract,
  card: {
    aspectRatio: "16 / 9",
    picture: {
      display: "flex",
    },
  },
  block: {
    aspectRatio: "16 / 9",
    picture: {
      display: "flex",
    },
  },
  featured: {
    maxWidth: ["35em", "45%"]
  }
}

export type TopicMediaStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const topicMediaStyles = ({ variant, options }: TopicMediaStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
