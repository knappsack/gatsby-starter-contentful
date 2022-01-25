import React from 'react'
import { ContentfulTopic } from './models/contentful-topic'
import { ContentfulTopicSection } from './models/contentful-topic-section'
import { Topic } from './topic'

export type TopicSectionProps = {
  model: ContentfulTopicSection
}

export const TopicSection = ({ model }: TopicSectionProps) => {
  const {
    abstract,
    action,
    eventId,
    heading,
    icon,
    media,
    reversed,
    theme,
    topicsCollection,
    variant,
  } = model

  const options = {
    abstract,
    action,
    heading,
    icon,
    media,
    reversed,
  }

  return (
    <>
      {topicsCollection.items.map((model: ContentfulTopic, index: number) => {
        const {
          sys: { id },
        } = model
        return <Topic key={id + index} model={model} options={options} />
      })}
    </>
  )
}
