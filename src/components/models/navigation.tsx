import slugify from "@sindresorhus/slugify"
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
import type { UseTypesOf } from "../../lib/use-types-of"
import { useGtag } from "../../lib/gtag"

export type NavigationProps = UseTypesOf["div"] & {
  model: ContentfulNavigation
  options: NavigationSectionOptions
  variant: NavigationSectionVariant
}

export const Navigation = ({
  model,
  options,
  variant,
  ...props
}: NavigationProps) => {
  const {
    sys: { id },
    heading,
    actionsCollection,
  } = model

  const handleOnMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    useGtag("event", "engagement", {
      event_id: event.currentTarget.dataset.analyticsId,
    })
  }

  const analyticsId = `navigation:${slugify(heading)}`

  return (
    <div
      data-analytics-id={analyticsId}
      onMouseEnter={handleOnMouseEnter}
      {...props}
    >
      {options.heading && heading && (
        <Heading variant="small" options={{ margin: true }}>
          {heading}
        </Heading>
      )}
      {Object.entries(actionsCollection.items).length > 0 && (
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
      )}
    </div>
  )
}
