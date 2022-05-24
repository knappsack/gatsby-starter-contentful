import { graphql } from "gatsby"
import { ContentfulNavigation } from "./contentful-navigation"
import { ContentfulAsset } from "./contentful-asset"

export type NavigationSectionOptions = {
  heading: boolean
}

export type NavigationSectionVariant = "header" | "footer" | "sitemap"

export type ContentfulNavigationSection = NavigationSectionOptions & {
  __typename: string
  sys: {
    id: string
  }
  eventId: string
  branding: boolean
  heading: boolean
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
    variant
    navigationsCollection(limit: 10) {
      items {
        ...navigation
      }
    }
  }
`
