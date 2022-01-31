import React from 'react'
import { Analytics } from './analytics'
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
    <Analytics
      variant={variant}
      eventId={eventId}
      theme={theme}
      analyze="region"
    >
      <div className="layout">
        {topicsCollection.items.map((model: ContentfulTopic, index: number) => {
          const {
            sys: { id },
          } = model
          return (
            <Topic
              key={id + index}
              model={model}
              options={options}
              variant={variant}
            />
          )
        })}
      </div>
    </Analytics>
  )
}
