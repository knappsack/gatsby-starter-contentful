import * as React from "react"

import { scrollerStyles } from './scroller.styles'
import type { ScrollerStylesProps } from './scroller.styles'

export type ScrollerProps = {
  variant: ScrollerStylesProps['variant']
  options?: ScrollerStylesProps['options']
  children: React.ReactNode
}

export const Scroller = ({ variant, options, children }: ScrollerProps) => {
  if (options?.scroll) {
    const styles = scrollerStyles({ variant, options })

    return <div css={styles}>{children}</div>
  }

  return <React.Fragment>{children}</React.Fragment>
}
