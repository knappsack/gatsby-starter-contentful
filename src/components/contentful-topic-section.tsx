import React from 'react'
import { getTopicOptions } from '../lib/get-topic-options'
import { ContentfulSection } from './contentful-section'

export type TopicProps = {
  __typename: string
  sys: { 
    id: string
  }
  heading: string
  abstract: string
  icon: string
}

export type ContentfulTopicSectionVariant =
  | 'block'
  | 'card'
  | 'divider'
  | 'featured'
  | 'gallery'
  | 'headline'
  | 'hero'
  | 'image'
  | 'quote'
  | 'showcase'
  | 'video'

export type ContentfulTopicSectionProps = {
  section: ContentfulSection
}

export const ContentfulTopicSection = ({
  section,
}: ContentfulTopicSectionProps) => {
  const { topicsCollection: { items } } = section
  // const topicOptions = section.topicOptions
  // const options = getTopicOptions(topicOptions)
  return (
    <>
      {items.map((topic: TopicProps, index: number) => {
        const {
          icon,
          heading,
          abstract,
          sys: {
            id
          }
        } = topic

        return (
          <div key={id + index}>
            {icon && <div>{icon}</div>}
            {heading && <h2>{heading}</h2>}
            {abstract && <p>{abstract}</p>}
          </div>
        )
      })}
    </>
  )
}
