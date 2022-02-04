import React from 'react'
import { ContentfulAction } from '../contentful/contentful-action'
import { ContentfulTopic } from '../contentful/contentful-topic'
import { Action } from './action'

export type ActionsProps = {
  model: ContentfulTopic
}

export const Actions = ({ model }: ActionsProps) => {
  const {
    actionsCollection
  } = model
  
  return (
    <div data-style="actions">
      {actionsCollection.items.map((model: ContentfulAction, index: number) => {
        const {
          sys: { id },
        } = model

        return <Action key={id + index} model={model} />
      })}
    </div>
  )
}
