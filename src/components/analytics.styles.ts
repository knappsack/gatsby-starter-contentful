import { CSSObject } from "@emotion/react"
import { navigationVariantContract, textVariantContract, topicVariantContract } from '../styles/contracts'
import { theme } from "../styles/global-css-variables.css"
import { mediaQuery } from "../styles/media-query"
import type { Variants, Options } from "../styles/types"
import type { NavigationSectionVariant } from './contentful/contentful-navigation-section'
import type { TextSectionVariant } from './contentful/contentful-text-section'
import type { TopicSectionVariant } from './contentful/contentful-topic-section'

type VariantStyle = TopicSectionVariant | NavigationSectionVariant | TextSectionVariant
  | "nav"
  | "section"
  | "unit"
type OptionStyle = Options<"fixed" | "border">

const base: CSSObject = {
  backgroundColor: theme.colors.region,
  paddingLeft: theme.spacing.large,
  paddingRight: theme.spacing.large,
}

const variants: Variants<VariantStyle> = {
  ...navigationVariantContract,
  footer: {
    borderTop: `1px solid transparent`,
  },
  ...textVariantContract,
  ...topicVariantContract,
  block: {
    display: "flex", 
    flexDirection: "column"
  },
  nav: {},
  section: {},
  unit: {},
}

const border: CSSObject = {
  borderColor: theme.colors.border,
}

const fixed: CSSObject = {
  maxWidth: 1380,
  margin: "auto",
}

export type AnalyticsStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const analyticsStyles = ({ variant, options }: AnalyticsStylesProps) => {
  return mediaQuery([
    base,
    variants[variant],
    options?.border && border,
    options?.fixed && fixed,
  ])
}
