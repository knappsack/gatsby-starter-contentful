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
    reverse: undefined,
    center: ["headline", "quote"].includes(variant),
    space: undefined,
  }

  const actionOptions: ActionStylesProps["options"] = {
    large: ["headline"].includes(variant),
    expand: ["card"].includes(variant),
  }

  const sliceNumber = ["card"].includes(variant) ? 1 : 2
  const styles = topicActionsStyles({ variant })

  return (
    <Group css={styles} options={groupOptions} variant="row">
      {model.slice(0, sliceNumber).map((action: ContentfulAction, index) => {
        const {
          sys: { id },
        } = action

        const variant = index === 0 ? "primary" : "secondary"
        
        return (
          <Action
            key={createUuid(id)}
            model={action}
            options={actionOptions}
            variant={variant}
          />
        )
      })}
    </Group>
  )
}
