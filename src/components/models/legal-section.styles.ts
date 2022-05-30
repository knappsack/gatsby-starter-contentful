import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"

export const legalStyle = mediaQuery({
  display: "flex",
  flexDirection: ["column", "row"],
  gap: theme.spacing.small,
  justifyContent: "space-between",
} as CSSObject)

const base: CSSObject = {
  fontFamily: theme.font.family.body,
  color: theme.colors.text,
  fontSize: theme.font.size.small,
  lineHeight: 1.5,
}

const supporter: CSSObject = {
  textDecoration: "underline",
}

export const copyrightStyle = base
export const supporterStyle = [base, supporter]
