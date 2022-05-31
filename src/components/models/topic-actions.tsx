import type { TopicSectionVariant } from "../contentful/contentful-topic-section"
import { Group } from "../layout/group"
import { ContentfulAction } from "../contentful/contentful-action"
import { createUuid } from "../../lib/create-uuid"
import { Action } from "../elements/action"
import { GroupStylesProps } from "../layout/group.styles"
import { topicActionsStyles } from "./topic-actions.styles"
import { ActionStylesProps } from "../elements/action.styles"

export type TopicProps = {
  model: ContentfulAction[]
  variant: TopicSectionVariant
}

export const TopicActions = ({ model, variant }: TopicProps) => {
  const groupOptions: GroupStylesProps["options"] = {
    reverse: false,
    center: ["headline", "quote"].includes(variant),
    space: false,
  }

  const actionOptions: ActionStylesProps["options"] = {
    large: ["headline"].includes(variant),
  }

  return (
    <Group
      variant="row"
      options={groupOptions}
      css={topicActionsStyles({ variant })}
    >
      {model.slice(0, 2).map((action: ContentfulAction, index) => {
        const {
          sys: { id },
        } = action
        const variant = index === 0 ? "primary" : "secondary"

        return (
          <Action
            model={action}
            variant={variant}
            options={actionOptions}
            key={createUuid(id)}
          />
        )
      })}
    </Group>
  )
}
