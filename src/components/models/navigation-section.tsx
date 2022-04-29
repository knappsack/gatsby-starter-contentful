import * as React from "react"
import { ContentfulNavigationSection } from "../contentful/contentful-navigation-section"

export type NavigationSectionProps = {
  model: ContentfulNavigationSection
}

export const NavigationSection = ({ model }: NavigationSectionProps) => {
  const {
    __typename,
    sys: { id },
    variant,
  } = model
  
  return (
    <div>
      {__typename}:{variant}:{id}
    </div>
  )
}
