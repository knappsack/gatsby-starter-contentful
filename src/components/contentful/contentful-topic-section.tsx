import { graphql } from "gatsby"
import { ContentfulTopic } from "./contentful-topic"

export type TopicSectionVariant =
  | "block"
  | "card"
  | "divider"
  | "featured"
  | "gallery"
  | "headline"
  | "hero"
  | "image"
  | "quote"
  | "showcase"
  | "video"

export type TopicSectionOptions = {
  abstract: boolean
  action: boolean
  heading: boolean
  icon: boolean
  media: boolean
  reversed: boolean
}

export type ContentfulTopicSection = TopicSectionOptions & {
  __typename: string
  sys: {
    id: string
  }
  eventId: string
  theme: string
  variant: TopicSectionVariant
  topicsCollection: {
    items: ContentfulTopic[]
  }
}

export const topicSection = graphql`
  fragment topicSection on Contentful_TopicSection {
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
    topicsCollection(limit: 10) {
      items {
        ...topic
      }
    }
  }
`
