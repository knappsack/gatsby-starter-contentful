import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"

const legal: CSSObject = {
  display: "flex",
  flexDirection: ["column", "row"],
  gap: theme.spacing.small,
  justifyContent: "space-between",
}

export const legalStyles = () => {
  return mediaQuery(legal)
}

const copyright: CSSObject = {
  fontFamily: theme.font.family.body,
  color: theme.colors.text,
  fontSize: theme.font.size.small,
  lineHeight: 1.5,
}

export const copyrightStyles = () => {
  return mediaQuery(copyright)
}

const supporter: CSSObject = {
  textDecoration: "underline",
}

export const supporterStyles = () => {
  return mediaQuery([copyright, supporter])
}
