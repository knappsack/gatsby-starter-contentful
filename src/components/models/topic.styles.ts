import { CSSObject } from "@emotion/react"
import { topicVariantContract } from "../../styles/contracts"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Variants, Options } from "../../styles/types"
import type { TopicSectionVariant } from "../contentful/contentful-topic-section"

type VariantStyle = TopicSectionVariant
type OptionStyle = Options<"">

const base: CSSObject = {
  "[data-icon]": {
    color: theme.colors.link,
  },
}

const variants: Variants<VariantStyle> = {
  ...topicVariantContract,
  card: {
    backgroundColor: theme.colors.unit,
    overflow: "hidden",
    maxWidth: 327,
    minWidth: 327,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    border: theme.colors.border,
    boxShadow: `0px 0px 16px ${theme.colors.border}`,
    borderRadius: 4,
  },
  block: {
    display: "flex",
    flexDirection: "column",
  },
  featured: {
    display: "flex",
    flexDirection: ["column", "row"],
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: theme.spacing.default,
    paddingBottom: theme.spacing.default,
  },
}

export type TopicStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const topicStyles = ({ variant, options }: TopicStylesProps) => {
  return mediaQuery([base, variants[variant]])
}

const baseTopicContent: CSSObject = {}

const variantsTopicContent: Variants<VariantStyle> = {
  ...topicVariantContract,
  block: {
    flex: "1 1 auto",
    gap: theme.spacing.default,
    padding: theme.spacing.default,
  },
  card: {
    flex: "1 1 auto",
    gap: theme.spacing.default,
    padding: theme.spacing.default,
  },
  featured: {
    width: "100%",
    maxWidth: ["35em", "45%"],
  }
}

export const topicContentStyles = ({ variant, options }: TopicStylesProps) => {
  return mediaQuery([baseTopicContent, variantsTopicContent[variant]])
}

export const topicCopyStyle: CSSObject = {
  flex: "1 1 auto",
}

export const topicCtaStyle: CSSObject = {
  flex: "0 1 0%",
  flexWrap: "wrap",
}
