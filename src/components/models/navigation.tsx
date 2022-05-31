import { Action } from "../elements/action"
import type { ContentfulAction } from "../contentful/contentful-action"
import type {
  NavigationSectionOptions,
  NavigationSectionVariant,
} from "../contentful/contentful-navigation-section"
import type { ContentfulNavigation } from "../contentful/contentful-navigation"
import { createUuid } from "../../lib/create-uuid"
import { navigationListStyles } from "./navigation-list.styles"
import { Heading } from "../elements/heading"
import { navigationItemStyles } from "./navigation-item.styles"

export type NavigationProps = {
  model: ContentfulNavigation
  options: NavigationSectionOptions
  variant: NavigationSectionVariant
}

export const Navigation = ({ model, options, variant }: NavigationProps) => {
  const {
    sys: { id },
    heading,
    actionsCollection,
  } = model

  return (
    <div>
      {options.heading && heading && (
        <Heading variant="small" options={{ margin: true }}>
          {heading}
        </Heading>
      )}
      <ul css={navigationListStyles({ variant })}>
        {actionsCollection.items.map((action: ContentfulAction) => {
          const {
            sys: { id },
          } = action

          return (
            <li css={navigationItemStyles({ variant })} key={createUuid(id)}>
              <Action variant="link" model={action} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
