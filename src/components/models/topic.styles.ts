import { CSSObject } from "@emotion/react"
import { topicVariantContract } from "../../styles/contracts"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Variants, Options } from "../../styles/types"
import type { TopicSectionVariant } from "../contentful/contentful-topic-section"

type VariantStyle = TopicSectionVariant
type OptionStyle = Options<"reversed">

const base: CSSObject = {
  position: "relative",
}

const variants: Variants<VariantStyle> = {
  ...topicVariantContract,
  card: {
    backgroundColor: theme.colors.light,
    border: theme.colors.border,
    borderRadius: 4,
    boxShadow: `0px 0px 16px ${theme.colors.border}`,
    display: "flex",
    flexDirection: "column",
    maxWidth: 327,
    minWidth: 327,
    overflow: "hidden",
    width: "100%",
    cursor: "pointer",
    transition: "all .3s cubic-bezier(0,0,.5,1)",
    ":hover, :focus": {
      boxShadow: "2px 4px 16px rgba(0,0,0,.16)",
      transform: "scale3d(1.01,1.01,1.01)",
    },
  },
  block: {
    display: "flex",
    flexDirection: "column",
  },
  featured: {
    alignItems: "center",
    display: "flex",
    flexDirection: ["column", "row"],
    justifyContent: "space-evenly",
    paddingBottom: theme.spacing.default,
    paddingTop: theme.spacing.default,
    ":nth-of-type(even) > div:nth-of-type(2n)": {
      order: -1,
    },
  },
  headline: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  quote: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
}

const reversed: Variants<VariantStyle> = {
  ...topicVariantContract,
  featured: {
    flexDirection: ["column-reverse", "row-reverse"],
  },
  headline: {
    flexDirection: "column-reverse",
  },
}

export type TopicStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const topicStyles = ({ variant, options }: TopicStylesProps) => {
  return mediaQuery([
    base,
    variants[variant],
    options?.reversed && reversed[variant],
  ])
}
