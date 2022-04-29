import * as React from "react"

import { Link } from "gatsby"
import { Action } from "../elements/action"
import { ContentfulNavigation } from "../contentful/contentful-navigation"
import { ContentfulNavigationSection } from "../contentful/contentful-navigation-section"
import { ContentfulAction } from "../contentful/contentful-action"

export type LegalProps = {
  model: ContentfulNavigationSection
}

const Legal = ({ model }: LegalProps) => {
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
    <section data-style="legal">
      <div data-style="grid-template" data-variant={variant}>
        <div data-style="copyright">
          Copyright © {new Date().getFullYear()} Knappsack. All rights reserved.
        </div>
        <div data-style="legal-links">
          {navigationsCollection.items.map(
            (navigation: ContentfulNavigation) => {
              return (
                <>
                  {options.heading && <h3>{navigation.heading}</h3>}
                  {navigation.actionsCollection.items.map(
                    (action: ContentfulAction) => {
                      return <Action model={action} />
                    }
                  )}
                </>
              )
            }
          )}
        </div>
        <div>
          <Link to="https://github.com/thijskrooswijk">
            Made with Knappsack
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Legal
