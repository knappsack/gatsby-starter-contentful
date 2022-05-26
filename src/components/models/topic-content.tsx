import * as React from "react"

import slugify from "@sindresorhus/slugify"
import { Heading } from "../elements/heading"
import { TopicMedia } from "./topic-media"
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
import { CSSObject } from "@emotion/react"

export type TopicProps = {
  model: ContentfulTopic
  options: TopicSectionOptions
  variant: TopicSectionVariant
}

export const TopicContent = ({ model, options, variant }: TopicProps) => {
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
          <Heading variant={headingVariant}>{heading}</Heading>
        )}
        {options.abstract && abstract && <Abstract>{abstract}</Abstract>}
      </Group>
      {options.action && actionsCollection && (
        <TopicActions model={actionsCollection.items} variant={variant} />
      )}
    </Group>
  )
}
