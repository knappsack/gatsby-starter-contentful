import { ContentfulNavigation } from "../contentful/contentful-navigation"
import { ContentfulNavigationSection } from "../contentful/contentful-navigation-section"
import Navigation from "./navigation"
import { createUuid } from "../../lib/create-uuid"
import { Analytics } from "../analytics"
import { Link } from "../elements/link"
import { GridTemplate } from "../layout/grid-template"
import {
  copyrightStyle,
  legalStyle,
  supporterStyle,
} from "./legal-section.styles"

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
    <Analytics
      area="nav"
      eventId={eventId}
      variant="footer"
      options={{ border: true }}
    >
      <GridTemplate variant="footer">
        {navigationsCollection.items.map((navigation: ContentfulNavigation) => {
          const {
            sys: { id },
          } = model

          return (
            <Navigation
              key={createUuid(id)}
              model={navigation}
              options={options}
              variant="footer"
            />
          )
        })}
        <div css={legalStyle}>
          <span css={copyrightStyle}>
            Copyright © {new Date().getFullYear()} Contentful Gatsby Starter.
            All rights reserved.
          </span>
          <Link to="https://github.com/thijskrooswijk" css={supporterStyle}>
            Made with Knappsack
          </Link>
        </div>
      </GridTemplate>
    </Analytics>
  )
}

export default LegalSection
