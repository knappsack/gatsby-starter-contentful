import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Variants } from "../../styles/types"

const base: CSSObject = {
  display: "flex",
  flexDirection: "column",
}

const variants: Variants<NavigationListStylesProps["variant"]> = {
  footer: {
    flexDirection: ["column", "row"],
    margin: "0 -12px",
  },
  header: {
    flexDirection: ["column", "row"],
  },
  sitemap: {},
}

export type NavigationListStylesProps = {
  variant: "footer" | "header" | "sitemap"
}

export const navigationListStyles = ({
  variant,
}: NavigationListStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
