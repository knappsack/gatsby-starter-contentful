import React from 'react'
import { AnalyzeUserBehavior } from '../lib/analyze-user-behavior'
import { NavigationSection } from './navigation-section'
import { TextSection } from './text-section'
import { TopicSection } from './topic-section'
import { ContentfulTextSection } from './models/contentful-text-section'
import { ContentfulTopicSection } from './models/contentful-topic-section'

export type ContentfulSection = ContentfulTopicSection | ContentfulTextSection

export type SectionProps = {
  model: ContentfulSection[]
}

export const Section = ({ model }: SectionProps) => {
  return (
    <>
      {model
        ? model.map((section: ContentfulSection, index: number) => {
            const { variant, eventId } = section
            return (
              <AnalyzeUserBehavior
                key={index}
                variant={variant}
                eventId={eventId}
              >
                {getSection(section)}
              </AnalyzeUserBehavior>
            )
          })
        : null}
    </>
  )
}

const getSection = (section: ContentfulSection) => {
  switch (section.__typename) {
    case `Contentful_NavigationSection`:
      return <NavigationSection model={section as ContentfulTopicSection} />

    case `Contentful_TopicSection`:
      return <TopicSection model={section as ContentfulTopicSection} />

    case `Contentful_TextSection`:
      return <TextSection model={section as ContentfulTextSection} />

    default:
      return null
  }
}
