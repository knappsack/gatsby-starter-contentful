import * as React from 'react'

import { Link as GatsbyLink } from "gatsby"
import type { GatsbyLinkProps } from "gatsby"
import { linkStyles } from './link.styles'

type LinkProps = React.PropsWithoutRef<GatsbyLinkProps<{}>>

export const Link = ({ children, to, ...props }: LinkProps) => {
  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <GatsbyLink to={to} css={linkStyles} {...props}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} css={linkStyles} rel="noreferrer noopener" target="_blank" {...props}>
      {children}
    </a>
  )
}
