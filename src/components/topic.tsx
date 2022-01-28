import React from 'react'
import { Action } from './action'
import { Analytics } from './analytics'
import { Heading } from './elements/heading'
import { Media } from './media'
import { ContentfulAction } from './models/contentful-action'
import { ContentfulAsset } from './models/contentful-asset'
import { ContentfulTopic } from './models/contentful-topic'
import {
  TopicSectionOptions,
  TopicSectionVariant,
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
  } = model

  return (
    <Analytics variant={variant} eventId={id} analyze="unit">
      <div>
        {options.media &&
          mediaCollection &&
          mediaCollection.items.map((model: ContentfulAsset, index: number) => {
            const {
              sys: { id },
            } = model

            return <Media key={id + index} model={model} />
          })}
      </div>
      <div>
        {options.icon && icon && <div>{icon}</div>}
        {options.heading && heading && (
          <Heading variant={variant}>{heading}</Heading>
        )}
        {options.abstract && abstract && <p>{abstract}</p>}
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
    </Analytics>
  )
}
