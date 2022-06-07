import type { CSSObject } from "@emotion/react"
import { mediaQuery } from "../../styles/media-query"
import type { Options, Variants } from "../../styles/types"
import { theme } from "../../styles/global-css-variables.css"

type VariantStyle =
  | "block"
  | "branding"
  | "card"
  | "grid"
  | "header"
  | "sitemap"
  | "text"
type OptionStyle = Options<"">

const base: CSSObject = {
  display: "grid",
  maxWidth: 1380,
  margin: "auto",
  paddingTop: theme.spacing.large,
  paddingBottom: theme.spacing.large,
}

const variants: Variants<VariantStyle> = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 1380,
    margin: "auto",
    paddingTop: 10,
    paddingBottom: 10,
  },
  sitemap: {
    gridArea: "sitemap",
    gap: theme.spacing.large,
    width: "100%",
    padding: 0,
    gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"],
  },
  text: {
    gap: theme.spacing.large,
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
    gap: theme.spacing.large,
    gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"],
    justifyContent: "center",
    maxWidth: [380, 1380],
  },
  grid: {
    gap: theme.spacing.large,
  },
  branding: {
    gap: theme.spacing.large,
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
