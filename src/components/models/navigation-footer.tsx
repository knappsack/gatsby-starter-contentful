import * as styles from "./navigation-footer.styles"

import { ContentfulNavigation } from "../contentful/contentful-navigation"
import { ContentfulNavigationSection } from "../contentful/contentful-navigation-section"
import { Navigation } from "./navigation"
import { createUuid } from "../../lib/create-uuid"
import { Analytics } from "../layout/analytics"
import { Link } from "../elements/link"
import { GridTemplate } from "../layout/grid-template"

export type NavigationFooterProps = {
  model: ContentfulNavigationSection
}

export const NavigationFooter = ({ model }: NavigationFooterProps) => {
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
    <Analytics
      area="section"
      eventId={eventId}
      options={{ border: true }}
      variant="footer"
    >
      <GridTemplate variant="grid">
        {navigationsCollection.items
          .slice(0, 1)
          .map((navigation: ContentfulNavigation) => {
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
        <div css={styles.legalStyles}>
          <span css={styles.copyrightStyles}>
            Copyright © {new Date().getFullYear()} Contentful Gatsby Starter.
            All rights reserved.
          </span>
          <Link
            to="https://github.com/thijskrooswijk"
            css={styles.supporterStyles}
          >
            Made with Knappsack
          </Link>
        </div>
      </GridTemplate>
    </Analytics>
  )
}
