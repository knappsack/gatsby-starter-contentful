import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Options, Variants } from "../../styles/types"

type VariantStyle = "xlarge" | "large" | "medium" | "small"
type OptionStyle = Options<"margin">

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
  },
}

const margin: CSSObject = {
  marginBottom: theme.spacing.small,
}

export type HeadingStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const headingStyles = ({ variant, options }: HeadingStylesProps) => {
  return mediaQuery([base, variants[variant], options?.margin && margin])
}
