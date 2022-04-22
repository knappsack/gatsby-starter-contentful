import React from 'react'
import RootElement from './src/components/root-element'

/**
 * The New CSS Reset made by Elad Shechter
 * @url https://github.com/elad2412/the-new-css-reset
 */
import "the-new-css-reset/css/reset.css"
import './src/styles/global-css-vars.css'
import './src/styles/app.css'

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
