import React from 'react'
import { Action } from './action'
import { Heading } from './elements/heading'
import { Media } from './media'
import { ContentfulAction } from './models/contentful-action'
import { ContentfulAsset } from './models/contentful-asset'
import { ContentfulTopic } from './models/contentful-topic'
import { TopicSectionOptions } from './models/contentful-topic-section'

export type TopicProps = {
  model: ContentfulTopic
  options: TopicSectionOptions
}

export const Topic = ({ model, options }: TopicProps) => {
  const {
    sys: { id },
    abstract,
    actionsCollection,
    heading,
    icon,
    mediaCollection,
  } = model

  return (
    <div className="text-center p-5">
      {options.icon && icon && <div>{icon}</div>}
      {options.heading && heading && <Heading>{heading}</Heading>}
      {options.abstract && abstract && <p>{abstract}</p>}
      {options.media &&
        mediaCollection &&
        mediaCollection.items.map((model: ContentfulAsset, index: number) => {
          const {
            sys: { id },
          } = model

          return <Media key={id + index} model={model} />
        })}
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
  )
}
