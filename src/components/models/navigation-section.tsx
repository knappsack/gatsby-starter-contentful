import * as React from "react"
import { createUuid } from "../../lib/create-uuid"
import { Analytics } from "../analytics"
import { ContentfulNavigation } from "../contentful/contentful-navigation"

import { ContentfulNavigationSection } from "../contentful/contentful-navigation-section"
import { GridTemplate } from "../layout/grid-template"
import LegalSection from "./legal-section"
import Navigation from "./navigation"

export type NavigationSectionProps = {
  model: ContentfulNavigationSection
}

export const NavigationSection = ({ model }: NavigationSectionProps) => {
  const { branding, eventId, heading, navigationsCollection, variant } = model

  const options = {
    heading,
    branding,
  }

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
    return <LegalSection model={model} {...props} />
  }

  return (
    <Analytics area="nav" eventId={eventId} variant={variant}>
      <GridTemplate variant={variant}>
        {navigationsCollection.items.map((navigation: ContentfulNavigation) => {
          const {
            sys: { id },
          } = model

          return (
            <Navigation
              key={createUuid(id)}
              model={navigation}
              options={options}
              variant={variant}
            />
          )
        })}
      </GridTemplate>
    </Analytics>
  )
}
