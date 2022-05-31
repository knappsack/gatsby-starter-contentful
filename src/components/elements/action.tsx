import * as React from "react"

import slugify from "@sindresorhus/slugify"
import { Link as GatsbyLink } from "gatsby"
import type { ContentfulAction } from "../contentful/contentful-action"
import { useGtag } from "../../lib/gtag"
import { Icon } from "../elements/icon"
import { actionStyles } from "./action.styles"
import type { ActionStylesProps } from "./action.styles"

export type ActionProps = {
  model: ContentfulAction
  variant: ActionStylesProps["variant"]
  options?: ActionStylesProps["options"]
}

export const Action = ({ model, variant, options }: ActionProps) => {
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

  const ref = React.useRef<any>(null)

  const path = page?.slug || url
  const queryString = query && `?` + query
  const anchorHash = anchor && `#` + anchor

  const to =
    path + (queryString ? queryString : "") + (anchorHash ? anchorHash : "")

  const setAnalyticsId = `${slugify(eventId)}:${slugify(heading)}`

  const handleOnClick = () => {
    useGtag("event", "click", { event_id: ref.current?.dataset.analyticsId })
  }

  const styles = actionStyles({ variant, options })

  const props = {
    "aria-label": description,
    "data-analytics-id": setAnalyticsId,
    css: styles,
    onClick: handleOnClick,
    ref: ref,
  }

  const internal = /^\/(?!\/)/.test(path)
  if (internal) {
    return (
      <GatsbyLink to={to} {...props}>
        {heading}
        {icon && <Icon variant="small" name={icon} />}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...props} rel="noreferrer noopener" target="_blank">
      {heading}
      {icon && <Icon variant="small" name={icon} />}
    </a>
  )
}
