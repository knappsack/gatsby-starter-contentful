import { graphql } from "gatsby"

export type NavigationSectionVariant =
  | "header"
  | "footer"
  | "sitemap"

export type ContentfulNavigationSection = {
  __typename: string
  sys: {
    id: string
  }
  variant: NavigationSectionVariant
}

export const navigationSection = graphql`
  fragment navigationSection on Contentful_NavigationSection {
    __typename
    sys {
      id
    }
    variant
  }
`
