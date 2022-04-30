import * as React from "react"

import { Action } from "../elements/action"
import { ContentfulAction } from "../contentful/contentful-action"
import {
  NavigationSectionOptions,
  NavigationSectionVariant,
} from "../contentful/contentful-navigation-section"
import { ContentfulNavigation } from "../contentful/contentful-navigation"
import { createUuid } from "../../lib/create-uuid"

export type NavigationProps = {
  model: ContentfulNavigation
  options: NavigationSectionOptions
  variant: NavigationSectionVariant
}

const Navigation = ({ model, options, variant }: NavigationProps) => {
  const {
    sys: { id },
    heading,
    actionsCollection,
  } = model

  return (
    <>
      {options.heading && <h3>{heading}</h3>}
      <ul data-style="navigation" data-variant={variant}>
        {actionsCollection.items.map((action: ContentfulAction) => {
          const {
            sys: { id },
          } = action
          return (
            <li key={createUuid(id)}>
              <Action model={action} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Navigation
