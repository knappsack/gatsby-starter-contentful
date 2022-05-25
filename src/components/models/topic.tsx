import * as React from "react"

import slugify from "@sindresorhus/slugify"
import { Heading } from "../elements/heading"
import { Icon } from "../elements/icon"
import { Media } from "./media"
import { ContentfulTopic } from "../contentful/contentful-topic"
import {
  TopicSectionOptions,
  TopicSectionVariant,
} from "../contentful/contentful-topic-section"
import { Abstract } from "../elements/abstract"
import { Group } from "../layout/group"
import { ContentfulAction } from "../contentful/contentful-action"
import { createUuid } from "../../lib/create-uuid"
import { Action } from "../elements/action"
import {
  topicContentStyle,
  topicCopyStyle,
  topicCtaStyle,
  topicStyles,
} from "./topic.styles"
import { useGtag } from "../../lib/gtag"

export type TopicProps = {
  model: ContentfulTopic
  options: TopicSectionOptions
  variant: TopicSectionVariant
}

export const Topic = ({ model, options, variant }: TopicProps) => {
  // NOTE: This is for example purposes only
  const ref = React.useRef<HTMLDivElement>(null)

  const {
    sys: { id },
    abstract,
    actionsCollection,
    heading,
    icon,
    mediaCollection,
    theme,
  } = model

  // NOTE: This is for example purposes only
  React.useEffect(() => {
    console.log(ref.current)
  }, [ref])

  const setAnalyticsId = `topic:${slugify(heading)}`

  const handleMouseEnter = () => {
    useGtag("event", "engagement", {
      event_id: ref.current?.dataset.analyticsId,
    })
  }

  return (
    <div
      css={topicStyles({ variant })}
      data-analytics-id={setAnalyticsId}
      onMouseEnter={handleMouseEnter}
      ref={ref}
    >
      {options.media && mediaCollection && (
        <Media model={model.mediaCollection.items} />
      )}
      <Group variant="column" css={topicContentStyle}>
        <Group variant="column" css={topicCopyStyle}>
          {options.icon && icon && (
            <div data-icon="">
              <Icon variant="large" name={icon} />
            </div>
          )}
          {options.heading && heading && (
            <Heading variant="large">{heading}</Heading>
          )}
          {options.abstract && abstract && <Abstract>{abstract}</Abstract>}
        </Group>
        {options.action && actionsCollection && (
          <Group variant="row" css={topicCtaStyle} ref={ref}>
            {actionsCollection.items.map((action: ContentfulAction) => {
              const {
                sys: { id },
              } = action

              return (
                <Action variant="primary" key={createUuid(id)} model={action} />
              )
            })}
          </Group>
        )}
      </Group>
    </div>
  )
}
