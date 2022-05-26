import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Variants, Options } from "../../styles/types"

type VariantStyle = "primary" | "secondary" | "link"
type OptionStyle = Options<"small">

const base: CSSObject = {
  color: theme.colors.link,
  display: "inline-block",
  fontFamily: theme.fontFamily.body,
  fontSize: theme.size.default,
  padding: "8px 16px",
  borderRadius: 6,
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
    }
  },
  secondary: {
    backgroundColor: theme.colors.transparent,
    color: theme.colors.link,
    border: `1px solid ${theme.colors.transparent}`,
    borderColor: theme.colors.link,
    ":hover": {
      borderColor: theme.colors.focus,
    }
  },
  link: {
    fontSize: theme.size.default,
    ":hover": {
      textDecoration: "underline",
    }
  },
}

const small = {
  fontSize: theme.size.small,
}

export type ActionStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const actionStyles = ({ variant, options }: ActionStylesProps) => {
  return mediaQuery([base, variants[variant], options?.small && small])
}
