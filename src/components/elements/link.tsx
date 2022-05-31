import * as React from "react"

import { Link as GatsbyLink } from "gatsby"
import type { GatsbyLinkProps } from "gatsby"
import { linkStyles } from "./link.styles"

type LinkProps = React.PropsWithoutRef<GatsbyLinkProps<{}>>

export const Link = React.forwardRef(
  (
    { children, to, ...props }: LinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    const styles = linkStyles({})

    const internal = /^\/(?!\/)/.test(to)
    if (internal) {
      /** @deprecated — Replace `innerRef` with `ref` if GatsbyLink allows type ref  */
      return (
        <GatsbyLink to={to} css={styles} {...props} innerRef={ref}>
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
        ref={ref}
      >
        {children}
      </a>
    )
  }
)
