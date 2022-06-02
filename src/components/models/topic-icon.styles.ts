import { CSSObject } from "@emotion/react"
import { topicVariantContract } from "../../styles/contracts"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Variants, Options } from "../../styles/types"
import type { TopicSectionVariant } from "../contentful/contentful-topic-section"

type VariantStyle = TopicSectionVariant
type OptionStyle = Options<"">

const base: CSSObject = {
  color: theme.colors.focus,
}

const variants: Variants<VariantStyle> = {
  ...topicVariantContract,
}

export type TopicIconStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const topicIconStyles = ({ variant, options }: TopicIconStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
