import { graphql } from "gatsby"
import { ContentfulAction } from './contentful-action'

export type ContentfulNavigation = {
  __typename: string
  sys: {
    id: string
  }
  heading: string
  actionsCollection: {
    items: ContentfulAction[]
  }
}

export const navigation = graphql`
  fragment navigation on Contentful_Navigation {
    __typename
    sys {
      id
    }
    heading
    actionsCollection(limit: 10) {
      items {
        ...action
      }
    }
  }
`
