import * as React from "react"

import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby"

export type LinkProps = GatsbyLinkProps<Record<string, unknown>>

export const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  const {
    to,
  } = props

  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <GatsbyLink to={to}>
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
