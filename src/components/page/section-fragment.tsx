import { graphql } from 'gatsby'
import { ContentfulAsset } from './asset-fragment'

export type ContentfulSection = {
  sys: {
    id: string
  }
  abstract: boolean
  action: boolean
  eventId: string
  heading: boolean
  icon: boolean
  media: boolean
  reversed: boolean
  theme: string
  variant: string
  topicsCollection: {
    items: any
  }
}

export const sectionFragment = graphql`
  fragment Section on Contentful_TopicSection {
    __typename
    sys {
      id
    }
    abstract
    action
    eventId
    heading
    icon
    media
    reversed
    theme
    variant
    topicsCollection(limit: 20) {
      items {
        __typename
        sys {
          id
        }
      }
    }
  }
`
