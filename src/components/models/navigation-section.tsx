import * as React from "react"
import { GetTypesOf } from "../../lib/get-types-of"

import { AnyElement } from "../../lib/react-create-any-element"
import { ContentfulNavigationSection } from "../contentful/contentful-navigation-section"
import Legal from "./legal"

export type NavigationSectionProps = {
  model: ContentfulNavigationSection
}

export const NavigationSection = ({ model }: NavigationSectionProps) => {
  const {
    __typename,
    sys: { id },
    variant,
  } = model

  const props = {
    "aria-label":
      variant.toLocaleLowerCase() === "header"
        ? "Global navigation"
        : undefined,
    is: variant.toLocaleLowerCase() === "header" ? "nav" : "div",
    role: variant.toLocaleLowerCase() === "header" ? "navigation" : undefined,
    "data-variant": variant.toLocaleLowerCase(),
    "data-style": "navigation",
  }

  if (variant.toLocaleLowerCase() === "footer") {
    return <Legal model={model} />
  }

  return (
    <AnyElement {...props}>
      {__typename}:{variant}:{id}
    </AnyElement>
  )
}
