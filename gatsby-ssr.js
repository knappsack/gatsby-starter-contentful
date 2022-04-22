import * as React from "react"
import RootElement from "./src/components/layout/root-element"

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>
}
