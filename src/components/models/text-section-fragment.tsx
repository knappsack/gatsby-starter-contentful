import { graphql } from 'gatsby'

export type TextSectionVariant = 'text'

export type ContentfulTextSection = {
  __typename: string
  sys: {
    id: string
  }
  text: {
    json: any
  }
  variant: TextSectionVariant
  theme: string
  eventId: string
}

export const textSection = graphql`
  fragment textSection on Contentful_TextSection {
    __typename
    sys {
      id
    }
    text {
      json
    }
    variant
    theme
    eventId
  }
`
