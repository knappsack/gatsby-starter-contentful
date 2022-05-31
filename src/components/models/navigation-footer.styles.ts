import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"

const legal: CSSObject = {
  display: "flex",
  flexDirection: ["column", "row"],
  gap: theme.spacing.small,
  justifyContent: "space-between",
}

const base: CSSObject = {
  fontFamily: theme.font.family.body,
  color: theme.colors.text,
  fontSize: theme.font.size.small,
  lineHeight: 1.5,
}

const supporter: CSSObject = {
  textDecoration: "underline",
}

export const legalStyles = mediaQuery(legal)
export const copyrightStyles = mediaQuery(base)
export const supporterStyles = mediaQuery([base, supporter])
