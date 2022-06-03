import * as React from "react"

import { Link as GatsbyLink } from "gatsby"
import type { GatsbyLinkProps } from "gatsby"
import { linkStyles } from "./link.styles"

type LinkProps = React.PropsWithoutRef<GatsbyLinkProps<{}>>

export const Link = ({ children, to, ...props }: LinkProps) => {
  const styles = linkStyles({})

  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <GatsbyLink to={to} css={styles} {...props}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a
      href={to}
      css={styles}
      rel="noreferrer noopener"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  )
}
