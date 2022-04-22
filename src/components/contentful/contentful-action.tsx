import { graphql } from "gatsby"

export type ContentfulAction = {
  __typename: string
  sys: {
    id: string
  }
  anchor: string
  description: string
  eventId: string
  heading: string
  icon: string
  url: string
  page: {
    slug: string
    sys: {
      id: string
    }
  }
  query: string
}

export const action = graphql`
  fragment action on Contentful_Action {
    __typename
    sys {
      id
    }
    anchor
    description
    eventId
    heading
    icon
    url
    page {
      slug
      sys {
        id
      }
    }
    query
  }
`
