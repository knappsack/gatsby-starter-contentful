import React from 'react'
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
  return (
    <>
      {topics.map((topic: TopicProps) => (
        <div key={topic.id}>
          <h2>{topic.heading}</h2>
          <p>{topic.abstract.abstract}</p>
        </div>
      ))}
    </>
  )
}
