import React from 'react'
import slugify from '@sindresorhus/slugify'
import { Analytics } from './analytics'
import { Action } from './elements/action'
import { Heading } from './elements/heading'
import { Icon } from './elements/icon'
import { Media } from './media'
import { ContentfulAction } from './models/contentful-action'
import { ContentfulAsset } from './models/contentful-asset'
import { ContentfulTopic } from './models/contentful-topic'
import {
  TopicSectionOptions, TopicSectionVariant
} from './models/contentful-topic-section'

export type TopicProps = {
  model: ContentfulTopic
  options: TopicSectionOptions
  variant: TopicSectionVariant
}

export const Topic = ({ model, options, variant }: TopicProps) => {
  const {
    sys: { id },
    abstract,
    actionsCollection,
    heading,
    icon,
    mediaCollection,
    theme,
  } = model

  const topicOptions = options.reversed ? 'reversed' : undefined

  return (
    <Analytics
      analyze="unit"
      eventId={slugify(heading)}
      theme={theme}
      variant={variant}
    >
      <div data-style="media" data-options={topicOptions}>
        {options.media &&
          mediaCollection &&
          mediaCollection.items.map((model: ContentfulAsset, index: number) => {
            const {
              sys: { id },
            } = model

            return <Media key={id + index} model={model} />
          })}
      </div>
      <div data-style="content">
        {options.icon && icon && <Icon icon={icon} />}
        {options.heading && heading && (
          <Heading variant={variant}>{heading}</Heading>
        )}
        {options.abstract && abstract && (
          <p data-style="abstract">{abstract}</p>
        )}
        <div data-style="actions">
          {options.action &&
            actionsCollection &&
            actionsCollection.items.map(
              (model: ContentfulAction, index: number) => {
                const {
                  sys: { id },
                } = model

                return <Action key={id + index} model={model} />
              }
            )}
        </div>
      </div>
    </Analytics>
  )
}
