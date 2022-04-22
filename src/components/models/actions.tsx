import * as React from "react"
import { uuid } from "../../lib/create-uuid"
import { ContentfulAction } from "../contentful/contentful-action"
import { ContentfulTopic } from "../contentful/contentful-topic"
import { Action } from "./action"

export type ActionsProps = {
  model: ContentfulTopic
}

export const Actions = ({ model }: ActionsProps) => {
  const { actionsCollection } = model

  return (
    <div data-style="actions">
      {actionsCollection.items.map((action: ContentfulAction) => {
        const {
          sys: { id },
        } = model

        return <Action key={uuid(id)} model={action} />
      })}
    </div>
  )
}
