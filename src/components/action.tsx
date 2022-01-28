import React from 'react'
import { Link } from 'gatsby'
import { ContentfulAction } from './models/contentful-action'

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

  return (
    <Link
      data-analytics-action={`${eventId.toLocaleLowerCase()}:${slug.toLocaleLowerCase()}`}
      to={path + (query && `?` + query) + (anchor && `#` + anchor)}
      aria-label={description}
    >
      {heading}
    </Link>
  )
}
