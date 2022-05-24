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
    <div data-style="navigation" data-variant={variant}>
      {options.heading && <h3 data-style="navigation-heading">{heading}</h3>}
      <ul data-style="navigation-list" data-variant={variant}>
        {actionsCollection.items.map((action: ContentfulAction) => {
          const {
            sys: { id },
          } = action
          return (
            <li data-style="navigation-item" key={createUuid(id)}>
              <Action model={action} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navigation
