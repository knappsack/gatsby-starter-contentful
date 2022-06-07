import { CSSObject } from "@emotion/react"
import { mediaQuery } from "../../styles/media-query"

const base: CSSObject = {
  width: "100%",
  display: "flex",
  justifyContent: [, , "center"],
  flexWrap: [, , "wrap"],
  gap: [, , "24px 0"],
}

export const scrollerContentStyles = () => {
  return mediaQuery([base])
}
