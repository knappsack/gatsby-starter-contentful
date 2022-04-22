import * as React from "react"

import slugify from "@sindresorhus/slugify"
import { Link as GatsbyLink } from "gatsby"
import { ContentfulAction } from "../contentful/contentful-action"
import { useGtag } from "../../lib/gtag"

export type ActionProps = {
  model: ContentfulAction
}

export const Action = ({ model }: ActionProps) => {
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
  const to = path + (query && `?` + query) + (anchor && `#` + anchor)

  const setAnalyticsId = `${eventId.toLocaleLowerCase()}:${slugify(heading)}`

  const handleOnClick = () => {
    useGtag("event", "click", { event_id: ref.current.dataset.analyticsId })
  }

  const actionAttr = {
    "aria-label": description,
    "data-analytics-id": setAnalyticsId,
    "data-style": "action",
    onClick: handleOnClick,
    ref: ref,
  }

  const internal = /^\/(?!\/)/.test(path)
  if (internal) {
    return (
      <GatsbyLink to={to} {...actionAttr}>
        {heading}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} target="_blank" {...actionAttr}>
      {heading}
    </a>
  )
}
