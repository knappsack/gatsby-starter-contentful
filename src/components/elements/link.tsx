import * as React from "react"

import { Link as GatsbyLink } from "gatsby"

export const Link = ({ children, ...props }) => {
  const { to } = props

  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <GatsbyLink to={to} {...props}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} target="_blank" {...props}>
      {children}
    </a>
  )
}
