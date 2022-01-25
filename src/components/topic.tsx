import React from 'react'
import { Link } from 'gatsby'
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
      {options.heading && heading && (
        <h2 className="text-2xl font-bold">{heading}</h2>
      )}
      {options.abstract && abstract && <p>{abstract}</p>}
      {options.media &&
        mediaCollection &&
        mediaCollection.items.map((media: ContentfulAsset, index: number) => {
          const {
            sys: { id },
            url,
          } = media

          return <img key={id + index} src={url + `?q=10&fit=pad&bg=rgb:222222&fm=webp`} />
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
              <Link key={id + index} to={slug} className='w-full m-3 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'>
                {action.heading}
              </Link>
            )
          }
        )}
    </div>
  )
}
