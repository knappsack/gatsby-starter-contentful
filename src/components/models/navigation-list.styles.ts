import type { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Options, Variants } from "../../styles/types"

type VariantStyle = "footer" | "header" | "sitemap"
type OptionStyle = Options<"mobile">

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

const mobile: Variants<VariantStyle> = {
  footer: {},
  header: {
    marginTop: 4,
    flexDirection: ["column", "column"],
    paddingLeft: theme.spacing.small,
    paddingRight: theme.spacing.small,
    a: {
      display: "block",
      paddingTop: theme.spacing.medium,
      paddingBottom: theme.spacing.medium,
    },
  },
  sitemap: {},
}

export type NavigationListStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const navigationListStyles = ({
  variant,
  options,
}: NavigationListStylesProps) => {
  return mediaQuery([
    base,
    variants[variant],
    options?.mobile && mobile[variant],
  ])
}
