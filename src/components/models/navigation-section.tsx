import * as React from 'react'

import { createUuid } from "../../lib/create-uuid"
import { Analytics } from "../analytics"
import { ContentfulNavigation } from "../contentful/contentful-navigation"
import { ContentfulNavigationSection } from "../contentful/contentful-navigation-section"
import { GridTemplate } from "../layout/grid-template"
import LegalSection from "./legal-section"
import Navigation from "./navigation"
import { Link } from "../elements/link"

export type NavigationSectionProps = {
  model: ContentfulNavigationSection
}

export const NavigationSection = ({ model }: NavigationSectionProps) => {
  const { eventId, heading, logo, navigationsCollection, variant } = model

  const options = {
    heading,
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
      <React.Fragment>
        {logo && (
          <Link
            data-style="logo"
            aria-label={logo.title}
            data-variant={variant}
            to="/"
          >
            <picture data-style="picture">
              <img
                alt={logo.description}
                src={`${logo.url}?fm=webp`}
                title={logo.title}
              />
            </picture>
          </Link>
        )}
        <GridTemplate variant={variant}>
          {navigationsCollection.items.map(
            (navigation: ContentfulNavigation) => {
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
            }
          )}
        </GridTemplate>
      </React.Fragment>
    </Analytics>
  )
}
