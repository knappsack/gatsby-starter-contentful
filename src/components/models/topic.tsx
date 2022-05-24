import * as React from "react"

import slugify from "@sindresorhus/slugify"
import { Analytics } from "../analytics"
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

  return (
    <Analytics
      area="unit"
      eventId={slugify(heading)}
      theme={theme}
      variant={variant}
    >
      {options.media && mediaCollection && (
        <Media model={model.mediaCollection.items} />
      )}
      <div style={{ display: 'flex', flexDirection: "column" }}>
        <Group variant="column" style={{ flex: 1 }}>
          {options.icon && icon && <div><Icon name={icon} /></div>}
          {options.heading && heading && (
            <Heading variant="large">{heading}</Heading>
          )}
          {options.abstract && abstract && <Abstract>{abstract}</Abstract>}
        </Group>
        {options.action && actionsCollection && (
          <Group variant="row" ref={ref}>
            {actionsCollection.items.map((action: ContentfulAction) => {
              const {
                sys: { id },
              } = action

              return <Action key={createUuid(id)} model={action} />
            })}
          </Group>
        )}
      </div>
    </Analytics>
  )
}
