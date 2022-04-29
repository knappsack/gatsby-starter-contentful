import { graphql } from "gatsby"
import { ContentfulAsset } from "./contentful-asset"
import { ContentfulNavigationSection } from "./contentful-navigation-section"
import { ContentfulTextSection } from "./contentful-text-section"
import { ContentfulTopicSection } from "./contentful-topic-section"

export type ContentfulPage = {
  __typename: string
  sys: {
    id: string
  }
  sectionsCollection: {
    items:
      | ContentfulNavigationSection[]
      | ContentfulTextSection[]
      | ContentfulTopicSection[]
  }
  slug: string
  theme: string
  seoKeywords: string[]
  seoTitle: string
  seoDescription: string
  seoImage: ContentfulAsset
}

export const page = graphql`
  fragment page on Contentful_Page {
    __typename
    sys {
      id
    }
    slug
    seoTitle
    seoDescription
    seoKeywords
    seoImage {
      ...asset
    }
    sectionsCollection(limit: 10) {
      items {
        ...navigationSection
        ...textSection
        ...topicSection
      }
    }
  }
`
