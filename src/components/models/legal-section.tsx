import * as React from "react"

import { ContentfulNavigation } from "../contentful/contentful-navigation"
import { ContentfulNavigationSection } from "../contentful/contentful-navigation-section"
import Navigation from "./navigation"
import { createUuid } from "../../lib/create-uuid"
import { Analytics } from "../analytics"
import { Link } from "../elements/link"
import { GridTemplate } from "../layout/grid-template"

export type LegalSectionProps = {
  model: ContentfulNavigationSection
}

const LegalSection = ({ model }: LegalSectionProps) => {
  const {
    sys: { id },
    branding,
    heading,
    eventId,
    navigationsCollection,
    variant,
  } = model

  const options = {
    branding,
    heading,
  }

  return (
    <Analytics area="region" eventId={eventId} variant={variant}>
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
        <div data-style="legal">
          <span data-style="copyright">
            Copyright © {new Date().getFullYear()} Contentful Gatsby Starter.
            All rights reserved.
          </span>
          <Link to="https://github.com/thijskrooswijk" data-style="supporter">
            Made with Knappsack
          </Link>
        </div>
      </GridTemplate>
    </Analytics>
  )
}

export default LegalSection
