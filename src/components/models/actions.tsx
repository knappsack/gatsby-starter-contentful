import * as React from "react"

import { uuid } from "../../lib/create-uuid"
import { ContentfulAction } from "../contentful/contentful-action"
import { Action } from "../elements/action"

export type ActionsProps = {
  model: ContentfulAction[]
}

export const Actions = ({ model }: ActionsProps) => (
  <div data-style="actions">
    {model.map((action: ContentfulAction) => {
      const {
        sys: { id },
      } = action

      return <Action key={uuid(id)} model={action} />
    })}
  </div>
)
