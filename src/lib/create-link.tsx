import * as React from "react"

import type { UseTypesOf } from "./use-types-of"
import { focusStyles } from "../components/models/text-section.styles"
import { ContentfulAction } from "../components/contentful/contentful-action"

type CreateLinkProps = {
  model: ContentfulAction
}

export const createLink = ({ model }: CreateLinkProps) => {
  const {
    sys: { id },
    page,
    url,
    query,
    anchor,
  } = model

  const path = page?.slug || url
  const queryString = query && `?` + query
  const anchorHash = anchor && `#` + anchor

  return (
    path + (queryString ? queryString : "") + (anchorHash ? anchorHash : "")
  )
}
