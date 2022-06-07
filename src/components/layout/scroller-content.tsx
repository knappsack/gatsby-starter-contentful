import * as React from "react"

import type { TopicSectionVariant } from "../contentful/contentful-topic-section"
import { scrollerContentStyles } from './scroller-content.styles'

export type ScrollerContentProps = {
  variant: TopicSectionVariant
  children: React.ReactNode
}

export const ScrollerContent = ({ variant, children }: ScrollerContentProps) => {
  const scroll = ["card"].includes(variant)
  
  if (!scroll) return <React.Fragment>{children}</React.Fragment>

  const styles = scrollerContentStyles()
  
  return <div css={styles} role="list">{children}</div>
}
