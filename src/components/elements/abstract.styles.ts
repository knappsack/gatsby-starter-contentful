import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"

const base: CSSObject = {
  color: theme.colors.text,
  fontFamily: theme.fontFamily.body,
  fontSize: theme.size.default,
  fontWeight: 400,
  lineHeight: 1.5,
}

export const abstractStyles = () => {
  return mediaQuery([base])
}
