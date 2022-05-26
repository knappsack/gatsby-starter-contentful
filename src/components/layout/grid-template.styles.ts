import type { CSSObject } from "@emotion/react"
import { mediaQuery } from "../../styles/media-query"
import type { Options, Variants } from "../../styles/types"
import {
  navigationVariantContract,
  textVariantContract,
  topicVariantContract,
} from "../../styles/contracts"
import type { NavigationSectionVariant } from "../contentful/contentful-navigation-section"
import type { TextSectionVariant } from "../contentful/contentful-text-section"
import type { TopicSectionVariant } from "../contentful/contentful-topic-section"
import { theme } from "../../styles/global-css-variables.css"

type VariantStyle = TopicSectionVariant | TextSectionVariant | NavigationSectionVariant
type OptionStyle = Options<"">

const base: CSSObject = {
  display: "grid",
  gap: theme.spacing.large,
  maxWidth: 1380,
  margin: "auto",
  paddingTop: theme.spacing.large,
  paddingBottom: theme.spacing.large,
}

const variants: Variants<GridTemplateStylesProps["variant"]> = {
  ...navigationVariantContract,
  sitemap: {
    padding: 0,
    gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"],
  },
  ...textVariantContract,
  text: {
    maxWidth: 712,
  },
  ...topicVariantContract,
  card: {
    display: "flex",
    margin: "auto",
    justifyContent: 'center',
    flexWrap: "wrap",
  },
  block: {
    gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"],
    justifyContent: "center",
    maxWidth: [380, 1380],
  },
}

export type GridTemplateStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const gridTemplateStyles = ({ variant }: GridTemplateStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
