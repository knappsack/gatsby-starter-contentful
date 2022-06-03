import * as React from "react"

import type { TopicSectionVariant } from "../contentful/contentful-topic-section"
import { useGtag } from "../../lib/gtag"
import { Link } from "../elements/link"
import { Any } from "../../lib/create-any-element"
import { UseTypesOf } from "../../lib/use-types-of"
import { createLink } from "../../lib/create-link"
import { ContentfulAction } from "../contentful/contentful-action"

type TopicContainerProps = UseTypesOf["a"] & {
  model: ContentfulAction
  variant: TopicSectionVariant
}

export const TopicContainer = ({
  model,
  variant,
  children,
  ...props
}: TopicContainerProps) => {

  const handleOnClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    useGtag("event", "click", {
      event_id: event.currentTarget.dataset.analyticsId,
    })
  }

  if (["card"].includes(variant)) {
    const to = createLink({ model })

    return (
      <Link
        onClick={handleOnClick}
        to={to}
        {...props}
      >
        {children}
      </Link>
    )
  }
  return <Any {...props}>{children}</Any>
}
