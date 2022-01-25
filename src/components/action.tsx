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
      className="w-full m-3 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
      to={path + (query && `?` + query) + (anchor && `#` + anchor)}
      aria-label={description}
    >
      {heading}
    </Link>
  )
}
