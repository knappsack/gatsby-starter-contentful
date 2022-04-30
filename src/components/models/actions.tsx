import * as React from "react"

import { createUuid } from "../../lib/create-uuid"
import { ContentfulAction } from "../contentful/contentful-action"
import { Action } from "../elements/action"

export type ActionsProps = {
  model: ContentfulAction[]
  variant?: "button"
}

export const Actions = ({ model, variant }: ActionsProps) => (
  <div data-style="actions" data-variant={variant}>
    {model.map((action: ContentfulAction) => {
      const {
        sys: { id },
      } = action

      return <Action key={createUuid(id)} model={action} />
    })}
  </div>
)
