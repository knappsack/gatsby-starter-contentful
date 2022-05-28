import type { TopicSectionVariant } from "../contentful/contentful-topic-section"
import { Icon } from "../elements/icon"
import { topicIconStyles } from "./topic-icon.styles"

export type TopicIconProps = {
  model: {
    icon: string
  }
  variant: TopicSectionVariant
}

export const TopicIcon = ({ model, variant }: TopicIconProps) => {
  const { icon } = model

  const iconVariant = ["block", "card"].includes(variant) ? "medium" : "large"

  return (
    <div css={topicIconStyles({ variant })}>
      <Icon variant={iconVariant} name={icon} />
    </div>
  )
}
