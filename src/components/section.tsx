import React from 'react'
import { ContentfulRichTech } from './contentful-rich-text'

export type SectionProps = {
  __typename: string
  text: any
  variation: string
}

export type ContentfulSectionProps = {
  section: SectionProps
}

export const ContentfulSection = ({ section }: ContentfulSectionProps) => {
  return <>{section.variation}</>
}

export const getSection = (section: SectionProps) => {
  switch (section.__typename) {
    case `ContentfulNavigationSection`:
      return <ContentfulSection section={section} />

    case `ContentfulTopicSection`:
      return <ContentfulSection section={section} />

    case `ContentfulTextSection`:
      return <ContentfulRichTech richText={section.text} />

    case `ContentfulExerciseSection`:
      return <ContentfulSection section={section} />

    default:
      return null
  }
}
