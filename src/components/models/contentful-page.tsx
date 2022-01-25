import { graphql } from 'gatsby'
import { ContentfulAsset } from './contentful-asset'
import { ContentfulTextSection } from './contentful-text-section'
import { ContentfulTopicSection } from './contentful-topic-section'

export type ContentfulPage = {
  __typename: string
  sys: {
    id: string
  }
  sectionsCollection: {
    items: ContentfulTopicSection[] | ContentfulTextSection[]
  }
  slug: string
  theme: string
  seoKeywords: string
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
    sections {
      ...textSection
      ...topicSection
    }
    slug
    theme
    seoKeywords
    seoTitle
    seoDescription
  }
`
