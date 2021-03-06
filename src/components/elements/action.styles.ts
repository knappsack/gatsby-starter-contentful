import type { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Variants, Options } from "../../styles/types"

type VariantStyle = "primary" | "secondary" | "link"
type OptionStyle = Options<"large" | "expand">

const base: CSSObject = {
  cursor: "pointer",
  padding: "8px 16px",
  color: theme.colors.link,
  display: "inline-block",
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.default,
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
    color: theme.colors.light,
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
      borderColor: theme.colors.hover,
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

const expand = {
  ":after": {
    borderRadius: 6,
    bottom: 0,
    content: `""`,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 2,
  },
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
    options?.expand && expand,
  ])
}
