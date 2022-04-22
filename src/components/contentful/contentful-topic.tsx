import { graphql } from "gatsby"
import { ContentfulAction } from "./contentful-action"
import { ContentfulAsset } from "./contentful-asset"

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
  theme: string
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
    mediaCollection(limit: 2) {
      items {
        ...asset
      }
    }
    actionsCollection(limit: 2) {
      items {
        ...action
      }
    }
    theme
  }
`
