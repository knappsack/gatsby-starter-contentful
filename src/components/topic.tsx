import React from 'react'
import slugify from '@sindresorhus/slugify'
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
import { Icon } from './elements/icon'

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
  
  return (
    <Analytics
      variant={variant}
      eventId={slugify(heading)}
      theme={theme}
      analyze="unit"
    >
      <div className="media" style={{ order: options.reversed ? 1 : 0}}>
        {options.media &&
          mediaCollection &&
          mediaCollection.items.map((model: ContentfulAsset, index: number) => {
            const {
              sys: { id },
            } = model

            return <Media key={id + index} model={model} />
          })}
      </div>
      <div className="content">
        {options.icon && icon && <Icon icon={icon} />}
        {options.heading && heading && (
          <Heading variant={variant}>{heading}</Heading>
        )}
        {options.abstract && abstract && <p>{abstract}</p>}
        <div className='actions'>
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
