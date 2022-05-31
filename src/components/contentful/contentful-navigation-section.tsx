import { graphql } from "gatsby"
import { ContentfulNavigation } from "./contentful-navigation"
import { ContentfulAsset } from "./contentful-asset"

export type NavigationSectionOptions = {
  heading: boolean
  branding: boolean
}

export type NavigationSectionVariant = "header" | "footer" | "sitemap"

export type ContentfulNavigationSection = NavigationSectionOptions & {
  __typename: string
  sys: {
    id: string
  }
  eventId: string
  logo: ContentfulAsset
  variant: NavigationSectionVariant
  navigationsCollection: {
    items: ContentfulNavigation[]
  }
}

export const navigationSection = graphql`
  fragment navigationSection on Contentful_NavigationSection {
    __typename
    sys {
      id
    }
    logo {
      ...asset
    }
    eventId
    heading
    branding
    variant
    navigationsCollection(limit: 10) {
      items {
        ...navigation
      }
    }
  }
`
