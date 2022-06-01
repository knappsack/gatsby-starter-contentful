import type { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Options, Variants } from "../../styles/types"

type VariantStyle = "footer" | "header" | "sitemap"
type OptionStyle = Options<"">

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
    "@media (max-width: 1023px)": {
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
