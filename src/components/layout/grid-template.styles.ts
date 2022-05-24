import type { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Variants } from '../../styles/types'
import {
  navigationVariantContract,
  textVariantContract,
  topicVariantContract,
} from "../../styles/contracts"
import type { NavigationSectionVariant } from '../contentful/contentful-navigation-section'
import type { TextSectionVariant } from "../contentful/contentful-text-section"
import type { TopicSectionVariant } from "../contentful/contentful-topic-section"

const base: CSSObject = {
  display: "grid",
  gap: theme.spacing.large,
  maxWidth: 1380,
  margin: "auto",
}

const variants: Variants<GridTemplateStylesProps["variant"]> = {
  ...navigationVariantContract,
  ...textVariantContract,
  ...topicVariantContract,
  block: {
    paddingTop: theme.spacing.large,
    paddingBottom: theme.spacing.large,
    margin: "auto",
    gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
    textAlign: "center"
  },
}

export type GridTemplateStylesProps = {
  variant: TopicSectionVariant | TextSectionVariant | NavigationSectionVariant
}

export const gridTemplateStyles = ({ variant }: GridTemplateStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
