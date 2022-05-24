import * as React from "react"
import RootElement from "./src/components/layout/root-element"

/**
 * The New CSS Reset made by Elad Shechter
 * @url https://github.com/elad2412/the-new-css-reset
 */
import "./src/styles/the-new-css-reset.css"
import "./src/styles/global-css-variables.css"

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>
}

export const onRouteUpdate = ({ location }) => {
  const hash = document.querySelectorAll(`a[href="${location.hash}"]`)[0]
  if (hash) {
    window.scrollTo({
      top: hash.offsetTop,
    })
  }
  return true
}
