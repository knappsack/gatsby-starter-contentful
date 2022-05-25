import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Variants } from "../../styles/types"

const base: CSSObject = {
  color: theme.colors.text,
  fontFamily: theme.fontFamily.body,
  fontWeight: "bold",
}

const variants: Variants<HeadingStylesProps["variant"]> = {
  large: {
    fontSize: 32,
  },
  medium: {
    fontSize: 24,
  },
  small: {
    fontSize: theme.size.default,
  },
}

export type HeadingStylesProps = {
  variant: "large" | "medium" | "small"
}

export const headingStyles = ({ variant }: HeadingStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
