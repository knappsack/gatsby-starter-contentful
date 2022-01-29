import React, { useRef } from 'react'
import { Link } from 'gatsby'
import { ContentfulAction } from './models/contentful-action'
import { useGtag } from '../lib/gtag'

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
    page: { slug },
    query,
  } = model

  const path = slug || url
  const ref = useRef<any>(null)

  const setAnalyticsId = `${eventId.toLocaleLowerCase()}:${slug
    .toLocaleLowerCase()
    .substring(1)}`

  const handleOnClick = () => {
    useGtag('event', 'click', { event_id: ref.current.dataset.analyticsId })
  }

  return (
    <Link
      aria-label={description}
      data-analytics-id={setAnalyticsId}
      onClick={handleOnClick}
      ref={ref}
      to={path + (query && `?` + query) + (anchor && `#` + anchor)}
    >
      {heading}
    </Link>
  )
}
