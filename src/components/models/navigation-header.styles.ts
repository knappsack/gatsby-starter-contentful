import { CSSObject, keyframes } from "@emotion/react"
import { mediaQuery } from "../../styles/media-query"
import type { Options } from "../../styles/types"

type OptionStyle = Options<"visible" | "mobile">

const base: CSSObject = {
  marginTop: "auto",
  marginBottom: "auto",
}

const visible: CSSObject = {
  transform: "translateX(0)",
  transition: "transform .2s .2s ease-in-out",
}

const mobile: CSSObject = {
  position: "fixed",
  overflowY: "auto",
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 1050,
  justifyContent: "flex-end",
  transform: "translateX(100%)",
  maxWidth: 376,
  width: "100%",
  background: "white",
  transition: "transform .2s ease-in-out",
  boxShadow: "0 1rem 3rem rgb(0 0 0 / 18%)",
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
