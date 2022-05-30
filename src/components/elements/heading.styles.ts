import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Variants } from "../../styles/types"

type VariantStyle = "xlarge" | "large" | "medium" | "small"

const base: CSSObject = {
  color: theme.colors.text,
  fontFamily: theme.font.family.body,
  // @ts-ignore unsolvable type error from Vanilla Extract
  fontWeight: theme.font.weight.bold,
}

const variants: Variants<VariantStyle> = {
  xlarge: {
    fontSize: [theme.font.size.xxlarge, theme.font.size.huge],
  },
  large: {
    fontSize: theme.font.size.xxlarge,
  },
  medium: {
    fontSize: theme.font.size.xlarge,
  },
  small: {
    fontSize: theme.font.size.default,
    // @ts-ignore unsolvable type error from Vanilla Extract
    fontWeight: theme.font.weight.default,
  },
}

export type HeadingStylesProps = {
  variant: VariantStyle
}

export const headingStyles = ({ variant }: HeadingStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
