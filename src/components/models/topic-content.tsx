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

export type TopicProps = {
  model: ContentfulTopic
  options: TopicSectionOptions
  variant: TopicSectionVariant
  sectionIndex: number
  topicIndex: number
}

export const TopicContent = ({
  model,
  options,
  variant,
  sectionIndex,
  topicIndex,
}: TopicProps) => {
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
  
  let headingTag = "h3"
  if (
    ["featured", "headline"].includes(variant) &&
    sectionIndex === 1 &&
    topicIndex === 0
  ) {
    headingTag = "h1"
  } else if (["featured", "headline"].includes(variant)) {
    headingTag = "h2"
  } else if (["quote"].includes(variant)) {
    headingTag = "p"
  }

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
          <Heading is={headingTag} variant={headingVariant}>
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
