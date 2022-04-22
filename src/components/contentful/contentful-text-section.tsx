import { graphql } from "gatsby"
import { ContentfulAsset } from "./contentful-asset"

export type TextSectionVariant = "text"

export type ContentfulLinks = {
  assets: {
    block: ContentfulAsset[]
  }
  entries: {
    hyperlink: {
      sys: {
        id: string
      }
      slug: string
    }[]
  }
}

export type ContentfulTextSection = {
  __typename: string
  sys: {
    id: string
  }
  text: {
    json: any
    links: ContentfulLinks
  }
  variant: TextSectionVariant
  theme: string
  eventId: string
}

export const textSection = graphql`
  fragment textSection on Contentful_TextSection {
    __typename
    sys {
      id
    }
    text {
      json
      links {
        assets {
          block {
            ...asset
          }
        }
        entries {
          hyperlink {
            sys {
              id
            }
            ... on Contentful_Page {
              slug
            }
          }
        }
      }
    }
    variant
    theme
    eventId
  }
`
