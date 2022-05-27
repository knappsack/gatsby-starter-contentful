import { Heading } from "../elements/heading"
import { ContentfulTopic } from "../contentful/contentful-topic"
import {
  TopicSectionOptions,
  TopicSectionVariant,
} from "../contentful/contentful-topic-section"
import { Abstract } from "../elements/abstract"
import { Group } from "../layout/group"
import { topicContentStyles } from "./topic-content.styles"
import { TopicActions } from "./topic-actions"
import { TopicIcon } from "./topic-icon"
import { DataProps } from "./section"
import { useHeadingTag } from '../../lib/use-heading-tag'

export type TopicProps = {
  model: ContentfulTopic
  options: TopicSectionOptions
  variant: TopicSectionVariant
  data: DataProps
}

export const TopicContent = ({ model, options, variant, data }: TopicProps) => {
  const {
    sys: { id },
    abstract,
    actionsCollection,
    heading,
    icon,
  } = model

  const headingVariant = ["card", "block"].includes(variant)
    ? "medium"
    : "large"

  return (
    <Group
      css={topicContentStyles({ variant })}
      options={{ space: true }}
      variant="column"
    >
      <Group variant="column">
        {options.icon && icon && (
          <TopicIcon model={{ icon }} variant={variant} />
        )}
        {options.heading && heading && (
          <Heading is={useHeadingTag(data, variant)} variant={headingVariant}>
            {heading}
          </Heading>
        )}
        {options.abstract && abstract && <Abstract>{abstract}</Abstract>}
      </Group>
      {options.action && actionsCollection && (
        <TopicActions model={actionsCollection.items} variant={variant} />
      )}
    </Group>
  )
}
