import React from 'react'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { ContentfulRichTech } from './contentful-rich-text'
import { ContentfulTopicSection, TopicProps, ContentfulTopicSectionVariant } from './contentful-topic-section'

export type ContentfulSection = {
  sys?: {
    id: string
  }
  __typename: string
  eventId: string

  abstract: boolean
  icon: boolean
  heading: boolean
  action: string

  topicsCollection: {
    items: TopicProps[]
  }
  variant: ContentfulTopicSectionVariant
  theme: string
}

export const getSection = (section: ContentfulSection) => {
  switch (section.__typename) {
    case `Contentful_NavigationSection`:
      return <ContentfulNavigationSection section={section} />

    case `Contentful_TopicSection`:
      return <ContentfulTopicSection section={section} />

    case `Contentful_TextSection`:
      return <ContentfulRichTech richText={section} />

    default:
      return null
  }
}
