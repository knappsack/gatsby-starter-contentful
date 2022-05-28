import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Variants } from "../../styles/types"

type VariantStyle = "xlarge" | "large" | "medium" | "small"

const base: CSSObject = {
  color: theme.colors.text,
  fontFamily: theme.fontFamily.body,
  fontWeight: "bold",
}

const variants: Variants<VariantStyle> = {
  xlarge: {
    fontSize: 42,
  },
  large: {
    fontSize: 32,
  },
  medium: {
    fontSize: 24,
  },
  small: {
    fontSize: theme.size.default,
    fontWeight: 400,
  },
}

export type HeadingStylesProps = {
  variant: VariantStyle
}

export const headingStyles = ({ variant }: HeadingStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
