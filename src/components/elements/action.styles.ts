import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Variants, Options } from "../../styles/types"

type VariantStyle = "primary" | "secondary" | "link"
type OptionStyle = Options<"large">

const base: CSSObject = {
  color: theme.colors.link,
  display: "inline-block",
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.default,
  padding: "8px 16px",
  borderRadius: 6,
  svg: {
    transform: "translate(6px, 2px)",
  },
  ":focus": {
    boxShadow: `0 0 0 4px ${theme.colors.focus}`,
    outline: "none",
  },
}

const variants: Variants<VariantStyle> = {
  primary: {
    backgroundColor: theme.colors.link,
    color: theme.colors.unit,
    border: `1px solid ${theme.colors.transparent}`,
    borderColor: theme.colors.link,
    ":hover": {
      backgroundColor: theme.colors.hover,
    },
  },
  secondary: {
    backgroundColor: theme.colors.transparent,
    color: theme.colors.link,
    border: `1px solid ${theme.colors.transparent}`,
    borderColor: theme.colors.link,
    ":hover": {
      borderColor: theme.colors.focus,
    },
  },
  link: {
    fontSize: theme.font.size.default,
    ":hover": {
      textDecoration: "underline",
    },
  },
}

const large = {
  fontSize: theme.font.size.large,
  padding: "12px 20px",
}

export type ActionStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const actionStyles = ({ variant, options }: ActionStylesProps) => {
  return mediaQuery([
    base,
    variants[variant],
    options?.large && large,
  ])
}
