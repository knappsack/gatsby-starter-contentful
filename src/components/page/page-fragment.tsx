import { graphql } from 'gatsby'
import { ContentfulAsset } from './asset-fragment'

export type ContentfulPage = {
  sys: {
    id: string
  }
  sectionsCollection: {
    items: any
  }
  slug: string
  theme: string
  seoKeywords: string
  seoTitle: string
  seoDescription: string
  seoImage: ContentfulAsset
}

export const pageFragment = graphql`
  fragment Page on Contentful_Page {
    sys {
      id
    }
    slug
    theme
    sectionsCollection {
      items {
        ...Section
      }
    }
    seoKeywords
    seoTitle
    seoDescription
    seoImage {
      ...Asset
    }
  }
`
