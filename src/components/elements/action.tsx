import * as React from "react"

import slugify from "@sindresorhus/slugify"
import { Link as GatsbyLink } from "gatsby"
import type { ContentfulAction } from "../contentful/contentful-action"
import { useGtag } from "../../lib/gtag"
import { Icon } from "../elements/icon"
import { actionStyles } from "./action.styles"
import type { ActionStylesProps } from "./action.styles"
import { createLink } from "../../lib/create-link"

export type ActionProps = {
  model: ContentfulAction
  variant: ActionStylesProps["variant"]
  options?: ActionStylesProps["options"]
  is?: "div"
}

export const Action = ({ model, variant, options, is }: ActionProps) => {
  const {
    sys: { id },
    __typename,
    anchor,
    description,
    eventId,
    heading,
    icon,
    url,
    page,
    query,
  } = model

  const handleOnClick = (event: React.MouseEvent<HTMLElement>) => {
    useGtag("event", "click", {
      event_id: event.currentTarget.dataset.analyticsId,
    })
  }

  const to = createLink({ model })
  const analyticsId = `action:${slugify(eventId) || slugify(heading)}`
  const styles = actionStyles({ variant, options })

  const forwardProps = {
    "aria-label": description,
    "data-analytics-id": analyticsId,
    css: styles,
    onClick: handleOnClick,
  }

  if (is === "div") {
    return (
      <div css={styles}>
        {heading}
        {icon && <Icon variant="small" icon={icon} />}
      </div>
    )
  }

  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <GatsbyLink to={to} {...forwardProps}>
        {heading}
        {icon && <Icon variant="small" icon={icon} />}
      </GatsbyLink>
    )
  }

  return (
    <a href={to} {...forwardProps} rel="noreferrer noopener" target="_blank">
      {heading}
      {icon && <Icon variant="small" icon={icon} />}
    </a>
  )
}
