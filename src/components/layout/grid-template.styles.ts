import type { CSSObject } from "@emotion/react"
import { mediaQuery } from "../../styles/media-query"
import type { Options, Variants } from "../../styles/types"
import { theme } from "../../styles/global-css-variables.css"

type VariantStyle =
  | "block"
  | "branding"
  | "card"
  | "default"
  | "header"
  | "sitemap"
  | "text"
type OptionStyle = Options<"">

const grid: CSSObject = {
  display: "grid",
  gap: theme.spacing.large,
}

const base: CSSObject = {
  maxWidth: 1380,
  margin: "auto",
  paddingTop: theme.spacing.large,
  paddingBottom: theme.spacing.large,
}

const variants: Variants<VariantStyle> = {
  header: {
    ...grid,
    gridArea: "header",
  },
  sitemap: {
    ...grid,
    gridArea: "sitemap",
    width: "100%",
    padding: 0,
    gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"],
  },
  text: {
    ...grid,
    maxWidth: 712,
  },
  card: {
    display: "block",
    position: "relative",
    overflowX: "scroll",
    overscrollBehaviorX: "contain",
    whiteSpace: "nowrap",
    scrollSnapType: "x mandatory",
    WebkitOverflowScrolling: "touch",
  },
  block: {
    ...grid,
    gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"],
    justifyContent: "center",
    maxWidth: [380, 1380],
  },
  default: {},
  branding: {
    ...grid,
    gridTemplateColumns: [undefined, undefined, "20%"],
    gridTemplateAreas: [
      `
      "branding"
      "sitemap"
    `,
      `
      "branding"
      "sitemap"
    `,
      `"branding sitemap sitemap sitemap sitemap"`,
    ],
  },
}

export type GridTemplateStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const gridTemplateStyles = ({ variant }: GridTemplateStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
