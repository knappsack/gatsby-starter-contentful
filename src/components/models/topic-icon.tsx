import type { TopicSectionVariant } from "../contentful/contentful-topic-section"
import { Icon } from "../elements/icon"
import type { IconStylesProps } from "../elements/icon.styles"
import { topicIconStyles } from "./topic-icon.styles"

export type TopicIconProps = {
  model: string
  variant: TopicSectionVariant
}

export const TopicIcon = ({ model, variant }: TopicIconProps) => {
  const variants: Record<TopicSectionVariant, IconStylesProps["variant"]> = {
    block: "medium",
    card: "medium",
    featured: "large",
    headline: "large",
    quote: "large",
  }

  const styles = topicIconStyles({ variant })

  return (
    <div css={styles}>
      <Icon variant={variants[variant]} icon={model} />
    </div>
  )
}
