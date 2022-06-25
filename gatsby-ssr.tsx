import * as React from "react"

import type { GatsbyBrowser } from "gatsby"
import RootElement from "./src/components/layout/root-element"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return <RootElement>{element}</RootElement>
}
