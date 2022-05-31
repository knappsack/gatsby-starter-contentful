import * as React from 'react'

import { Link as GatsbyLink } from "gatsby"
import type { GatsbyLinkProps } from "gatsby"

type LinkProps = React.PropsWithoutRef<GatsbyLinkProps<{}>>

export const Link = ({ children, to, ...props }: LinkProps) => {
  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <GatsbyLink to={to} {...props}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...props} rel="noreferrer noopener" target="_blank">
      {children}
    </a>
  )
}
