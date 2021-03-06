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
import { Scroller } from "../layout/scroller"

export type TopicProps = {
  model: ContentfulTopic
  options: TopicSectionOptions
  variant: TopicSectionVariant
  data: DataProps
}

export const Topic = ({ model, options, variant, data }: TopicProps) => {
  const [triggered, setTriggered] = React.useState(false)
  const {
    sys: { id },
    abstract,
    actionsCollection,
    heading,
    icon,
    mediaCollection,
  } = model

  const handleOnMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (triggered) return null
    setTriggered(!triggered)

    useGtag("event", "engagement", {
      event_id: event.currentTarget.dataset.analyticsId,
    })
  }

  const scrollerOptions = {
    scroll: ["card"].includes(variant),
  }

  const analyticsId = `topic:${slugify(heading)}`
  const styles = topicStyles({ variant, options })

  return (
    <Scroller variant="item" options={scrollerOptions}>
      <div
        css={styles}
        data-analytics-id={analyticsId}
        onMouseEnter={handleOnMouseEnter}
      >
        {options.media && Object.entries(mediaCollection.items).length > 0 && (
          <TopicMedia variant={variant} model={mediaCollection.items} />
        )}
        <TopicContent
          model={model}
          options={options}
          data={data}
          variant={variant}
        />
      </div>
    </Scroller>
  )
}
