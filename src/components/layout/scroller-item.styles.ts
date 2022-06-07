import type { CSSObject } from "@emotion/react"
import { theme } from '../../styles/global-css-variables.css'
import { mediaQuery } from "../../styles/media-query"

const base: CSSObject = {
  display: "inline-flex",
  scrollSnapCoordinate: "left",
  scrollSnapAlign: "start",
  ":last-of-type > div": {
    marginRight: theme.spacing.xxlarge,
  },
}

export const scrollerItemStyles = () => {
  return mediaQuery([base])
}
