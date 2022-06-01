import { Action } from "../elements/action"
import type { ContentfulAction } from "../contentful/contentful-action"
import type {
  NavigationSectionOptions,
  NavigationSectionVariant,
} from "../contentful/contentful-navigation-section"
import type { ContentfulNavigation } from "../contentful/contentful-navigation"
import { createUuid } from "../../lib/create-uuid"
import {
  navigationListStyles,
  NavigationListStylesProps,
} from "./navigation-list.styles"
import { Heading } from "../elements/heading"
import { navigationItemStyles } from "./navigation-item.styles"
import type { UseTypesOf } from "../../lib/use-types-of"

export type NavigationProps = UseTypesOf["div"] & {
  model: ContentfulNavigation
  options: NavigationSectionOptions & NavigationListStylesProps["options"]
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

  return (
    <div {...props}>
      {options.heading && heading && (
        <Heading variant="small" options={{ margin: true }}>
          {heading}
        </Heading>
      )}
      <ul
        css={navigationListStyles({
          variant,
          options: { mobile: options?.mobile },
        })}
      >
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
