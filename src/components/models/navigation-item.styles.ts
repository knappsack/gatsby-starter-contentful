import { CSSObject } from "@emotion/react"
import { mediaQuery } from "../../styles/media-query"
import type { Variants } from "../../styles/types"

const base: CSSObject = {}

const variants: Variants<NavigationItemStylesProps["variant"]> = {
  footer: {
    display: "inline-block",
  },
  header: {
    display: "inline-block",
  },
  sitemap: {
    display: "block",
  },
}

export type NavigationItemStylesProps = {
  variant: "footer" | "header" | "sitemap"
}

export const navigationItemStyles = ({
  variant,
}: NavigationItemStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
