import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import { Variants } from "../../styles/types"

type VariantStyle = "xlarge" | "large" | "medium" | "small"

const base: CSSObject = {
  color: theme.colors.text,
  fontFamily: theme.fontFamily.body,
  fontWeight: 400,
  lineHeight: 1.58,
}

const variants: Variants<VariantStyle> = {
  xlarge: {
    fontSize: 42,
    fontStyle: "italic",
    lineHeight: 1.375,
  },
  large: {
    fontSize: [20, 24],
  },
  medium: {
    fontSize: theme.size.default,
  },
  small: {
    fontSize: theme.size.small,
  },
}

export type AbstractStylesProps = {
  variant: VariantStyle
}

export const abstractStyles = ({ variant }: AbstractStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
