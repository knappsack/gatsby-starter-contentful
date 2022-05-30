import { CSSObject } from "@emotion/react"
import { topicVariantContract } from "../../styles/contracts"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Variants, Options } from "../../styles/types"
import type { TopicSectionVariant } from "../contentful/contentful-topic-section"

type VariantStyle = TopicSectionVariant
type OptionStyle = Options<"">

const base: CSSObject = {
  padding: theme.spacing.default,
  gap: theme.spacing.default,
}

const variants: Variants<VariantStyle> = {
  ...topicVariantContract,
  block: {
    flex: "1 1 auto",
  },
  card: {
    flex: "1 1 auto",
  },
  featured: {
    width: "100%",
    maxWidth: ["35em", "45%"],
  },
  headline: {
    paddingTop: theme.spacing.large,
    paddingBottom: theme.spacing.large,
  },
}

type TopicContentStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const topicContentStyles = ({
  variant,
  options,
}: TopicContentStylesProps) => {
  return mediaQuery([base, variants[variant], options])
}
