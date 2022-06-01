import { CSSObject } from "@emotion/react"
import { theme } from '../../styles/global-css-variables.css'
import { mediaQuery } from "../../styles/media-query"
import type { Options } from "../../styles/types"

type OptionStyle = Options<"visible" | "mobile">

const base: CSSObject = {
  marginBottom: "auto",
  marginTop: "auto",
}

const visible: CSSObject = {
  transform: ["translateX(0)", "translateX(0)", "translateX(0)"],
  transition: "transform .2s .2s ease-in-out",
}

const mobile: CSSObject = {
  background: [theme.colors.unit, theme.colors.unit, "unset"],
  bottom: 0,
  boxShadow: ["0 1rem 3rem rgb(0 0 0 / 18%)", "0 1rem 3rem rgb(0 0 0 / 18%)", "unset"],
  justifyContent: "flex-end",
  maxWidth: [376, 376, "unset"],
  overflowY: ["auto", "auto", "unset"],
  position: ["fixed", "fixed", "unset"],
  right: 0,
  top: 0,
  transform: ["translateX(100%)", "translateX(100%)", "unset"],
  transition: ["transform .2s ease-in-out", "transform .2s ease-in-out", "unset"],
  width: ["100%", "100%", "unset"],
  zIndex: 1050,
}

export type NavigationHeaderStylesProps = {
  options: OptionStyle
}

export const navigationHeaderStyles = ({
  options,
}: NavigationHeaderStylesProps) => {
  return mediaQuery([
    base,
    options?.mobile && mobile,
    options?.visible && visible,
  ])
}

export const vissuallyHidden: CSSObject = {
  border: 0,
  clip: "rect(0px, 0px, 0px, 0px)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
}
