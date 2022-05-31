import { CSSObject } from "@emotion/react"
import { theme } from '../../styles/global-css-variables.css'
import { mediaQuery } from "../../styles/media-query"
import type { Variants } from "../../styles/types"

type VariantStyle = "footer" | "header" | "sitemap"

const base: CSSObject = {}

const variants: Variants<VariantStyle> = {
  footer: {
    display: "inline-block",
  },
  header: {
    display: "inline-block",
  },
  sitemap: {
    display: "block",
    a: {
      paddingTop: theme.spacing.small,
      paddingBottom: theme.spacing.small,
    }
  },
}

export type NavigationItemStylesProps = {
  variant: VariantStyle
}

export const navigationItemStyles = ({
  variant,
}: NavigationItemStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
