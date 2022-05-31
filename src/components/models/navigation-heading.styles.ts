import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"

const base: CSSObject = {
  marginBottom: theme.spacing.small,
  fontWeight: "bold",
}

export const navigationHeadingStyles = () => {
  return mediaQuery(base)
}
