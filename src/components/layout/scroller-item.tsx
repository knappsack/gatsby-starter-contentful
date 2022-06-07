import * as React from "react"

import type { TopicSectionVariant } from "../contentful/contentful-topic-section"
import { scrollerItemStyles } from './scroller-item.styles'

export type ScrollerItemProps = {
  variant: TopicSectionVariant
  children: React.ReactNode
}

export const ScrollerItem = ({ variant, children }: ScrollerItemProps) => {
  const scrollItem = ["card"].includes(variant)

  if (!scrollItem) return <React.Fragment>{children}</React.Fragment>

  const styles = scrollerItemStyles()

  return <div css={styles}>{children}</div>
}
