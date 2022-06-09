import { Heading } from "../elements/heading"
import { ContentfulTopic } from "../contentful/contentful-topic"
import {
  TopicSectionOptions,
  TopicSectionVariant,
} from "../contentful/contentful-topic-section"
import { Abstract } from "../elements/abstract"
import { AbstractStylesProps } from "../elements/abstract.styles"
import { DataProps } from "./section"
import { Group } from "../layout/group"
import { HeadingStylesProps } from "../elements/heading.styles"
import { TopicActions } from "./topic-actions"
import { topicContentStyles } from "./topic-content.styles"
import { TopicIcon } from "./topic-icon"
import { useHeadingTag } from "../../lib/use-heading-tag"

export type TopicProps = {
  data: DataProps
  model: ContentfulTopic
  options: TopicSectionOptions
  variant: TopicSectionVariant
}

export const TopicContent = ({ data, model, options, variant }: TopicProps) => {
  const {
    sys: { id },
    abstract,
    actionsCollection,
    heading,
    icon,
  } = model

  const headingVariants: Record<
    TopicSectionVariant,
    HeadingStylesProps["variant"]
  > = {
    block: "medium",
    card: "medium",
    featured: "xlarge",
    headline: "xlarge",
    quote: "small",
  }

  const abstractVariants: Record<
    TopicSectionVariant,
    AbstractStylesProps["variant"]
  > = {
    block: "medium",
    card: "medium",
    featured: "medium",
    headline: "large",
    quote: "xlarge",
  }

  const abstractOptions: AbstractStylesProps["options"] = {
    parse: ["block", "card", "featured"].includes(variant),
  }

  return (
    <Group
      css={topicContentStyles({ variant })}
      options={{ space: true }}
      variant="column"
    >
      <Group variant="column">
        {options.icon && icon && <TopicIcon model={icon} variant={variant} />}
        {options.heading && heading && (
          <Heading
            is={useHeadingTag(data, variant)}
            variant={headingVariants[variant]}
          >
            {heading}
          </Heading>
        )}
        {options.abstract && abstract && (
          <Abstract
            variant={abstractVariants[variant]}
            options={abstractOptions}
          >
            {abstract}
          </Abstract>
        )}
      </Group>
      {options.action && Object.entries(actionsCollection).length === 0 && (
        <TopicActions model={actionsCollection.items} variant={variant} />
      )}
    </Group>
  )
}
