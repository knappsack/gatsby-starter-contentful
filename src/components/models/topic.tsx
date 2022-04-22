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
import { Actions } from "../models/actions"

export type TopicProps = {
  model: ContentfulTopic
  options: TopicSectionOptions
  variant: TopicSectionVariant
}

export const Topic = ({ model, options, variant }: TopicProps) => {
  const {
    sys: { id },
    abstract,
    actionsCollection,
    heading,
    icon,
    mediaCollection,
    theme,
  } = model

  const getOptions = [
    options.abstract ? "abstract" : undefined,
    options.action ? "action" : undefined,
    options.media ? "media" : undefined,
    options.reversed ? "reversed" : undefined,
  ]

  return (
    <Analytics
      area="unit"
      eventId={slugify(heading)}
      theme={theme}
      variant={variant}
    >
      {options.media && mediaCollection && <Media model={model.mediaCollection.items} />}
      <div data-style="content">
        {options.icon && icon && <Icon />}
        {options.heading && heading && (
          <Heading variant={variant}>{heading}</Heading>
        )}
        {options.abstract && abstract && (
          <Abstract variant={variant}>{abstract}</Abstract>
        )}
        {options.action && actionsCollection && <Actions model={model.actionsCollection.items} />}
      </div>
    </Analytics>
  )
}
