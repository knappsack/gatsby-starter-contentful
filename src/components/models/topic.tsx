import * as React from "react"

import slugify from "@sindresorhus/slugify"
import { TopicMedia } from "./topic-media"
import type { ContentfulTopic } from "../contentful/contentful-topic"
import type {
  TopicSectionOptions,
  TopicSectionVariant,
} from "../contentful/contentful-topic-section"
import { topicStyles } from "./topic.styles"
import { useGtag } from "../../lib/gtag"
import { TopicContent } from "./topic-content"
import { DataProps } from "./section"
import { TopicContainer } from "./topic-container"

export type TopicProps = {
  model: ContentfulTopic
  options: TopicSectionOptions
  variant: TopicSectionVariant
  data: DataProps
}

export const Topic = ({ model, options, variant, data }: TopicProps) => {
  const {
    sys: { id },
    abstract,
    actionsCollection,
    heading,
    icon,
    mediaCollection,
  } = model

  const analyticsId = `topic:${slugify(heading)}`

  const handleOnMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    useGtag("event", "engagement", {
      event_id: event.currentTarget.dataset.analyticsId,
    })
  }

  return (
    <TopicContainer
      css={topicStyles({ variant, options })}
      data-analytics-id={analyticsId}
      model={actionsCollection.items[0]}
      onMouseEnter={handleOnMouseEnter}
      variant={variant}
    >
      {options.media && mediaCollection && (
        <TopicMedia variant={variant} model={mediaCollection.items} />
      )}
      <TopicContent
        model={model}
        options={options}
        data={data}
        variant={variant}
      />
    </TopicContainer>
  )
}
