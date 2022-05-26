import { CSSObject } from "@emotion/react"
import { topicVariantContract } from "../../styles/contracts"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Variants, Options } from "../../styles/types"
import type { TopicSectionVariant } from "../contentful/contentful-topic-section"

type VariantStyle = TopicSectionVariant
type OptionStyle = Options<"">

const base: CSSObject = {
  backgroundColor: theme.colors.unit,
}

const variants: Variants<VariantStyle> = {
  ...topicVariantContract,
  card: {
    overflow: "hidden",
    maxWidth: 327,
    minWidth: 327,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    border: theme.colors.border,
    boxShadow: `0px 0px 16px ${theme.colors.border}`,
    borderRadius: 4,
    "[data-icon]": {
      color: theme.colors.link,
    },
  },
  block: {
    display: "flex",
    flexDirection: "column",
    "[data-icon]": {
      color: theme.colors.link,
    },
  },
}

export type TopicStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const topicStyles = ({ variant, options }: TopicStylesProps) => {
  return mediaQuery([base, variants[variant]])
}

export const topicContentStyle: CSSObject = {
  flex: "1 1 auto",
  gap: theme.spacing.default,
  padding: theme.spacing.default,
}

export const topicCopyStyle: CSSObject = {
  flex: "1 1 auto",
}

export const topicCtaStyle: CSSObject = {
  flex: "0 1 0%",
  flexWrap: "wrap",
}
