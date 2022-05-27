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

export type TopicProps = {
  model: ContentfulTopic
  options: TopicSectionOptions
  variant: TopicSectionVariant
  sectionIndex: number
  topicIndex: number
}

export const Topic = ({
  model,
  options,
  variant,
  sectionIndex,
  topicIndex,
}: TopicProps) => {
  const ref = React.useRef<HTMLDivElement>(null)

  const {
    sys: { id },
    abstract,
    actionsCollection,
    heading,
    icon,
    mediaCollection,
  } = model

  const setAnalyticsId = `topic:${slugify(heading)}`

  const handleMouseEnter = () => {
    useGtag("event", "engagement", {
      event_id: ref.current?.dataset.analyticsId,
    })
  }

  return (
    <div
      css={topicStyles({ variant, options })}
      data-analytics-id={setAnalyticsId}
      onMouseEnter={handleMouseEnter}
      ref={ref}
    >
      {options.media && mediaCollection && (
        <TopicMedia variant={variant} model={mediaCollection.items} />
      )}
      <TopicContent
        model={model}
        options={options}
        sectionIndex={sectionIndex}
        topicIndex={topicIndex}
        variant={variant}
      />
    </div>
  )
}
