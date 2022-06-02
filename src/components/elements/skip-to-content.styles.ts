import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"

export const skipToContentStyles: CSSObject = {
  background: theme.colors.link,
  color: theme.colors.light,
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.default,
  left: 24,
  lineHeight: 1.5,
  padding: "8px 16px",
  position: "fixed",
  textTransform: "uppercase",
  top: 0,
  transform: "translateY(-100%)",
  transition: "transform 0.25s",
  zIndex: 9001,
  ":focus": {
    transform: "translateY(0%)",
    boxShadow: `0 0 0 4px ${theme.colors.focus}`,
    outline: "none",
  },
}
