import * as React from "react"

import { theme } from '../../styles/global-css-variables.css'

import type { TopicSectionVariant } from "../contentful/contentful-topic-section"

export type ScrollerItemProps = {
  variant: TopicSectionVariant
  children: React.ReactNode
}

export const ScrollerItem = ({ variant, children }: ScrollerItemProps) => {
  const scrollItem = ["card"].includes(variant)

  if (!scrollItem) return <React.Fragment>{children}</React.Fragment>

  const styles = {
    display: "inline-flex",
    scrollSnapCoordinate: "left",
    scrollSnapAlign: "start",
    ':last-of-type > div': {
      marginRight: theme.spacing.xxlarge,
    }
  }

  return <div css={styles}>{children}</div>
}
