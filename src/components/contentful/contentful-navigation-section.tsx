import { graphql } from "gatsby"
import { ContentfulNavigation } from './contentful-navigation'

export type NavigationSectionVariant =
  | "header"
  | "footer"
  | "sitemap"

export type ContentfulNavigationSection = {
  __typename: string
  sys: {
    id: string
  }
  branding: boolean
  eventId: string
  heading: boolean
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
    branding
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
