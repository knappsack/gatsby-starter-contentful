import React from 'react'
import { getTopicOptions } from '../lib/get-topic-options'
import { SectionProps } from './section'

export type TopicProps = {
  __typename: string
  id: string
  heading: string
  abstract: {
    abstract: string
  }
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
  section: SectionProps
}

export const ContentfulTopicSection = ({
  section,
}: ContentfulTopicSectionProps) => {
  const { topics } = section
  const topicOptions = section.topicOptions
  const options = getTopicOptions(topicOptions)
  return (
    <>
      {topics.map((topic: TopicProps) => {
        const {
          icon,
          heading,
          abstract: { abstract },
        } = topic

        return (
          <div key={topic.id}>
            {icon && options.icon && <div>{icon}</div>}
            {heading && options.heading && <h2>{heading}</h2>}
            {abstract && options.abstract && <p>{abstract}</p>}
          </div>
        )
      })}
    </>
  )
}
