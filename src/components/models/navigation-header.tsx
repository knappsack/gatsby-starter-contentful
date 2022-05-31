import { ContentfulNavigation } from "../contentful/contentful-navigation"
import { ContentfulNavigationSection } from "../contentful/contentful-navigation-section"
import { Navigation } from "./navigation"
import { createUuid } from "../../lib/create-uuid"
import { Analytics } from "../layout/analytics"
import { Link } from "../elements/link"
import { GridTemplate } from "../layout/grid-template"
import { UseTypesOf } from "../../lib/use-types-of"

export type NavigationHeaderProps = UseTypesOf["div"] & {
  model: ContentfulNavigationSection
}

export const NavigationHeader = ({ model }: NavigationHeaderProps) => {
  const {
    sys: { id },
    branding,
    heading,
    eventId,
    navigationsCollection,
    variant,
    logo,
  } = model

  const options = {
    branding,
    heading,
  }

  return (
    <Analytics
      area="nav"
      aria-label="Global navigation"
      eventId={eventId}
      role="navigation"
      variant="header"
      options={{
        border: true
      }}
    >
      {options.branding && logo && (
        <Link
          aria-label={logo.title}
          css={{
            gridArea: "branding",
            display: "inline-block",
            width: 54,
            height: "auto",
          }}
          to="/"
        >
          <img
            alt={logo.description}
            src={`${logo.url}?w=150&fm=webp`}
            title={logo.title}
          />
        </Link>
      )}
      <GridTemplate variant="header">
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
