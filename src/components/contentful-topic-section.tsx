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

export type ContentfulTopicSectionProps = {
  section: SectionProps
}

export const ContentfulTopicSection = ({
  section,
}: ContentfulTopicSectionProps) => {
  const { topics } = section
  const topicOptions = getTopicOptions(section.topicOptions)
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
            {icon && topicOptions.icon && <svg>{icon}</svg>}
            {heading && topicOptions.heading && <h2>{heading}</h2>}
            {abstract && topicOptions.abstract && <p>{abstract}</p>}
          </div>
        )
      })}
    </>
  )
}
