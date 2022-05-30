import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import { Variants } from "../../styles/types"

type VariantStyle = "xlarge" | "large" | "medium" | "small"

const base: CSSObject = {
  color: theme.colors.text,
  fontFamily: theme.font.family.body,
  // @ts-ignore unsolvable type error from Vanilla Extract
  fontWeight: theme.font.weight.default,
  lineHeight: 1.58,
}

const variants: Variants<VariantStyle> = {
  xlarge: {
    fontSize: theme.font.size.xxlarge,
    fontStyle: "italic",
    lineHeight: 1.375,
  },
  large: {
    fontSize: [theme.font.size.large, theme.font.size.xlarge],
  },
  medium: {
    fontSize: theme.font.size.default,
  },
  small: {
    fontSize: theme.font.size.small,
  },
}

export type AbstractStylesProps = {
  variant: VariantStyle
}

export const abstractStyles = ({ variant }: AbstractStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
