import React from 'react'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { ContentfulRichTech } from './contentful-rich-text'
import { ContentfulTopicSection, TopicProps } from './contentful-topic-section'

export type SectionProps = {
  __typename: string
  eventId: string
  id: string
  text: {
    raw: any
  }
  topics: TopicProps[]
  variation: string
}

export const getSection = (section: SectionProps) => {
  switch (section.__typename) {
    case `ContentfulNavigationSection`:
      return <ContentfulNavigationSection section={section} />

    case `ContentfulTopicSection`:
      return <ContentfulTopicSection section={section} />

    case `ContentfulTextSection`:
      return <ContentfulRichTech richText={section.text} />

    default:
      return null
  }
}
