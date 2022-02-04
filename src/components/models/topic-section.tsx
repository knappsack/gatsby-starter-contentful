import React from 'react'
import { Analytics } from '../analytics'
import { ContentfulTopic } from '../contentful/contentful-topic'
import { ContentfulTopicSection } from '../contentful/contentful-topic-section'
import { GridTemplate } from '../layout/grid-template'
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
      area="region"
      eventId={eventId}
      theme={theme}
      variant={variant}
    >
      <GridTemplate variant={variant} theme={theme}>
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
      </GridTemplate>
    </Analytics>
  )
}
