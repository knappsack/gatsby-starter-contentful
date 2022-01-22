import { graphql } from 'gatsby'
import { ContentfulAsset } from './asset-fragment'

export type ContentfulGlobals = {
  siteAuthor: string
  siteDescription: string
  siteImage: ContentfulAsset
  siteKeywords: string[]
  siteTitle: string
  skipToContentHeading: string
}

export const globalsFragment = graphql`
  fragment Globals on Contentful_Globals {
    siteAuthor
    siteDescription
    siteImage {
      ...Asset
    }
    siteKeywords
    siteTitle
    skipToContentHeading
  }
`
