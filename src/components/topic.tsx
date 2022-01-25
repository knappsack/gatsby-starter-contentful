import React from 'react'
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
    <>
      {options.icon && icon && <div>{icon}</div>}
      {options.heading && heading && <h2>{heading}</h2>}
      {options.abstract && abstract && <p>{abstract}</p>}
      {options.media &&
        mediaCollection &&
        mediaCollection.items.map((media: ContentfulAsset, index: number) => {
          const {
            sys: { id },
            url,
          } = media

          return <img key={id + index} src={url + `?q=10`} />
        })}
      {options.action &&
        actionsCollection &&
        actionsCollection.items.map(
          (action: ContentfulAction, index: number) => {
            const {
              sys: { id },
              page: { slug },
            } = action

            return (
              <a key={id + index} href={slug}>
                {action.heading}
              </a>
            )
          }
        )}
    </>
  )
}
