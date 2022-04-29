import { graphql } from "gatsby"
import { ContentfulAsset } from "./contentful-asset"

export type ContentfulGlobals = {
  __typename: string
  sys: {
    id: string
  }
  siteAuthor: string
  siteDescription: string
  siteImage: ContentfulAsset
  siteKeywords: string[]
  siteTitle: string
  skipToContentHeading: string
}

export const globals = graphql`
  fragment globals on Contentful_Globals {
    __typename
    sys {
      id
    }
    siteAuthor
    siteDescription
    siteImage {
      ...asset
    }
    siteKeywords
    siteTitle
    skipToContentHeading
  }
`
