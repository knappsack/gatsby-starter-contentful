import React from 'react'
import { ContentfulAction } from './models/action-fragment'
import { ContentfulAsset } from './models/asset-fragment'
import { ContentfulTopic } from './models/topic-fragment'
import { ContentfulTopicSection } from './models/topic-section-fragment'
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
