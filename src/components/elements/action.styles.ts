import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Variants } from "../../styles/types"

const base: CSSObject = {
  color: theme.colors.link,
  display: "inline-block",
  fontFamily: theme.fontFamily.body,
  fontSize: theme.size.default,
  padding: "8px 16px",
  borderRadius: 6,
}

const variants: Variants<ActionStylesProps["variant"]> = {
  primary: {
    backgroundColor: theme.colors.link,
    color: theme.colors.unit,
    borderColor: theme.colors.link,
  },
  secondary: {
    backgroundColor: theme.colors.transparent,
    color: theme.colors.link,
    borderColor: theme.colors.link,
  },
  link: {
    fontSize: theme.size.default,
    textDecoration: "underline",
  },
}

const small = {
  fontSize: theme.size.small,
}

export type ActionStylesProps = {
  variant: "primary" | "secondary" | "link",
  options?: Partial<{
    small: boolean
  }>
}

export const actionStyles = ({ variant, options }: ActionStylesProps) => {
  return mediaQuery([
    base, 
    variants[variant],
    options?.small && small,
  ])
}
