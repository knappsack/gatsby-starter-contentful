import type { ContentfulNavigation } from "../contentful/contentful-navigation"
import type {
  ContentfulNavigationSection,
  NavigationSectionOptions,
} from "../contentful/contentful-navigation-section"
import { Navigation } from "./navigation"
import { createUuid } from "../../lib/create-uuid"
import { Analytics } from "../layout/analytics"
import { Link } from "../elements/link"
import { GridTemplate } from "../layout/grid-template"
import type { UseTypesOf } from "../../lib/use-types-of"

type ContainerProps = UseTypesOf["div"] & {
  options: NavigationSectionOptions
}

const Container = ({ children, options }: ContainerProps) => {
  if (options.branding) {
    return <GridTemplate variant="branding">{children}</GridTemplate>
  }

  return (
    <div
      css={{
        display: "flex",
        maxWidth: 1380,
        paddingTop: 24,
        paddingBottom: 24,
        margin: "auto",
      }}
    >
      {children}
    </div>
  )
}

export type NavigationSitemapProps = UseTypesOf["div"] & {
  model: ContentfulNavigationSection
}

export const NavigationSitemap = ({ model }: NavigationSitemapProps) => {
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
      eventId={eventId}
      options={{ border: true }}
      variant="sitemap"
    >
      <Container options={options}>
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
              src={`${logo.url}?fm=webp`}
              title={logo.title}
            />
          </Link>
        )}
        <GridTemplate variant="sitemap">
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
      </Container>
    </Analytics>
  )
}