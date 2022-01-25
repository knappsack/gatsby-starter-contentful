import { graphql } from 'gatsby'
import { ContentfulAction } from './action-fragment'
import { ContentfulAsset } from './asset-fragment'

export type ContentfulTopic = {
  __typename: string
  sys: {
    id: string
  }
  heading: string
  abstract: string
  icon: string
  mediaCollection: {
    items: ContentfulAsset[]
  }
  actionsCollection: {
    items: ContentfulAction[]
  }
}

export const topic = graphql`
  fragment topic on Contentful_Topic {
    __typename
    sys {
      id
    }
    abstract
    icon
    heading
    mediaCollection(limit: 1) {
      items {
        ...asset
      }
    }
    actionsCollection(limit: 2) {
      items {
        ...action
      }
    }
  }
`
