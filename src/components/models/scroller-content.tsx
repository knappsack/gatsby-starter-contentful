import { CSSObject } from '@emotion/react'
import * as React from "react"
import { mediaQuery } from '../../styles/media-query'

import type { TopicSectionVariant } from "../contentful/contentful-topic-section"

export type ScrollerContentProps = {
  variant: TopicSectionVariant
  children: React.ReactNode
}

export const ScrollerContent = ({ variant, children }: ScrollerContentProps) => {
  const scroll = ["card"].includes(variant)

  if (!scroll) return <React.Fragment>{children}</React.Fragment>

  const styles = mediaQuery({
    width: "100%",
    display: "flex",
    justifyContent: ['', '', "center"],
    flexWrap: ['', '', 'wrap'],
    gap: ['', '', '24px 0'],
  } as CSSObject)

  return <div css={styles} role="list">{children}</div>
}
