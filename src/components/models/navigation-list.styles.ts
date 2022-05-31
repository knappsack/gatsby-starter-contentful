import type { CSSObject } from "@emotion/react"
import { mediaQuery } from "../../styles/media-query"
import type { Variants } from "../../styles/types"

type VariantStyle = "footer" | "header" | "sitemap"

const base: CSSObject = {
  display: "flex",
}

const variants: Variants<VariantStyle> = {
  footer: {
    flexDirection: ["column", "row"],
    margin: "0 -16px",
  },
  header: {
    flexDirection: ["column", "row"],
  },
  sitemap: {
    flexDirection: "column",
    margin: "0 -16px",
  },
}

export type NavigationListStylesProps = {
  variant: VariantStyle
}

export const navigationListStyles = ({
  variant,
}: NavigationListStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
