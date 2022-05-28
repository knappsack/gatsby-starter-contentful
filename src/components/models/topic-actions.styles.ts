import { CSSObject } from "@emotion/react"
import { topicVariantContract } from "../../styles/contracts"
import { mediaQuery } from "../../styles/media-query"
import type { Variants, Options } from "../../styles/types"
import type { TopicSectionVariant } from "../contentful/contentful-topic-section"

type VariantStyle = TopicSectionVariant
type OptionStyle = Options<"">

const base: CSSObject = {
  flex: "0 1 0%",
  flexWrap: "wrap",
}

const variants: Variants<VariantStyle> = {
  ...topicVariantContract,
}

export type TopicActionsStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const topicActionsStyles = ({
  variant,
  options,
}: TopicActionsStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
